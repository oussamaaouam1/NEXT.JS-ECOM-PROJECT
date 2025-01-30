// import { PaymentElement } from "@stripe/react-stripe-js";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";


const CheckoutForm = () => {

const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  }

  return (
    <form className="bg-slate-300 flex flex-col items-center mt-16 sm:mt-14">
      <div className="mx-32 md:mx-auto md:w-2/5 mt-10 mb-8
      ">
      <PaymentElement />

      </div>
      <button className="bg-primary w-1/6 h-12 mb-10 rounded-md hover:bg-secondary transition duration-300 font-bold tracking-widest">Submit</button>
    </form>
  );
};

export default CheckoutForm;
