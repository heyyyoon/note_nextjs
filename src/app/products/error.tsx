'use client' // Error components must be Client Components

import { useEffect } from 'react'

type Props = {
    error: Error & { digest?: string }
    reset: () => void
};
// error와 reset을 받아옴
export default function ProductsError({error, reset}: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}