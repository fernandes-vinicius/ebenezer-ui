import { useState } from 'react'

export function usePasswordVisibility(initialVisibility = false) {
  const [isVisible, setIsVisible] = useState(initialVisibility)

  function toggleVisibility() {
    setIsVisible((visible) => !visible)
  }

  return {
    isVisible,
    toggleVisibility,
  }
}
