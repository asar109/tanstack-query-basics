'use client'
import React, { ReactNode } from 'react'
import {QueryClientProvider , QueryClient} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const TanStackProvider = ({children} : {
    children : ReactNode
}) => {

    const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default TanStackProvider