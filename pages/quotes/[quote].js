import React from 'react'
import Container from '../../components/container'
import HeaderDetails from '../../components/header-details'
import Layout from '../../components/layout'

import Quotes from '../../models/quote'
import { routeQuoteToQuote } from '../../util/index'

function QuoteDetails({ quote }) {

    
    return (
        <Layout>
        <HeaderDetails/>
        <Container>
        <section class="text-gray-700 body-font overflow-hidden bg-white">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap ">
                <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://images.gr-assets.com/authors/1393978633p5/879.jpg" />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 class="text-gray-900 text-2xl title-font font-medium mb-1">{quote.quote}</h1>
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">{quote.author} | (date_said)</h2>
                    <div class="flex mb-4">
                    <span class="flex items-center my-1">
                        <button class="text-sm bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-2 mr-2 px-2 border border-gray-400 rounded shadow">
                            Tag 1
                        </button>
                        <button class="text-sm bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-2 mr-2 px-2 border border-gray-400 rounded shadow">
                            Tag 2
                        </button>
                        <button class="text-sm bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-2 mr-2 px-2 border border-gray-400 rounded shadow">
                            Tag 2
                        </button>
                    </span>
                    </div>
                    
                    <hr></hr>

                    <p class="leading-relaxed my-2">
                        <b>Birthplace: </b>
                    </p>

                    <p class="leading-relaxed my-2">
                        <b>Born: </b>
                    </p>

                    <p class="leading-relaxed my-2">
                        <b>Other: </b>
                    </p>

                    <p class="leading-relaxed my-2">
                        <b>Bio: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                    <div class="flex">
                        <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Print</button>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </Container>
    </Layout>
    )
}

export async function getServerSideProps(context) {  

    const quoteFromRoute = routeQuoteToQuote(context.query.quote)
    const rawQuotes = await Quotes.findOne({ quote: quoteFromRoute})
  
    const dataString = JSON.stringify(rawQuotes)
    const quote = JSON.parse(dataString)
    
    console.log(quote)
    return {
      props: { quote }
    }
  }

export default QuoteDetails
