// import { deleteFromCart } from "@/app/_redux/deleteCartItemSlice";
import { deleteFromCart } from "../../_redux/deleteCartItemSlice";
import { useUser } from "@clerk/nextjs";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../_redux/createOrderSlice";

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { user } = useUser();
  const { items } = useSelector((state) => state?.getCartItems);
  console.log("cart element in checkout form", items?.data);

  const placeOrder = () => {
    if (!items?.data || items?.data.length === 0) {
      console.error("No items in the cart!");
      return;
    }

    let productIds = items?.data.map((el) => el?.products[0].documentId); // Correct way to extract IDs
    console.log("Product IDs:", productIds);

    const orderData = {
      data: {
        email: user?.primaryEmailAddress?.emailAddress || "guest@example.com",
        username: user?.fullName || "Guest",
        amount,
        products: productIds,
      },
    };

    console.log("Order Data:", orderData); // Debugging

    dispatch(createOrder(orderData))
      .then(() => {
        items.data.forEach((el) => {
          dispatch(deleteFromCart(el?.documentId)); // ✅ Delete cart items after order
        });
        console.log("Order has been created and cart cleared!");
      })
      .catch((err) => console.error("Order creation failed:", err));
  };

  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  };

  const sendEmail = async () => {
    try {
      // Map your cart items to the expected format
      const formattedCartItems = items.data.map((item) => ({
        id: item.products[0].documentId,
        name: item.products[0].title,
        price: item.products[0].price,
        image: item.products[0].images[0].url, // Make sure this is a valid URL
      }));

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user?.primaryEmailAddress?.emailAddress,
          username: user?.fullName,
          cartItems: formattedCartItems,
          totalAmount: amount,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const data = await response.json();
      console.log("Email sent successfully:", data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      // Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();
      if (submitError) {
        handleError(submitError);
        return;
      }

      // Create the PaymentIntent and obtain clientSecret
      const res = await fetch("api/create-intent", {
        method: "POST",
        body: JSON.stringify({
          amount: amount,
        }),
      });

      const clientSecret = await res.json();
      placeOrder(); //place the order to the back end
      await sendEmail(); //sent email to the user with infos
      // Confirm the PaymentIntent using the details collected by the Payment Element
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: "http://localhost:3000/payment-confirm",
        },
      });

      if (error) {
        // This point is only reached if there's an immediate error when
        // confirming the payment. Show the error to your customer (for example, payment details incomplete)
        handleError(error);
      } else {
        // Your customer is redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer is redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
        console.log("Payment successful! Placing order...");
        // ✅ Call placeOrder after submitting the form
      }
    } catch (err) {
      console.error("Payment processing failed:", err);
      setErrorMessage("Payment processing failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-300 flex flex-col items-center mt-16 sm:mt-14"
    >
      <div
        className="mx-32 md:mx-auto md:w-2/5 mt-10 mb-8
      "
      >
        <PaymentElement />
      </div>
      <button
        // onClick={placeOrder}
        type="submit"
        disabled={!stripe || loading}
        className="bg-primary w-1/6 h-12 mb-10 rounded-md hover:bg-secondary transition duration-300 font-bold tracking-widest"
      >
        Submit Payment
      </button>
      {errorMessage && (
        <div className="text-red-600 font-bold">{errorMessage}</div>
      )}
    </form>
  );
};

export default CheckoutForm;
