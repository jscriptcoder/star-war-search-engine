import { Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Category =
  | 'films'
  | 'people'
  | 'planets'
  | 'species'
  | 'starships'
  | 'vehicles'

export function useEntity<T>(category: Category) {
  const [entity, setEntity] = useState<T>()
  const [error, setError] = useState<string>()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      fetch(`/api/${category}/${id}/`)
        .then((response) => response.json())
        .then((data: T) => setEntity(data))
        .catch((error) => setError(error))
    }
  }, [id])

  return {
    entity,
    error,
  }
}
