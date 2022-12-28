import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'
import { Character, Film, Planet, Starship, Vehicle } from '../../types'
import { makeLink } from '../../utils/link'
import LoadingEntity from './LoadingEntity'
import { readableField } from './utils'

interface EntityTableProps {
  fields: string[]
  entity?: Film | Character | Planet | Starship | Vehicle
}

export default function EntityTable({ entity, fields }: EntityTableProps) {
  if (!entity) {
    return <LoadingEntity />
  }

  const record = entity as unknown as Record<string, string>

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableBody>
          {fields.map((field) => {
            const value = record[field]
            const isSwapiUrl = field.match('https://swapi.dev')
            const isList = !isSwapiUrl && Array.isArray(value)
            const isNormalValue = !isSwapiUrl && !isList

            return (
              <TableRow>
                <TableCell className="!align-top">
                  {readableField(field)}
                </TableCell>
                <TableCell>
                  {isSwapiUrl && makeLink(value)}
                  {isList && (
                    <div className="flex flex-col space-y-2">
                      {value.map((item) => makeLink(item))}
                    </div>
                  )}
                  {isNormalValue && <span>{value}</span>}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
