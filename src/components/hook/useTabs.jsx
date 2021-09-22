import { useState } from 'react'

export default function useTabs () {
  const [tabs, setTabs] = useState(0);

  const toggleTab = (value) => {
    setTabs(value)
  }

  return {
    tabs,
    toggleTab
  };
}