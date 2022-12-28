import {
  Entity,
  SearchCategory,
  SearchResponse,
  SearchResultValue,
} from '../types'

export default async function search(
  term: string,
  category = SearchCategory.ALL,
): Promise<SearchResultValue[]> {
  if (!term) {
    throw new Error('Term is missing')
  }

  const categoriesToSearchIn: SearchCategory[] = []

  if (category == SearchCategory.ALL) {
    categoriesToSearchIn.push(
      ...Object.values(SearchCategory).filter(
        (category) => category !== SearchCategory.ALL,
      ),
    )
  } else {
    categoriesToSearchIn.push(category)
  }

  const fetchPromises = categoriesToSearchIn.map((category) =>
    fetch(`/api/${category}/?search=${encodeURIComponent(term)}`),
  )

  const responses = await Promise.all(fetchPromises)

  const resultValuePromises = responses.map(async (response, idx) => {
    const category = categoriesToSearchIn[idx]
    const resultValue: SearchResultValue = { category }

    if (response.status >= 400) {
      resultValue.error = `Swapi came back with status ${response.status}`
    } else {
      try {
        resultValue.data = (await response.json()) as SearchResponse<Entity>
      } catch (e) {
        resultValue.error = `${e}`
      }
    }

    return resultValue
  })

  const resultValues = await Promise.all(resultValuePromises)

  return resultValues.sort((r1, r2) =>
    Number(r1.data?.count) < Number(r2.data?.count) ? 1 : -1,
  )
}
