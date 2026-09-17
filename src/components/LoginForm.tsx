"use client";

import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!id.trim() || !password.trim()) {
      toast.error("Please fill in both fields.");
      return;
    }
    toast.info("Login is not wired up to a backend yet.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs font-heading font-semibold uppercase tracking-widest text-maroon-900/60">
          Email / Community ID
        </label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="mt-2 w-full rounded-md border border-maroon-900/20 px-4 py-3 text-sm outline-none focus:border-gold-500"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label className="block text-xs font-heading font-semibold uppercase tracking-widest text-maroon-900/60">
            Password
          </label>
          <a href="#" className="text-xs text-gold-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-md border border-maroon-900/20 px-4 py-3 text-sm outline-none focus:border-gold-500"
        />
      </div>
      <button type="submit" className="btn-gold w-full justify-center">
        Login
      </button>
    </form>
  );
}
