import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'

import Quotes from '../models/quote'
import dbConnect from '../lib/dbConnect'

// Components
import Search from '../components/search'
import QuoteComponent from '../components/quote-component'
import SeeMore from '../components/see-more'

export default function Index({ quotes }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Wise Quotes</title>
        </Head>
        <Intro/>
        <Container>
          <Search />
          <div className="flex flex-wrap justify-center">
          {
            quotes.map(quote => {
              return (<QuoteComponent key={quote._id} quote={quote}/>)
            })
          }
          </div>
          <SeeMore />
        </Container>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  try {
    await dbConnect()

  } catch(err) {
    console.log(err)
  }

  const rawQuotes = await Quotes.find({}).limit(20)

  const dataString = JSON.stringify(rawQuotes)
  const quotes = JSON.parse(dataString)

  return {
    props: { quotes }
  }
}