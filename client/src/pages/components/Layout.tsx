import Nav from './Nav'
import Footer from './Footer'
import Toast from './Toast'
import Head from 'next/head'
import CookiesPopup from './CookiesPopup'
import { useEffect } from 'react'
import {
  selectConsent,
  updateConsent
} from '@/lib/store/features/consent/consentSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/store'

export default function Layout({ children }: { children: React.ReactNode }) {
  const consent = useAppSelector(selectConsent).consent
  const dispatch = useAppDispatch()

  useEffect(() => {
    const savedValue = window.localStorage.getItem('artemis-consent')
    dispatch(updateConsent({ consent: savedValue == 'true' }))
  }, [])

  const handleConsent = () => {
    localStorage.setItem('artemis-consent', 'true')
    dispatch(updateConsent({ consent: true }))
  }

  return (
    <>
      <Head>
        <title>Artemis | Helping strays, one location at a time.</title>
      </Head>
      <div className='min-h-screen max-w-[1800px] w-full flex flex-col m-auto bg-artemis-white drop-shadow'>
        <Nav />
        <main className='flex-grow'>{children}</main>
        <Toast />
        <Footer />
        {!consent && <CookiesPopup onConsent={handleConsent} />}
      </div>
    </>
  )
}
