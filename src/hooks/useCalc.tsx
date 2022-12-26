import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from 'react'

interface CalcContextData {
  alertTest: () => void
  saco: () => void
}

interface CalcProviderData {
  children: ReactNode
}

const CalcContext = createContext<CalcContextData>({} as CalcContextData)

const CalcProvider = ({ children }: CalcProviderData) => {
  useEffect(() => {
    console.log('a')
  }, [])

  const alertTest = useCallback(() => {
    console.log('ia')
  }, [])

  const saco = useCallback(() => {
    console.log('ia')
  }, [])

  return (
    <CalcContext.Provider
      value={{
        alertTest,
        saco,
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
