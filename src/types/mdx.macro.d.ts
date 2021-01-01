declare module 'mdx.macro' {
  import React from 'react'
  export function importMDX(
    path: string
  ): Promise<{ default: React.LazyExoticComponent }>
}
