import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

import axios from 'axios';

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

export async function getStaticProps() {
    const response = await axios.get('http://localhost:3000/api/quotes');
    const dataString = JSON.stringify(response.data)
    const { data: quotes } = JSON.parse(dataString)


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

