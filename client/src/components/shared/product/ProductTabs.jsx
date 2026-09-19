"use client";

import { useId, useState } from "react";

export default function ProductTabs({ tabs = [], defaultTab, className = "" }) {
  const tabsId = useId();
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];
  if (!currentTab) return null;
  return <div className={`grid gap-6 ${className}`}><div className="flex gap-6 overflow-x-auto border-b border-border" role="tablist" aria-label="Product information">{tabs.map((tab) => { const isActive = tab.id === currentTab.id; return <button key={tab.id} type="button" role="tab" id={`${tabsId}-${tab.id}`} aria-selected={isActive} aria-controls={`${tabsId}-panel-${tab.id}`} onClick={() => setActiveTab(tab.id)} className={`min-h-12 shrink-0 border-b-2 px-1 text-label-md transition-theme motion-reduce:transition-none ${isActive ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-primary"}`}>{tab.label}</button>; })}</div><div role="tabpanel" id={`${tabsId}-panel-${currentTab.id}`} aria-labelledby={`${tabsId}-${currentTab.id}`} className="text-body-md text-text-secondary">{currentTab.content}</div></div>;
}
