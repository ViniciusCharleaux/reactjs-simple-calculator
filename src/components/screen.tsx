import React from 'react'

import { useCalc } from '../hooks/useCalc'

export const Screen: React.FC = () => {
  const { history, output } = useCalc()

  return (
    <>
      <div
        className={`flex bg-white h-20 p-6 text-right justify-end overflow-hidden text-gray-700 font-bold ${
          history.length > 20 ? 'text-xl' : 'text-3xl'
        }`}
      >
        {history}
      </div>
      <div className="flex bg-white h-12 py-4 px-6 text-right justify-end overflow-hidden text-gray-500 font-bold">
        {output}
      </div>
    </>
  )
}
