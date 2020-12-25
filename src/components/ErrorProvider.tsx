import { FailureDisplay } from 'components/common/Error'
import React from 'react'

const errorProviderRef: React.RefObject<ErrorProvider> = React.createRef()

/*
A function to call if you have an error you can't to recover from.

The preferred interface is IFailure (declared below),
but it can also work with
* an AxiosError
* {} if you don't know anything about your error

This is implemented using ref because after some experimentation,
I find them to be the most robust.

Hook/context solutions sometimes have weird issue when throwing while rendering.
*/
export function fail(failure: any) {
  if (errorProviderRef?.current?.setError)
    errorProviderRef.current.setError(intoFailure(failure))
  else {
    // we're in real deep trouble if even the ref isn't available
    // just reload the page
    window.location.reload()
  }
  // return null so we can do `return fail(adsf)` to fail and render nothing.
  return null
}

export interface IFailure {
  status: number | null
  requestID: string | null
  title?: string | null
  detail?: string | null
}

// Try to convert *any*thing into an IFailure
export const intoFailure = (error: any) => ({
  status: error?.status ?? error?.response?.status,
  requestID: error?.requestID ?? error?.response?.headers['x-request-id'],
  title: error?.title,
  detail: error?.detail,
})

interface IErrorProviderProps {
  children: React.ReactNode
}

interface IErrorProviderStates {
  failure: IFailure | null
}

class ErrorProvider extends React.Component<
  IErrorProviderProps,
  IErrorProviderStates
> {
  constructor(props: IErrorProviderProps) {
    super(props)
    this.state = {
      failure: null,
    }
  }
  setError = (failure: IFailure) => {
    this.setState({
      failure,
    })
  }
  // We also try to catch errors thrown during rendering.
  // BUT you should `return fail()` instead of throw.
  componentDidCatch(error: any) {
    console.warn(error)
    this.setError(intoFailure(error))
  }
  render() {
    const { children } = this.props
    const { failure } = this.state
    if (!failure) {
      return children
    } else return <FailureDisplay failure={failure} />
  }
}

export default function E({ children }: { children: React.ReactNode }) {
  return <ErrorProvider ref={errorProviderRef}>{children}</ErrorProvider>
}
