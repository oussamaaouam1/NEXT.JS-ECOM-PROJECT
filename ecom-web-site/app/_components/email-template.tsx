import * as React from "react";
import MyEmail from '../emails/my-email';

interface EmailTemplateProps {
  firstName: string;
  cartItems: Array<{
    id: string;
    name: string;
    price: number;
    image?: string;
  }>;
  totalAmount: number;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  cartItems,
  totalAmount,
}) => (
  <MyEmail 
    username={firstName}
    cartItems={cartItems}
    totalAmount={totalAmount}
  />
);
