import { AxiosError } from 'axios'
import { FailureDisplay } from 'components/common/Error'
import React from 'react'
import { useLocation } from 'react-router-dom'

const errorProviderRef: React.RefObject<ErrorProvider> = React.createRef()

/*
A function to call if you have an error you can't to recover from.

The preferred interface is IFailure (declared below),
but it can also work with
* an AxiosError
* null if you don't know anything about your error

This is implemented using ref because after some experimentation,
I find them to be the most robust.

Hook/context solutions sometimes have weird issue when throwing while rendering.
*/
export function fail(failure: IIntoFailure) {
  if (errorProviderRef?.current?.setError)
    errorProviderRef.current.setError(intoFailure(failure))
  else {
    // we're in real deep trouble if even the ref isn't available
    // just reload the page

    // add an alert before reloading
    // otherwise we might get stuck in a reload loop if things go really wrong
    alert('You should NEVER see this.')

    window.location.reload()
  }
  // return null so we can do `return fail(adsf)` to fail and render nothing.
  return null
}

export interface IFailure {
  status?: number | null
  requestID?: string | null
  title?: string | null
  detail?: string | null
}

interface AxiosErrorOrIFailure extends AxiosError, IFailure {}

type IIntoFailure = Partial<AxiosErrorOrIFailure> | null

// Try to convert most things into an IFailure
export function intoFailure(error: IIntoFailure): IFailure {
  // ?? null because typescript complains about undefined
  const status = error?.status ?? error?.response?.status ?? null
  const requestID =
    error?.requestID ?? error?.response?.headers['x-request-id'] ?? null
  const title = error?.title ?? null
  const detail = error?.detail ?? null
  return {
    status,
    requestID,
    title,
    detail,
  }
}

interface IErrorProviderProps {
  children: React.ReactNode
  location: ReturnType<typeof useLocation>
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
  componentDidCatch(error: IIntoFailure) {
    console.warn(error)
    this.setError(intoFailure(error))
  }
  componentDidUpdate(prevProps: IErrorProviderProps) {
    if (prevProps.location !== this.props.location) {
      if (this.state.failure) {
        console.warn('Trying to navigate away from an error?')
        // If the user tries to navigate somewhere whil there is an error,
        //   reload the page, jsut to be safe.
        window.location.reload()
      }
    }
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
  const location = useLocation()
  return (
    <ErrorProvider location={location} ref={errorProviderRef}>
      {children}
    </ErrorProvider>
  )
}
