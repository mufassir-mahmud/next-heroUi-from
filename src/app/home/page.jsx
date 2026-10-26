
"use client";

import {
  ArrowsRotateLeft,
  Box,
  ChevronDown,
  CreditCard,
  PlanetEarth,
  Receipt,
  ShoppingBag,
} from "@gravity-ui/icons";

import { Accordion } from "@heroui/react";
import MyModal from '../home/modal/page'
const items = [
  {
    content:
      "Browse products, add items to your cart, and proceed to checkout.",
    icon: ShoppingBag,
    title: "How do I place an order?",
  },
  {
    content:
      "You can modify or cancel your order before it is shipped.",
    icon: Receipt,
    title: "Can I modify or cancel my order?",
  },
  {
    content:
      "We accept Visa, Mastercard, American Express, and other major credit cards.",
    icon: CreditCard,
    title: "What payment methods do you accept?",
  },
  {
    content:
      "Shipping costs depend on your location and order size. Orders over $50 qualify for free shipping.",
    icon: Box,
    title: "How much does shipping cost?",
  },
  {
    content:
      "Yes, we ship to most countries. Check our shipping policies for details.",
    icon: PlanetEarth,
    title: "Do you ship internationally?",
  },
  {
    content:
      "You can request a refund within 30 days of purchase by contacting customer support.",
    icon: ArrowsRotateLeft,
    title: "How do I request a refund?",
  },
];

export default function AccordionPage() {
  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-3xl font-bold">
          Frequently Asked Questions
        </h1>

        <Accordion className="w-full">
          {items.map((item) => {
            const ItemIcon = item.icon;

            return (
              <Accordion.Item key={item.title}>
                <Accordion.Heading>
                  <Accordion.Trigger>
                    <span className="me-3 inline-flex size-5 shrink-0">
                      <ItemIcon />
                    </span>

                    <span className="flex-1 text-left">
                      {item.title}
                    </span>

                    <Accordion.Indicator>
                      <ChevronDown />
                    </Accordion.Indicator>
                  </Accordion.Trigger>
                </Accordion.Heading>

                <Accordion.Panel>
                  <Accordion.Body>
                    {item.content}
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>
        <MyModal>`</MyModal>
      </div>
    </main>
  );
}
