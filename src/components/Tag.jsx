const tagColors = {
  knowledgebase: 'bg-[#d84520]',
  usage: 'bg-[#e0a332]',
  hints: 'bg-[#e0a332]',
  selection: 'bg-[#e0a332]',
  locations: 'bg-[#e0b832]',
  laws: 'bg-[#d89120]',
  featured: 'bg-[#2fb44b]',
  target: 'bg-[#e0a332]',
  hunting: 'bg-[rgba(216,145,32,1)]',
  defense: 'bg-[#d89120]',
  range: 'bg-[#e0b832]',
  default: 'bg-[#e0a332]',
}

export default function Tag({ children, variant = 'default', className = '' }) {
  const colorClass = tagColors[variant] || tagColors.default

  return (
    <span
      className={`inline-flex items-center justify-center px-[9px] py-[1.8px] rounded text-[12.6px] font-semibold uppercase text-white ${colorClass} ${className}`}
    >
      {children}
    </span>
  )
}
