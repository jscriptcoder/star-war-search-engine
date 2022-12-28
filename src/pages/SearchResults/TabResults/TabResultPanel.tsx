import { Alert, List, ListItem, ListItemText } from '@mui/material'
import CallMadeIcon from '@mui/icons-material/CallMade'
import { Link } from 'react-router-dom'
import { SearchResultValue } from '../../../types'
import FilmList from './FilmList'
import { getRoute } from '../../../utils/route'

interface TabResultPanelProps {
  item: SearchResultValue
  hidden: boolean
}

export default function TabResultPanel({
  item,
  hidden = true,
}: TabResultPanelProps) {
  const { error, data } = item

  return (
    <div role="tabpanel" hidden={hidden}>
      {error && <Alert severity="error">{error}</Alert>}
      {data && (
        <List>
          {data.results.map((result, idx) => (
            <ListItem key={idx}>
              <ListItemText
                primary={
                  <Link to={getRoute(result.url)} className="space-x-1 group">
                    <span>{result.name}</span>
                    <CallMadeIcon className="!text-sm !hidden group-hover:!inline-block" />
                  </Link>
                }
                secondary={
                  <div className="flex space-x-1">
                    <span>appears in film:</span>
                    <FilmList items={result.films} />
                  </div>
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}
