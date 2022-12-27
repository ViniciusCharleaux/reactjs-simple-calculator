import React from 'react'

interface ButtonProps {
  title?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <button
      className="w-20 h-20 rounded bg-slate-300 text-gray-800 text-2xl transition hover:bg-gray-500 hover:text-xl"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
