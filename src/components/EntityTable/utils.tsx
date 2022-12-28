export function readableField(field: string): JSX.Element {
  return <div className="capitalize">{field.replace(/_/g, ' ')}</div>
}
