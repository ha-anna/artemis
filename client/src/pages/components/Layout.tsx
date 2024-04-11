import Nav from './Nav'
import Footer from './Footer'
import Toast from './Toast'
import Head from 'next/head'

export default function Layout({ children }: { children: React.ReactNode }) {
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
      </div>
    </>
  )
}
