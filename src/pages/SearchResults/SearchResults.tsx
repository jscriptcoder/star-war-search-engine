import Search from '../../components/Search'
import LoadingResults from './LoadingResults'
import TabResults from './TabResults'
import useSearchResults from './useSearchResults'

export default function SearchResults() {
  const { term, category, searchResults, hasResults } = useSearchResults()

  return (
    <div>
      <Search term={term} category={category} widget />
      {!hasResults && <LoadingResults />}
      {hasResults && <TabResults items={searchResults} />}
    </div>
  )
}
