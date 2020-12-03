import Head from 'next/head'
import Layout from '../components/layout'
import Title from '../components/title'
import Social from '../components/social'
import Container from '../components/container'
import { FaGithub, FaTwitter, FaLinkedin, FaGitlab, FaPen } from 'react-icons/fa';

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Fábio Oliveira</title>
        </Head>
        <Container>
          <header>
            <Title>
              Fábio Oliveira
            </Title>
          </header>
          <section className="flex flex-col md:flex-row">
            <Social url="https://twitter.com/fanoliveira">
              <FaTwitter size="32px"/>
            </Social>
            <Social url="https://github.com/foliveira">
                <FaGithub size="32px"/>
            </Social>
            <Social url="https://gitlab.com/fanoliveira">
                <FaGitlab size="32px"/>
            </Social>
            <Social url="https://www.linkedin.com/in/fanoliveira/">
                <FaLinkedin size="32px"/>
            </Social>
            <Social url="https://blog.foliveira.me/">
                <FaPen size="32px"/>
            </Social>
          </section>   
        </Container>
      </Layout>
    </>
  )
}
