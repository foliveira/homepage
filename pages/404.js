import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Title from '../components/title'
import Container from '../components/container'

export default function Custom404() {
    return <>
      <Layout>
        <Head>
          <title>Four-Oh-Four</title>
        </Head>
        <Container>
          <header>
            <Title>
              <Link href="/">
                <a>404 - Not Found</a>
              </Link>  
            </Title>
          </header>
        </Container>
      </Layout>
    </>
  }