import React from 'react'
import { Button } from '../components/button'
import { useCalc } from '../hooks/useCalc'

export const Index: React.FC = () => {
  const { saco, alertTest } = useCalc()

  return (
    <div className="flex bg-gray-800 h-screen w-screen items-center justify-center flex-col">
      <div className="flex w-96 h-max text-right justify-end flex-col rounded">
        <div className="flex bg-white h-max p-4 text-right justify-end border-b">
          total
        </div>
        <div className="flex bg-white h-max p-2 text-right justify-end">
          historico
        </div>
        <div className="flex flex-wrap gap-4 justify-between mt-4 items-center">
          <Button onClick={alertTest} title="C" />
          <Button onClick={() => alert('ola')} title="CE" />
          <Button onClick={() => alert('ola')} title="%" />
          <Button onClick={() => alert('ola')} title="/" />

          <Button onClick={() => alert('ola')} title="7" />
          <Button onClick={() => alert('ola')} title="8" />
          <Button onClick={() => alert('ola')} title="9" />
          <Button onClick={() => alert('ola')} title="X" />

          <Button onClick={() => alert('ola')} title="4" />
          <Button onClick={() => alert('ola')} title="5" />
          <Button onClick={() => alert('ola')} title="6" />
          <Button onClick={() => alert('ola')} title="-" />

          <Button onClick={() => alert('ola')} title="1" />
          <Button onClick={() => alert('ola')} title="2" />
          <Button onClick={() => alert('ola')} title="3" />
          <Button onClick={() => alert('ola')} title="+" />

          <Button onClick={saco} title="algo" />
          <Button onClick={saco} title="0" />
          <Button onClick={saco} title="," />
          <Button onClick={saco} title="=" />
        </div>
      </div>
    </div>
  )
}
