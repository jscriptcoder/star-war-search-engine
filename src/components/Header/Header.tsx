import { Link } from 'react-router-dom'
import startWarLogo from '../../starwar-logo.svg'

export default function Header() {
  return (
    <header className="h-10 items-center flex space-x-4">
      <Link to="/">
        <img src={startWarLogo} className="h-10" />
      </Link>

      <span className="font-medium text-lg">Search Engine</span>
    </header>
  )
}
