import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const name = 'Chase Miller'
export const siteTitle = 'CmillerOnline'

export default function Layout ({ children, home }) {
    return <Container>
        <Head>
            <link rel='icon' href='/favicon.ico' />
            <meta
                name="description"
                content="A personal portfolio and learning site by Chase Miller"
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Header>
            {home ? <HeaderImage /> : (
                <Link href='/'>
                    <HeaderImage />
                </Link>
            )}
        </Header>
        <main>{children}</main>
        {!home && (
            <BackToHome>
                <Link href='/'>
                    <a>← Back to home</a>
                </Link>
            </BackToHome>
        )}
    </Container>
}

const HeaderImage = () => {
    return (
        <Image
            priority
            src='/images/profile_portrait.jpg'
            height={200}
            width={200}
            alt={name}
            className='borderCircled'
        />
    )
}

const Container = styled.div`
   max-width: 36rem;
   padding: 0 1rem;
   margin: 3rem auto 6rem;
`

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BackToHome = styled.div`
    margin: 3rem 0 0;
`
