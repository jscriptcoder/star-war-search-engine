import Person4TwoToneIcon from '@mui/icons-material/Person4TwoTone'
import { Alert, Snackbar } from '@mui/material'
import EntityTable from '../../components/EntityTable/EntityTable'
import Search from '../../components/Search'
import { Character as CharacterType, SearchCategory } from '../../types'
import { useEntity } from '../../utils/entity'

export default function Character() {
  const { entity, error } = useEntity<CharacterType>('people')

  return (
    <div>
      <Search category={SearchCategory.PEOPLE} widget />
      <div className="space-y-2">
        <h1 className="font-medium text-lg flex items-center space-x-2">
          <Person4TwoToneIcon />
          <span>Character</span>
        </h1>
        {error && <Alert severity="error">{error}</Alert>}
        {!error && (
          <EntityTable
            entity={entity}
            fields={[
              'name',
              'films',
              'birth_year',
              'gender',
              'eye_color',
              'hair_color',
              'skin_color',
              'height',
              'mass',
              'starships',
              'vehicles',
            ]}
          />
        )}
      </div>
    </div>
  )
}
