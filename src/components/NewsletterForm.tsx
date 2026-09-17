"use client";

import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }
    toast.success("Join the people building what comes next.");
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-2"
    >
      <div className="flex overflow-hidden rounded-md bg-white">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full px-4 py-3 text-sm text-maroon-900 outline-none"
        />
        <button type="submit" className="btn-maroon rounded-none px-6">
          Subscribe →
        </button>
      </div>
      <p className="text-xs text-maroon-900">
        Join the people building what comes next.
      </p>
    </form>
  );
}
