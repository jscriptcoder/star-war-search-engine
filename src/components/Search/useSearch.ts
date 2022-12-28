import {
  FormEventHandler,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchCategory } from '../../types'

type OnSearchKeyDown = KeyboardEventHandler<HTMLInputElement>
type OnSearchInput = FormEventHandler<HTMLInputElement>
type OnSearchClick = MouseEventHandler<HTMLButtonElement>

type OnCategorySearch = (
  event: MouseEvent<HTMLElement>,
  value: SearchCategory,
) => void

interface UseSearchReturn {
  categories: SearchCategory[]
  enteredTerm: string
  selectedCategory: SearchCategory
  onSearchKeyDown: OnSearchKeyDown
  onSearchInput: OnSearchInput
  onCategoryChange: OnCategorySearch
  onSearchClick: OnSearchClick
}

export default function useSearch(
  term: string,
  category: SearchCategory,
): UseSearchReturn {
  const [enteredTerm, setEnteredTerm] = useState(term)
  const [selectedCategory, setSelectedCategory] = useState(category)
  const navigate = useNavigate()

  const categories = useMemo(() => Object.values(SearchCategory), [])

  const search = useCallback(() => {
    const encodedTerm = encodeURIComponent(enteredTerm)
    navigate(`/search?term=${encodedTerm}&category=${selectedCategory}`)
  }, [enteredTerm, selectedCategory])

  const onCategoryChange: OnCategorySearch = useCallback((_, value) => {
    setSelectedCategory(value)
  }, [])

  const onSearchInput: OnSearchInput = useCallback(({ target }) => {
    const { value } = target as HTMLInputElement
    setEnteredTerm(value)
  }, [])

  const onSearchKeyDown: OnSearchKeyDown = useCallback(
    ({ key }) => {
      if (key === 'Enter') {
        search()
      }
    },
    [search],
  )

  const onSearchClick = useCallback(() => {
    if (enteredTerm) {
      search()
    }
  }, [enteredTerm, search])

  return {
    categories,
    enteredTerm,
    selectedCategory,
    onSearchInput,
    onSearchKeyDown,
    onCategoryChange,
    onSearchClick,
  }
}
