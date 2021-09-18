import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'

import Quotes from '../models/quote'
import dbConnect from '../lib/dbConnect'

// Components
import Search from '../components/search'
import QuoteComponent from '../components/quote-component'

export default function Index({ quotes }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  const morePosts = []
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
        </Container>
      </Layout>
    </>
  )
}

// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(process.env.BASE_URL + "/api/quotes")
//   const quotes = await res.json()

//   // Get the paths we want to pre-render based on posts
//   const paths = quotes.map((quote) => ({
//     params: { id: quote._id },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

export async function getServerSideProps() {
  try {
    await dbConnect()

  } catch(err) {
    console.log(err)
  }

  const rawQuotes = await Quotes.find({}).limit(100)

  const dataString = JSON.stringify(rawQuotes)
  const quotes = JSON.parse(dataString)

  return {
    props: { quotes }
  }
}

// export async function getStaticProps() {
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//   ])

//   console.log(allPosts)

//   return {
//     props: { allPosts },
//   }
// }

