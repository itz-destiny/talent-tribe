"use client";

import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";

export default function BecomeMemberForm() {
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!agreed) {
      toast.error("Please agree to the terms above to proceed.");
      return;
    }
    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }
    toast.success(
      "Almost there! We'll send your dashboard login details to your email.",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-maroon-900/10 bg-white p-8 shadow-sm"
    >
      <label className="flex items-start gap-3 text-sm text-maroon-800/90">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 h-4 w-4 accent-gold-500"
        />
        I understand the ₦2,000 one-time membership fee and agree to the
        terms and conditions. I confirm that I want to proceed with creating
        my Talent Tribe membership account.
      </label>
      {!agreed && (
        <p className="mt-2 text-xs text-maroon-500">
          Please agree to the terms above to proceed with your membership
        </p>
      )}

      <div className="mt-6">
        <p className="font-heading text-sm font-bold text-maroon-950">
          Complete Your Payment
        </p>
        <p className="mt-1 text-sm text-maroon-800/70">
          Enter your email to receive your dashboard login details
        </p>
        <label className="mt-3 block text-xs font-heading font-semibold uppercase tracking-widest text-maroon-900/60">
          Email Address *
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-md border border-maroon-900/20 px-4 py-3 text-sm outline-none focus:border-gold-500"
        />
      </div>

      <button type="submit" className="btn-gold mt-6 w-full justify-center">
        Become Member
      </button>
    </form>
  );
}
