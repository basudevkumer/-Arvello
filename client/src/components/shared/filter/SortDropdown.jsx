import { useId } from "react";
import Select from "@/components/ui/Select";

export default function SortDropdown({ value, options = [], onChange, label = "Sort by", className = "" }) {
  const id = useId();
  return <Select id={id} name="sort" label={label} value={value} onChange={(event) => onChange?.(event.target.value)} options={options} className={className} />;
}
