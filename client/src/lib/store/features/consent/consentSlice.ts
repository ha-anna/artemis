import { createSlice } from '@reduxjs/toolkit'
import { consentReducers } from './consentReducers'
import { RootState } from '../../store'
import { IConsentState } from './consentTypes'

const consent =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('artemis-consent') as string) == 'true'
    : false

const initialState: IConsentState = { consent }

const consentSlice = createSlice({
  name: 'consent',
  initialState,
  reducers: consentReducers
})

export const { updateConsent } = consentSlice.actions
export const selectConsent = (state: RootState) => state.consent

export default consentSlice.reducer
