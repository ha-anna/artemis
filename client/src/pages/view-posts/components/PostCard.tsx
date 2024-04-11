import React from 'react'
import { TPostData } from '../../../lib/types/PostDataTypes'
import Link from 'next/link'

const generateTagBorderColors = (array: string[]) => {
  const colors = [
    'border-artemis-green',
    'border-artemis-yellow',
    'border-artemis-blue'
  ]
  const borderColors = []
  for (let i = 0; i < array.length; i++) {
    borderColors.push(colors[i % colors.length])
  }
  return borderColors
}

export default function PostCard({ data }: { data: TPostData }) {
  if (!data) {
    return <div>No data available</div>
  }

  const { title, location, shDesc, tags, image } = data
  const tagsHtml = tags.map((tag, i) => {
    const borderColors = generateTagBorderColors(tags)
    const style =
      'mr-2 my-1 border-2 py-0.5 px-2 px-2 rounded' + ' ' + borderColors[i]
    return (
      <li
        key={tag}
        className={style}>
        <Link href={tag}>#{tag}</Link>
      </li>
    )
  })

  return (
    <div className='border-2 border-artemis-black rounded-md p-5 m-3 bg-artemis-white'>
      <Link href='post_address'>
        <div className='border-2 border-artemis-black rounded'>
          <img
            alt={''}
            src={image}
            className='object-cover'
            key={title}
            width={300}
            height={200}
          />
        </div>
      </Link>
      {/* TODO: add post address */}
      <Link href='post_address'>
        <h3 className='text-3xl mt-2'>{title}</h3>
      </Link>
      {/* TODO: add searchable location link */}
      <Link href={location}>
        <span className='color-artemis-gray opacity-50'>{location}</span>
      </Link>
      <p className='py-3 text-lg'>{shDesc}</p>
      {/* TODO: add searchable hashtag links */}
      <ul className='flex flex-wrap'>{tagsHtml}</ul>
    </div>
  )
}
