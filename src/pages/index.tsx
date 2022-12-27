import React from 'react'
import { Button } from '../components/button'
import { useCalc } from '../hooks/useCalc'

export const Index: React.FC = () => {
  const { display, history, setNumber, setOperator } = useCalc()

  return (
    <div className="flex bg-gray-800 h-screen w-screen items-center justify-center flex-col">
      <div className="flex w-96 h-max text-right justify-end flex-col rounded">
        <div className="flex bg-white h-max p-6 text-right justify-end border-b">
          {display}
        </div>
        <div className="flex bg-white h-max p-4 text-right justify-end">
          {history}
        </div>
        <div className="flex flex-wrap gap-4 justify-between mt-4 items-center">
          <Button onClick={() => alert('ola')} title="C" />
          <Button onClick={() => alert('ola')} title="CE" />
          <Button onClick={() => alert('ola')} title="%" />
          <Button onClick={() => alert('ola')} title="/" />

          <Button onClick={() => setNumber('7')} title="7" />
          <Button onClick={() => setNumber('8')} title="8" />
          <Button onClick={() => setNumber('9')} title="9" />
          <Button onClick={() => setOperator('X')} title="X" />

          <Button onClick={() => setNumber('4')} title="4" />
          <Button onClick={() => setNumber('5')} title="5" />
          <Button onClick={() => setNumber('6')} title="6" />
          <Button onClick={() => setOperator('-')} title="-" />

          <Button onClick={() => setNumber('1')} title="1" />
          <Button onClick={() => setNumber('2')} title="2" />
          <Button onClick={() => setNumber('3')} title="3" />
          <Button onClick={() => setOperator('+')} title="+" />

          <Button onClick={() => {}} title="algo" />
          <Button onClick={() => setNumber('0')} title="0" />
          <Button onClick={() => setNumber('.')} title="," />
          <Button onClick={() => setOperator('0')} title="=" />
        </div>
      </div>
    </div>
  )
}
