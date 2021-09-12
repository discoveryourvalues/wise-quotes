import React from 'react'
import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import QuoteView from '../pages/quotes/[quote]'

export default function QuoteComponent({ quote: quoteObj }) {
    
    // return (
    //   <div>
    //   <h3 classNameNameName="text-3xl mb-3 leading-snug">
    //     {/* <Link as={`/posts/${slug}`} href="/posts/[slug]"> */}
    //       <a classNameNameName="hover:underline">{quote.quote}</a>
    //     {/* </Link> */}
    //   </h3>
    //   <div classNameNameName="text-lg mb-4">
    //     {/* <DateFormatter dateString={new Date(quote.date_said)} /> */}
    //   </div>
    //   <Avatar name={quote.author} picture={quote.author_image} />
    //   <p classNameNameName="text-lg leading-relaxed mb-4">{quote.author_bio}</p>
    // </div>    
    // )
    const { author, author_image, author_bio, date_said, quote} = quoteObj

    return (

    <div className="flex max-w-md min-w-md bg-white rounded-xl shadow-md overflow-hidden md:w-l md:min-w-l m-2">
    <div className="md:flex">
      <div className="md:flex-shrink-0 m-auto">
        <img className="m-2 w-1/2 m-auto rounded-full" src="https://images.gr-assets.com/authors/1393978633p5/879.jpg" alt="Man looking at item at a store" />
      </div>
      <div className="p-8 m-auto">
        <a href="#" className="mt-2 text-gray-500">{quote}</a>
        <p className="block mt-3 text-md leading-tight font-medium text-black hover:underline">{author}</p>
        {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Tags</div> */}
      </div>
    </div>
    </div>
    )
}
