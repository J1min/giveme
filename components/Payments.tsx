"use client";

import { useEffect, useRef, useState } from "react";
import {
  ANONYMOUS,
  PaymentWidgetInstance,
  loadPaymentWidget,
} from "@tosspayments/payment-widget-sdk";
import config from "@/config";
import PriceSelector from "./PriceRadio";
import { styled } from "styled-components";
import Button from "./Button";
import { nanoid } from "nanoid";

export default function Payments() {
  const [price, setPrice] = useState(5000);

  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const customerKey = ANONYMOUS;

  const handlePayments = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: "토스 티셔츠 외 2건",
        customerName: "김토스",
        customerEmail: "customer123@gmail.com",
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(
        config.clientKey,
        customerKey
      );

      paymentWidget.renderPaymentMethods("#payment-widget", price);

      paymentWidgetRef.current = paymentWidget;
    })();
  }, []);

  return (
    <PaymentsWrapper>
      <PriceSelector price={price} setPrice={setPrice} />
      <div id="payment-widget" />
      <Button onClick={handlePayments}>결제하기</Button>
    </PaymentsWrapper>
  );
}

const PaymentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 760px;
  #payment-widget {
    width: 760px;
  }
`;
