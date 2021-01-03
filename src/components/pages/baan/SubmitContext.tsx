import React from 'react'

interface ISubmitContext {
  isSubmit: false
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>
}

export const SubmitContext = React.createContext({} as ISubmitContext)
