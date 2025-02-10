import { EmailTemplate } from "../../_components/email-template";
import { Resend } from "resend";
// import { useSelector } from "react-redux";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("debug the email sending key", process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Get the cart data and user info from the request body
    const { email, username, cartItems, totalAmount } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Order Confirmation",
      react: EmailTemplate({
        firstName: username,
        cartItems: cartItems,
        totalAmount: totalAmount,
      }),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return Response.json({ error }, { status: 500 });
    }

    console.log("Email sent successfully:", data);
    return Response.json(data);
  } catch (error) {
    console.error("Unexpected Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
