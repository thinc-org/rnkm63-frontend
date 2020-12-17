import React from 'react'

export default function withSuspense<P>(
  Component: React.ComponentType<P>
): React.FC<P> {
  return (props: P) => {
    return (
      <React.Suspense fallback={null}>
        <Component {...props} />
      </React.Suspense>
    )
  }
}
