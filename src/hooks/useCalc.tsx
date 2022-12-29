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
  reset: () => void
  backSpace: () => void
}

interface CalcProviderData {
  children: ReactNode
}

const CalcContext = createContext<CalcContextData>({} as CalcContextData)

const CalcProvider = ({ children }: CalcProviderData) => {
  const [output, setOutput] = useState('')
  const [history, setHistory] = useState('')
  const [isPoint, setIsPoint] = useState(false)
  const [isOp, setIsOp] = useState(false)

  const reset = useCallback(() => {
    setOutput('')
    setHistory('')
    setIsPoint(false)
  }, [])

  const calculate = useCallback(() => {
    const final = eval(
      output.substring(0, isOp ? output.length - 1 : output.length),
    )

    setHistory(final)
    setOutput(final)
  }, [output])

  const updateCalc = useCallback(
    (value: string) => {
      const operators = ['*', '/', '-', '+']

      if (operators.includes(value)) {
        if (history.length === 0 && (value === '/' || value === '*')) {
          setOutput((prev) => prev + '')
          setHistory((prev) => prev + '')
        } else {
          if (!isOp) {
            setIsOp(true)
            setIsPoint(false)
            setHistory((prev) => prev + value)

            const newText = eval(history)
            setOutput(eval(newText))
            setOutput((prev) => prev + value)
          }
        }
      } else {
        setIsOp(false)
        if (value === '.' && isPoint === false) {
          setOutput((prev) => prev + value)
          setHistory((prev) => prev + value)
          setIsPoint(true)
        } else if (value !== '.') {
          setOutput((prev) => prev + value)
          setHistory((prev) => prev + value)
        }
      }
    },
    [isPoint, history, isOp],
  )

  const backSpace = useCallback(() => {
    if (history.length > 0) {
      const newHistory = history.slice(0, history.length - 1)

      setHistory(newHistory)
      setOutput(newHistory)
    }
  }, [history])

  return (
    <CalcContext.Provider
      value={{
        output,
        history,
        updateCalc,
        calculate,
        reset,
        backSpace,
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
