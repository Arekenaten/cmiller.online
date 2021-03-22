import {GetStaticProps} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Layout, {siteTitle} from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home ({ 
    allPostsData 
}: {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}) {
    return (
        <Layout home>
            <Head><title>{'Home-' + siteTitle}</title></Head>
            <TextSection>
                <h1 className='centered'>Chase Miller</h1>
                <p>Hi and welcome to my site. Here you can expect to find blog posts
                    about technology (and other random things), links to interesting 
                    articles that I&apos;ve archived, and a portfolio of my work.</p>
                <p>This site is a work-in-progress that will likely never be finished 
                    as I find new and different things to work on in my spare time. I
                    plan on using this mostly as a test-bed for new technology and as a
                    portfolio so you can see all the fun things that I am learning and
                    working on.</p>
                <p>Feel free to poke around some of my blog articles below, or explore 
                    the rest of the site. I hope you find something interesting!</p>
            </TextSection>
            <TextSection className='headingMd padding1px'>
                <h2 className='headingLg'>Blog</h2>
                <ul className='list'>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className='listItem' key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={'lightText'}>
                                {date}
                            </small>
                        </li>
                    ))}
                </ul>
            </TextSection>
        </Layout>
    )
}

const TextSection = styled.section`
    font-size: 1.2rem;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
`
