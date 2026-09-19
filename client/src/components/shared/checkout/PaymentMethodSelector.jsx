"use client";

import Radio from "@/components/ui/Radio";

export default function PaymentMethodSelector({ methods = [], value, onChange, name = "paymentMethod", className = "" }) {
  return <fieldset className={`grid gap-3 ${className}`}><legend className="text-h4">Payment method</legend>{methods.map((method) => <Radio key={method.value} id={`${name}-${method.value}`} name={name} value={method.value} label={method.label} description={method.description} checked={value === method.value} onChange={() => onChange?.(method.value)} />)}</fieldset>;
}
