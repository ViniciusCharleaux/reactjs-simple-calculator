import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react'

interface CalcContextData {
  display: string
  history: string
  setNumber: (value: string) => void
  setOperator: (value: string) => void
}

interface CalcProviderData {
  children: ReactNode
}

const CalcContext = createContext<CalcContextData>({} as CalcContextData)

const CalcProvider = ({ children }: CalcProviderData) => {
  const [display, setDisplay] = useState('')
  const [history, setHistory] = useState('')
  const [isOperator, setIsOperator] = useState(false)

  const setNumber = useCallback((value: string) => {
    setDisplay((prev) => prev + value)
    setHistory((prev) => prev + value)
    setIsOperator(false)
  }, [])

  const setOperator = useCallback(
    (value: string) => {
      if (!(history.length === 0)) {
        if (!isOperator) {
          setDisplay((prev) => prev + value)
          setHistory((prev) => prev + value)
          setIsOperator(true)
        }
      }
    },
    [isOperator, history],
  )

  return (
    <CalcContext.Provider
      value={{
        display,
        history,
        setNumber,
        setOperator,
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
