import { useMemo } from 'react'

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="h-10 flex items-center justify-center">
      © {year} Star War :: Search Engine
    </footer>
  )
}
