import { FiX } from "react-icons/fi";

export default function ActiveFilters({ filters = [], onRemove, onClear, className = "" }) {
  if (!filters.length) return null;
  return <div className={`flex flex-wrap items-center gap-2 ${className}`} aria-label="Active filters"><span className="text-label-sm text-text-secondary">Filters:</span>{filters.map((filter) => <button key={filter.id || `${filter.label}-${filter.value}`} type="button" onClick={() => onRemove?.(filter)} className="inline-flex min-h-8 items-center gap-1 rounded-full bg-surface-selected px-3 text-caption text-primary hover:bg-primary hover:text-text-inverse"><span>{filter.label}{filter.value ? `: ${filter.value}` : ""}</span><FiX size={14} aria-hidden="true" /></button>)}{onClear ? <button type="button" onClick={onClear} className="ml-1 text-label-sm text-primary hover:text-primary-hover">Clear all</button> : null}</div>;
}
