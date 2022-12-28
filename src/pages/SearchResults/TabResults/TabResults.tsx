import { Tab, Tabs } from '@mui/material'
import { SyntheticEvent, useCallback, useState } from 'react'
import { SearchResultValue } from '../../../types'
import TabResultPanel from './TabResultPanel'

interface TabResultsProps {
  items: SearchResultValue[]
}

type OnTabChange = (event: SyntheticEvent, index: number) => void

export default function TabResults({ items = [] }: TabResultsProps) {
  const [tabIndex, setTabIndex] = useState(0)
  const onTabChange: OnTabChange = useCallback(
    (_, index) => setTabIndex(index),
    [],
  )

  return (
    <div>
      <Tabs value={tabIndex} onChange={onTabChange} className="mb-4">
        {items.map((item, idx) => (
          <Tab
            key={idx}
            label={
              <div>
                <span>{item.category}</span>
                <sup className="ml-2">[{item.data?.count || 0}]</sup>
              </div>
            }
          />
        ))}
      </Tabs>
      {items.map((item, idx) => (
        <TabResultPanel key={idx} item={item} hidden={tabIndex !== idx} />
      ))}
    </div>
  )
}
