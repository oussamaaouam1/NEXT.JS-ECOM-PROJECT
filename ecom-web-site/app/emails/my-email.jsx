import {
  Section,
  Row,
  Text,
  Img,
  Button,
  Column,
} from "@react-email/components";
import React from "react";

const MyEmail = ({ cartItems, totalAmount, username }) => {
  return (
    <div>
      <Section className="my-[16px]">
        <Row>
          <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
            Order Confirmation
          </Text>
          <Text className="mt-[8px] text-[16px] leading-[24px] text-gray-500">
            Hello {username}, thank you for your order!
          </Text>
        </Row>

        {/* Table-based layout for items */}
        <Row style={{ width: "100%" }}>
          {cartItems?.map((item) => (
            <Column
              key={item.id}
              style={{
                padding: "16px",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                textAlign: "center",
                width: `${100 / (cartItems?.length || 1)}%`,
                margin: "0 8px",
              }}
            >
              <Img
                alt={item.name}
                width={180}
                height={180}
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                  margin: "0 auto",
                }}
                src={item.image}
              />
              <Text className="m-0 mt-[24px] text-[20px] font-semibold leading-[28px] text-gray-900">
                {item.name}
              </Text>
              <Text className="m-0 mt-[8px] text-[16px] font-semibold leading-[24px] text-gray-900">
                ${item.price}
              </Text>
            </Column>
          ))}
        </Row>

        {/* Total Amount Section */}
        <Row className="mt-[32px]">
          <Text className="m-0 text-[28px] font-bold leading-[24px] text-gray-900">
            Total Amount: ${totalAmount}
          </Text>
        </Row>

        {/* Footer Section */}
        <Row className="mt-[32px]">
          <Text className="text-[14px] leading-[24px] text-gray-500">
            If you have any questions about your order, please contact our
            customer support.
          </Text>
        </Row>
      </Section>
    </div>
  );
};

export default MyEmail;
