import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone'
import { Alert } from '@mui/material'
import EntityTable from '../../components/EntityTable'
import Search from '../../components/Search'
import { Film as FilmType } from '../../types'
import { useEntity } from '../../utils/entity'

export default function Film() {
  const { entity, error } = useEntity<FilmType>('films')

  return (
    <div>
      <Search widget />
      <div>
        <h1 className="font-medium text-lg flex items-center space-x-2">
          <LiveTvTwoToneIcon />
          <span>Film</span>
        </h1>
        {error && <Alert severity="error">{error}</Alert>}
        {!error && (
          <EntityTable
            entity={entity}
            fields={[
              'title',
              'director',
              'producer',
              'release_date',
              'characters',
              'planets',
              'starships',
              'vehicles',
            ]}
          />
        )}
      </div>
    </div>
  )
}
