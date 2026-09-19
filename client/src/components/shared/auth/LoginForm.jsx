"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginForm({ onSubmit, loading = false, error, registerHref = "/register", forgotPasswordHref = "/forgot-password", className = "" }) {
  return <form className={`grid gap-5 ${className}`} onSubmit={(event) => { event.preventDefault(); onSubmit?.(Object.fromEntries(new FormData(event.currentTarget))); }}><div className="grid gap-2"><Input name="email" label="Email address" type="email" required /><Input name="password" label="Password" type="password" required /></div>{error ? <p className="text-body-sm text-error" role="alert">{error}</p> : null}<div className="flex flex-wrap items-center justify-between gap-3"><Link href={forgotPasswordHref} className="text-label-sm text-primary hover:text-primary-hover">Forgot password?</Link><Button type="submit" loading={loading}>Log in</Button></div><p className="text-body-sm text-text-secondary">New to Arvello? <Link href={registerHref} className="font-semibold text-primary hover:text-primary-hover">Create an account</Link></p></form>;
}
