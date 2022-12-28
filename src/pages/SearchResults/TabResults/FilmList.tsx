import { Link } from 'react-router-dom'
import { getRoute } from '../../../utils/route'

interface FilmListProps {
  items: string[]
}

export default function FilmList({ items }: FilmListProps) {
  return (
    <div className="flex space-x-1">
      {items.map((filmUrl) => {
        const matchNumber = filmUrl.match(/(\d)/)
        if (matchNumber) {
          return (
            <Link to={getRoute(filmUrl)} className="text-blue-300">
              {matchNumber[0]}
            </Link>
          )
        }

        return null
      })}
    </div>
  )
}
