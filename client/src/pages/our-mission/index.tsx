import React from 'react'
import Layout from '../components/Layout'

export default function OurMission() {
  return (
    <Layout>
      <div className='mb-[50px] p-2 flex flex-col items-center justify-center mt-10 min-h-[900px] bg-mission-cats-mobile bg-[center_top] bg-[length:350px] sm:bg-[center_top_20px] sm:bg-[length:400px] lg:bg-mission-cats lg:bg-[length:800px] lg:bg-[center_top_80px] bg-no-repeat'>
        <h2 className='text-5xl lg:text-6xl mb-8 mt-16 text-center'>
          Our Mission
        </h2>
        <article className='p-8 max-w-2xl leading-7'>
          <p className='my-5'>
            At Artemis, our mission is to leverage the power of technology and
            human compassion to improve the lives of stray animals in local
            communities. Through our crowd-sourced platform, we enable users to
            upload photos of stray animals in their area that require attention
            or assistance. Our primary objective is to contribute to the
            reduction of stray animal populations on the streets by facilitating
            their rescue, rehabilitation, and adoption.
          </p>
          <h2 className='text-lg font-bold mt-5'>Meaning of Artemis</h2>
          <p className='my-2'>
            Inspired by the love and compassion that people have for animals and
            drawing from the legacy of Artemis, the Greek God associated with
            animals and their protection, we strive to create a better world for
            stray animals. We believe that every animal deserves care, love, and
            a chance at a fulfilling life.
          </p>
          <h2 className='text-lg font-bold mt-5'>Our Story</h2>
          <p className='my-2'>
            Artemis was born during Chingu&apos;s 44th Voyage, which took place
            from May 1st, 2023 to June 11th, 2023. During that time, four
            developers (
            <a
              href='https://github.com/ha-anna'
              className='underline underline-offset-2'
              target='_blank'>
              Anna
            </a>
            ,{' '}
            <a
              href='https://github.com/devimalka'
              className='underline underline-offset-2'
              target='_blank'>
              Devim
            </a>
            ,{' '}
            <a
              href='https://github.com/nubiv'
              className='underline underline-offset-2'
              target='_blank'>
              Horus
            </a>
            ,{' '}
            <a
              href='https://github.com/leixdd'
              className='underline underline-offset-2'
              target='_blank'>
              Lei
            </a>
            ) came together with the shared purpose of making a positive impact
            on the lives of stray animals.
            <br />
            Starting April 2024, this project is being improved and maintained
            solely by Anna.
          </p>
          <h2 className='text-lg font-bold mt-5'>Join Us</h2>
          <p className='my-2'>
            Join us on our journey to build a platform that empowers
            individuals, organizations, and communities to collaborate,
            advocate, and take action for the well-being and welfare of stray
            animals.
          </p>
          <p className='mt-12 italic text-center'>
            Together, we can make a difference, one animal at a time.
          </p>
        </article>
      </div>
    </Layout>
  )
}
