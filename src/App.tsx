import './styles/global.css'

import { CalcProvider } from './hooks/useCalc'
import { Index } from './pages'

export function App() {
  return (
    <CalcProvider>
      <Index />
    </CalcProvider>
  )
}
