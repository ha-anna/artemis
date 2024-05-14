import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IConsentState, TConsentPayload } from './consentTypes'

const updateConsent: CaseReducer<
  IConsentState,
  PayloadAction<TConsentPayload>
> = (state, action) => {
  const { consent } = action.payload

  return { ...state, consent: consent }
}

export const consentReducers = {
  updateConsent
}
