import { useState } from "react"
import NumberToLetter from "./numberToLetter"

function useNumberToLetter() {
  const [numberValue, setnumberValue] = useState()

  const setNumbertoletter = value => {
    setnumberValue(NumberToLetter(value))
  }

  return [numberValue, setNumbertoletter]
}

export default useNumberToLetter
