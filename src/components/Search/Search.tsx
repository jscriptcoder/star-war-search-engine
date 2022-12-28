import { cx } from '@emotion/css'
import { SearchOutlined } from '@mui/icons-material'
import {
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import startWarLogo from '../../starwar-logo.svg'
import { SearchCategory } from '../../types'
import useSearch from './useSearch'

interface SearchProps {
  term?: string
  category?: SearchCategory
  widget?: boolean
}

export default function Search({
  widget,
  term = '',
  category = SearchCategory.ALL,
}: SearchProps) {
  const {
    categories,
    enteredTerm,
    selectedCategory,
    onSearchInput,
    onSearchKeyDown,
    onCategoryChange,
    onSearchClick,
  } = useSearch(term, category)

  return (
    <div
      className={cx(
        'flex flex-col space-y-4',
        !widget ? 'w-[50%] justify-center items-center' : '',
      )}
    >
      {!widget && <img src={startWarLogo} className="w-[360px]" />}

      <TextField
        className="w-full"
        value={enteredTerm}
        label="Enter a term to search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton
                onClick={onSearchClick}
                color="primary"
                aria-label="Search"
              >
                <SearchOutlined />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onInput={onSearchInput}
        onKeyDown={onSearchKeyDown}
        size={widget ? 'small' : 'medium'}
      />

      <ToggleButtonGroup
        color="primary"
        value={selectedCategory}
        exclusive
        aria-label="Category"
        onChange={onCategoryChange}
      >
        {categories.map((category) => (
          <ToggleButton
            key={category}
            value={category}
            size={widget ? 'small' : 'medium'}
          >
            {category}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {widget && <Divider className="!my-4" />}
    </div>
  )
}
