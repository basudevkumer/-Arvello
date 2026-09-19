"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function RegisterForm({ onSubmit, loading = false, error, loginHref = "/login", className = "" }) {
  return <form className={`grid gap-5 ${className}`} onSubmit={(event) => { event.preventDefault(); onSubmit?.(Object.fromEntries(new FormData(event.currentTarget))); }}><div className="grid gap-5 sm:grid-cols-2"><Input name="firstName" label="First name" required /><Input name="lastName" label="Last name" required /></div><Input name="email" label="Email address" type="email" required /><Input name="password" label="Password" type="password" required helperText="Use at least 8 characters." /><Input name="confirmPassword" label="Confirm password" type="password" required />{error ? <p className="text-body-sm text-error" role="alert">{error}</p> : null}<Button type="submit" loading={loading}>Create account</Button><p className="text-body-sm text-text-secondary">Already have an account? <Link href={loginHref} className="font-semibold text-primary hover:text-primary-hover">Log in</Link></p></form>;
}
