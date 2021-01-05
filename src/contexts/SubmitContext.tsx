import React from 'react'

interface ISubmitContext {
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>
}

export const SubmitContext = React.createContext({} as ISubmitContext)
