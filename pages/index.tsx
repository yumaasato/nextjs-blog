import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async context => {
  const allPostsData = getSortedPostsData();
  return {
    //propsというキーに対してオブジェクト型で返す
    props: {
      allPostsData,
    },
  };
}

type Props = {
  allPostsData: {
    id: string
    title: string
    date: string
  }[]
}

const Home = ({ allPostsData }: Props) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>九州大学法学部</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://twitter.com/satopin2020">our Twitter</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
