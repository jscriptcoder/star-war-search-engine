import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone'
import { Alert } from '@mui/material'
import EntityTable from '../../components/EntityTable'
import Search from '../../components/Search'
import { SearchCategory, Starship as StarshipType } from '../../types'
import { useEntity } from '../../utils/entity'

export default function Starship() {
  const { entity, error } = useEntity<StarshipType>('starships')

  return (
    <div>
      <Search category={SearchCategory.STARSHIPTS} widget />
      <div>
        <h1 className="font-medium text-lg flex items-center space-x-2">
          <RocketLaunchTwoToneIcon />
          <span>Starship</span>
        </h1>
        {error && <Alert severity="error">{error}</Alert>}
        {!error && (
          <EntityTable
            entity={entity}
            fields={[
              'name',
              'films',
              'model',
              'manufacturer',
              'starship_class',
              'length',
              'crew',
              'MGLT',
              'cargo_capacity',
              'hyperdrive_rating',
              'max_atmosphering_speed',
              'pilots',
            ]}
          />
        )}
      </div>
    </div>
  )
}
