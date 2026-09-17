import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Login · ${siteConfig.name}`,
  description: "Login to your Talent Tribe member account.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-cream-soft px-4 py-20">
      <div className="w-full max-w-md rounded-2xl border border-maroon-900/10 bg-white p-8 shadow-sm">
        <h1 className="text-center font-display text-3xl font-bold text-maroon-950">
          Welcome Back
        </h1>
        <p className="mt-2 text-center text-sm text-maroon-800/70">
          Login to access your Talent Tribe dashboard.
        </p>
        <div className="mt-8">
          <LoginForm />
        </div>
        <p className="mt-6 text-center text-sm text-maroon-800/70">
          Don&apos;t have an account?{" "}
          <Link
            href="/become-member"
            className="font-semibold text-gold-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
