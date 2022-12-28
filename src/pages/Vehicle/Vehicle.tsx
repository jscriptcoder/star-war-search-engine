import DirectionsSubwayFilledTwoToneIcon from '@mui/icons-material/DirectionsSubwayFilledTwoTone'
import { Alert } from '@mui/material'
import EntityTable from '../../components/EntityTable'
import Search from '../../components/Search'
import { SearchCategory, Vehicle as VehicleType } from '../../types'
import { useEntity } from '../../utils/entity'

interface VehicleProps {}

export default function Vehicle(props: VehicleProps) {
  const { entity, error } = useEntity<VehicleType>('vehicles')

  return (
    <div>
      <Search category={SearchCategory.VEHICLES} widget />
      <div>
        <h1 className="font-medium text-lg flex items-center space-x-2">
          <DirectionsSubwayFilledTwoToneIcon />
          <span>Vehicle</span>
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
              'vehicle_class',
              'length',
              'crew',
              'consumables',
              'passengers',
              'cargo_capacity',
              'cost_in_credits',
              'max_atmosphering_speed',
              'pilots',
            ]}
          />
        )}
      </div>
    </div>
  )
}
