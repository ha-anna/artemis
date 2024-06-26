import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import toastList from './features/toasts/toastSlice'
import socket from './features/socket/socketSlice'
import auth from './features/auth/authSlice'
import consent from './features/consent/consentSlice'

export const store = configureStore({
  reducer: {
    toastList: toastList,
    socket: socket,
    auth: auth,
    consent: consent
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
