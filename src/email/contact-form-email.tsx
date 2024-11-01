import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  Name: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  Name,

}: ContactFormEmailProps) {
  return (
    <>
      <div>New message from your portfolio site</div>
      <Container>
        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
          <Heading className="leading-tight">
            You received the following message from the contact form
          </Heading>
          <Text>
            {message}
          </Text>
          <Hr />
          <Text>
            The sender&apos;s email is: {senderEmail}
          </Text>
          <Text>
            The sender&apos;s Name is: {Name}
          </Text>
        </Section>
      </Container>
    </>
      );
}