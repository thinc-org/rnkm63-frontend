import React from 'react'
import { Loading } from '../common'

export default function withSuspense<P>(
  Component: React.ComponentType<P>
): React.FC<P> {
  return (props: P) => {
    return (
      <React.Suspense fallback={Loading}>
        <Component {...props} />
      </React.Suspense>
    )
  }
}
