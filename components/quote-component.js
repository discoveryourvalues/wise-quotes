import React from 'react'
import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

import { quoteToRouteQuote } from '../util/index'
// import QuoteView from '../pages/quotes/[quote]'

export default function QuoteComponent({ quote: quoteObj }) {

  const { author, author_image, author_bio, date_said, quote } = quoteObj
  const routeQuote = quoteToRouteQuote(quote)

  return (
    <Link className="" href={`/quotes/${routeQuote}`}>
      <div className="flex max-w-md min-w-md bg-white rounded-xl shadow-md overflow-hidden md:w-l md:min-w-l m-2 transition hover:shadow-xl">
        <div className="md:flex cursor-pointer w-screen">
          <div style={{ minWidth: '100px' }} className="">
            <img className="m-2 w-1/2 m-auto rounded-full min-w-1" src={author_image} />
          </div>
          <div className="p-6 m-auto">
            <a href="#" className="mt-2 text-gray-500">{quote}</a>
            <p className="block mt-3 text-md leading-tight font-medium text-black hover:underline">{author}</p>
            {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Tags</div> */}
          </div>
        </div>
      </div>
    </Link>
  )
}
