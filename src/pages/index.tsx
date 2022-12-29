import React from 'react'
import { useCalc } from '../hooks/useCalc'
import { Button, Screen, TopButton } from '../components'

export const Index: React.FC = () => {
  const { updateCalc, calculate, reset, backSpace } = useCalc()

  return (
    <div className="flex bg-gray-800 h-screen w-screen items-center justify-center flex-col">
      <div className="flex w-96 h-max text-right justify-end flex-col">
        <Screen />
        <div className="flex flex-wrap items-center">
          <div className="flex flex-row h-auto w-full">
            <TopButton onClick={reset} title="C" />
            <TopButton onClick={backSpace} title="<-" />
          </div>

          <Button onClick={() => updateCalc('7')} title="7" />
          <Button onClick={() => updateCalc('8')} title="8" />
          <Button onClick={() => updateCalc('9')} title="9" />
          <Button onClick={() => updateCalc('*')} title="X" />

          <Button onClick={() => updateCalc('4')} title="4" />
          <Button onClick={() => updateCalc('5')} title="5" />
          <Button onClick={() => updateCalc('6')} title="6" />
          <Button onClick={() => updateCalc('-')} title="-" />

          <Button onClick={() => updateCalc('1')} title="1" />
          <Button onClick={() => updateCalc('2')} title="2" />
          <Button onClick={() => updateCalc('3')} title="3" />
          <Button onClick={() => updateCalc('+')} title="+" />

          <Button onClick={() => updateCalc('/')} title="/" />
          <Button onClick={() => updateCalc('0')} title="0" />
          <Button onClick={() => updateCalc('.')} title="," />
          <Button onClick={calculate} title="=" />
        </div>
      </div>
    </div>
  )
}
