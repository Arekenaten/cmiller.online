import Head from 'next/head';
import styled from 'styled-components';
import Layout, {siteTitle} from '../components/layout';

export default function Home () {
  return (
      <Layout home>
          <Head><title>{'Home-' + siteTitle}</title></Head>
          <TextSection>
              <h1 className='centered'>Chase Miller</h1>
              <p>
                  Welcome to my site! Here I play with tech to 
                  see what I can do and how I can do it, archive what
                  I think is important, and generally 
                  make things I think have value.
              </p>
          </TextSection>
      </Layout>
  );
}

const TextSection = styled.section`
    font-size: 1.2rem;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
`
