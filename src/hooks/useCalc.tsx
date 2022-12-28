/* eslint-disable no-eval */
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react'

interface CalcContextData {
  output: string
  history: string
  updateCalc: (value: string) => void
  calculate: () => void
}

interface CalcProviderData {
  children: ReactNode
}

const CalcContext = createContext<CalcContextData>({} as CalcContextData)

const CalcProvider = ({ children }: CalcProviderData) => {
  const [output, setOutput] = useState('')
  const [history, setHistory] = useState('')
  const [isPoint, setIsPoint] = useState(false)

  const updateCalc = useCallback(
    (value: string) => {
      if (value === '.' && isPoint === false) {
        console.log(isPoint)
        console.log('1')

        setOutput((prev) => prev + value)
        setHistory((prev) => prev + value)
        setIsPoint(true)
      } else if (value !== '.') {
        console.log('2')

        setIsPoint(false)
        setOutput((prev) => prev + value)
        setHistory((prev) => prev + value)
      }
    },
    [isPoint],
  )

  const calculate = useCallback(() => {
    const final = eval(output)

    setOutput(final)
  }, [output])

  return (
    <CalcContext.Provider
      value={{
        output,
        history,
        updateCalc,
        calculate,
      }}
    >
      {children}
    </CalcContext.Provider>
  )
}

function useCalc(): CalcContextData {
  const context = useContext(CalcContext)

  if (!context) {
    throw new Error('useCalc must be used within a CalcProvider')
  }

  return context
}

export { CalcProvider, useCalc }
