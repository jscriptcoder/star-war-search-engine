import { Link } from 'react-router-dom'
import CallMadeIcon from '@mui/icons-material/CallMade'
import { getRoute, printableRoute } from './route'

export function makeLink(swapiApiUrl: string): JSX.Element {
  return (
    <Link to={getRoute(swapiApiUrl)} className="text-blue-300 group">
      <span>{printableRoute(swapiApiUrl)}</span>
      <sup>
        <CallMadeIcon className="!text-sm !hidden group-hover:!inline-block" />
      </sup>
    </Link>
  )
}
