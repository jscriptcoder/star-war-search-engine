import { Skeleton } from '@mui/material'

export default function LoadingResults() {
  return (
    <div className="max-w-sm">
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={100}
        height={40}
      />
      <div className="mt-6 space-y-4">
        <div>
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" />
        </div>
        <div>
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" />
        </div>
        <div>
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" />
        </div>
      </div>
    </div>
  )
}
