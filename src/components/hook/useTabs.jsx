import { useState } from 'react'

export default function useTabs (defaultValue) {
  const [tabs, setTabs] = useState(defaultValue | 0);

  const toggleTab = (value) => {
    setTabs(value)
  }

  return {
    tabs,
    toggleTab
  };
}