"use client";

import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { FormEvent, useState, type ReactNode } from "react";

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-sm border border-ink/20 bg-paper px-4 py-3 text-base text-ink placeholder:text-stone/70 hover:border-teal focus:border-teal focus:outline-none";

function FieldLabel({
  icon: Icon,
  children,
}: {
  icon: typeof UserIcon;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon className="size-4 shrink-0 text-teal" aria-hidden />
      {children}
    </span>
  );
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Google Form submission will be wired when the form ID is available.
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <label className="block text-sm font-medium text-ink">
        <FieldLabel icon={UserIcon}>Name (Required)</FieldLabel>
        <input
          className={fieldClassName}
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          required
        />
      </label>
      <label className="block text-sm font-medium text-ink">
        <FieldLabel icon={EnvelopeIcon}>Email (Optional)</FieldLabel>
        <input
          className={fieldClassName}
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
        />
      </label>
      <label className="block text-sm font-medium text-ink">
        <FieldLabel icon={PhoneIcon}>Phone (Required)</FieldLabel>
        <input
          className={fieldClassName}
          name="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          autoComplete="tel"
          required
        />
      </label>
      <label className="block text-sm font-medium text-ink">
        <FieldLabel icon={TagIcon}>Subject</FieldLabel>
        <input
          className={fieldClassName}
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          required
        />
      </label>
      <label className="block text-sm font-medium text-ink">
        <FieldLabel icon={ChatBubbleBottomCenterTextIcon}>
          How can we help?
        </FieldLabel>
        <textarea
          className="mt-2 min-h-36 w-full resize-y rounded-sm border border-ink/20 bg-paper px-4 py-3 text-base leading-7 text-ink placeholder:text-stone/70 hover:border-teal focus:border-teal focus:outline-none"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </label>
      <button
        type="submit"
        className="motion-control inline-flex min-h-12 items-center justify-center gap-1.5 rounded-sm bg-teal-dark px-5 text-sm font-semibold text-white hover:bg-teal"
      >
        <PaperAirplaneIcon className="size-4" aria-hidden />
        Submit
      </button>
    </form>
  );
}
