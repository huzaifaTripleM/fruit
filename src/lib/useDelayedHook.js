import { useState } from 'react'
import { useTimeout } from 'usehooks-ts'

export default function useDelayedState(defaultValue, delayMs) {
  const [state, setState] = useState(defaultValue)

  useTimeout(() => {
    setState(newValue => newValue === state ? newValue : state)
  }, delayMs)

  function setDelayedState(newValue) {
    setState(newValue)
  }

  return [state, setDelayedState]
}

