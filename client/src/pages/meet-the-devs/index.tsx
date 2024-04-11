import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import SVGComponent from '../components/SVGComponent'

type TDevInfo = {
  name: string
  portfolioURL: string
  githubURL: string
  responsibilities: string
}

type TDevInfos = TDevInfo[]

export default function MeetTheDevs() {
  const currentDevs: TDevInfos = [
    {
      name: 'anna',
      portfolioURL: 'https://haanna.com',
      githubURL: 'https://github.com/ha-anna',
      responsibilities:
        'Responsible for design, wireframes, and frontend (May-June 2023). Started working on improving this project in April 2024 again. Now responsible for every part of the project: design, frontend, backend, testing, and infrastructure.'
    }
  ]

  const pastDevs: TDevInfos = [
    {
      name: 'anna',
      portfolioURL: 'https://haanna.com',
      githubURL: 'https://github.com/ha-anna',
      responsibilities: 'Responsible for design, wireframes, and frontend.'
    },
    {
      name: 'devim',
      portfolioURL: '',
      githubURL: 'https://github.com/devimalka',
      responsibilities: 'Responsible for backend.'
    },
    {
      name: 'horus',
      portfolioURL: '',
      githubURL: 'https://github.com/nubiv',
      responsibilities: 'Responsible for backend and frontend.'
    },
    {
      name: 'lei',
      portfolioURL: '',
      githubURL: 'https://github.com/leixdd',
      responsibilities: 'Responsible for backend.'
    }
  ]

  return (
    <Layout>
      <div className='mb-[150px] p-5 mt-10 flex flex-col items-center bg-center bg-cover bg-no-repeat bg-devs-gradient-mobile lg:bg-devs-gradient'>
        <h2 className='text-5xl lg:text-6xl mb-8 mt-16 text-center'>
          Meet the Devs
        </h2>
        <h3 className='text-3xl lg:text-4xl mb-8 mt-16 text-center'>Now</h3>
        <div className='p-4 max-w-[1200px]'>
          {currentDevs.map(dev => {
            return (
              <div
                key={dev.name}
                className='p-4 bg-artemis-white min-h-[200px] border-2 border-artemis-black rounded-lg w-[250px] md:w-[350px]'>
                <div className='flex p-1'>
                  <SVGComponent
                    url={`/images/icons/${dev.name}-icon.svg`}
                    alt={''}
                    width={0}
                    height={0}
                    CSSclass={'h-[46px] w-[46px]'}
                  />
                  <div className='ml-3 mt-1.5'>
                    <h3 className='capitalize font-semibold'>{dev.name}</h3>
                    <Link href={dev.portfolioURL}>portfolio</Link> |{' '}
                    <Link href={dev.githubURL}>github</Link>
                  </div>
                </div>
                <p className='mt-2 p-2'>{dev.responsibilities}</p>
              </div>
            )
          })}
        </div>
        <h3 className='text-3xl lg:text-4xl mb-8 mt-16 text-center'>
          Chingu Phase (May - June 2023)
        </h3>
        <div className='p-4 max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center'>
          {pastDevs.map(dev => {
            return (
              <div
                key={dev.name}
                className='p-4 bg-artemis-white min-h-[200px] border-2 border-artemis-black rounded-lg w-[250px] md:w-[350px]'>
                <div className='flex p-1'>
                  <SVGComponent
                    url={`/images/icons/${dev.name}-icon.svg`}
                    alt={''}
                    width={0}
                    height={0}
                    CSSclass={'h-[46px] w-[46px]'}
                  />
                  <div className='ml-3 mt-1.5'>
                    <h3 className='capitalize font-semibold'>{dev.name}</h3>
                    <Link href={dev.portfolioURL}>portfolio</Link> |{' '}
                    <Link href={dev.githubURL}>github</Link>
                  </div>
                </div>
                <p className='mt-2 p-2'>{dev.responsibilities}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
