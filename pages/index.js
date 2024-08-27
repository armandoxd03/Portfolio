import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am <em>John Roy C. Ducut.</em>  Currently I am a 20 years old student who is at his 3rd year in the department of Information Technology at The University of the Assumption, and I live in the town of Macabebe. My hobbies are reading books, novels, manga, and gaming. My favoritetype of music is pop music. I especially like musicians like Alec Benjamin, Maroon 5, Sabaton, and Zack Tabudlo. My favorite foods are mostly potato dishes, and snacks like fries, hash browns, and mashed potatoes.</p>
        <hr></hr>

        <p>I chose the IT department because, at the time, it was in high demand and aligned with my interests in computers.
        </p>
        <hr></hr>

        <p>I’m thinking about becoming a software engineer or a data administrator after my Graduating.
        </p>
        <hr></hr>
        <p>I expect to learn how to connect different software and hardware systems, focusing on making them work together smoothly. I also want to gain hands-on experience with tools for integration, problem-solving, and improving system performance.
        </p>
        <hr></hr>

        <p>I’m interested in learning about different ways to integrate systems, using middleware and APIs, and managing data between systems. I’d also like to cover cloud integration, security, real-life examples, and tools for system integration.
        </p>
        <hr></hr>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}