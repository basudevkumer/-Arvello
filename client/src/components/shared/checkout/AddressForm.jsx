"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

export default function AddressForm({ initialValues = {}, countries = [], loading = false, onSubmit, submitLabel = "Save address", className = "" }) {
  return <form className={`grid gap-5 ${className}`} onSubmit={(event) => { event.preventDefault(); onSubmit?.(Object.fromEntries(new FormData(event.currentTarget))); }}><div className="grid gap-5 sm:grid-cols-2"><Input name="firstName" label="First name" defaultValue={initialValues.firstName} required /><Input name="lastName" label="Last name" defaultValue={initialValues.lastName} required /><Input name="phone" label="Phone number" type="tel" defaultValue={initialValues.phone} required /><Input name="email" label="Email address" type="email" defaultValue={initialValues.email} required /></div><Input name="address" label="Street address" defaultValue={initialValues.address} required /><div className="grid gap-5 sm:grid-cols-2"><Input name="city" label="City" defaultValue={initialValues.city} required /><Input name="postalCode" label="Postal code" defaultValue={initialValues.postalCode} required /></div>{countries.length ? <Select name="country" label="Country" defaultValue={initialValues.country} options={countries} required /> : null}<Button type="submit" loading={loading}>{submitLabel}</Button></form>;
}
