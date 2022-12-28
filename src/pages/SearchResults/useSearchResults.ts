import { parse } from 'query-string'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchCategory, SearchQuery, SearchResultValue } from '../../types'
import search from '../../utils/search'

interface UseSearchResultsReturn {
  term: string
  category: SearchCategory
  searchResults: SearchResultValue[]
  hasResults: boolean
}

export default function useSearchResults(): UseSearchResultsReturn {
  const [searchResults, setSearchResults] = useState<SearchResultValue[]>([])
  const [searchParams] = useSearchParams()

  const { term, category } = useMemo(() => {
    const searchQuery = parse(searchParams.toString()) as unknown
    return searchQuery as SearchQuery
  }, [searchParams])

  const hasResults = useMemo(() => searchResults.length > 0, [searchResults])

  useEffect(() => {
    if (term) {
      search(term, category).then((resultValues) =>
        setSearchResults(resultValues),
      )
    }
  }, [term, category])

  return {
    term,
    category,
    searchResults,
    hasResults,
  }
}
