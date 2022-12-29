import React from 'react'

interface TopButtonProps {
  title?: string
  onClick?: () => void
}

export const TopButton: React.FC<TopButtonProps> = ({ onClick, title }) => {
  return (
    <button
      className="w-48 h-16 bg-slate-500 text-gray-100 border border-gray-800 text-2xl hover:bg-slate-300 hover:text-gray-800 hover:text-xl"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
