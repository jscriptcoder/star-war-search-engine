import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone'
import { Alert } from '@mui/material'
import EntityTable from '../../components/EntityTable'
import Search from '../../components/Search'
import { Planet as PlanetType, SearchCategory } from '../../types'
import { useEntity } from '../../utils/entity'

export default function Planet() {
  const { entity, error } = useEntity<PlanetType>('planets')

  return (
    <div>
      <Search category={SearchCategory.PLANETS} widget />
      <div>
        <h1 className="font-medium text-lg flex items-center space-x-2">
          <PublicTwoToneIcon />
          <span>Planet</span>
        </h1>
        {error && <Alert severity="error">{error}</Alert>}
        {!error && (
          <EntityTable
            entity={entity}
            fields={[
              'name',
              'films',
              'population',
              'diameter',
              'gravity',
              'terrain',
              'surface_water',
              'rotation_period',
              'orbital_period',
              'residents',
            ]}
          />
        )}
      </div>
    </div>
  )
}
