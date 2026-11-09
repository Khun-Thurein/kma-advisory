import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Booking confirmed",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookingConfirmedPage() {
  return (
    <main
      id="main-content"
      className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-20"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
        Booking confirmed
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
        Your consultation is booked.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-stone">
        Thank you. Check your email for the booking details and keep any relevant
        dates or questions ready for the call.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-sm bg-teal-dark px-6 text-sm font-semibold text-white hover:bg-teal"
      >
        Return home
      </Link>
    </main>
  );
}
