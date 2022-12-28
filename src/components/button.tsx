import React from 'react'

interface ButtonProps {
  title?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <button
      className="w-24 h-24  bg-slate-300 text-gray-800 text-2xl transition border border-gray-800 hover:bg-gray-500 hover:text-xl"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
