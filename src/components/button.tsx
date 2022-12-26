import React from 'react'

interface ButtonProps {
  title?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <button
      className="w-20 h-20 rounded bg-slate-300 text-gray-800"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
