import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: {
      allData
    }
  }
}
export default function Home({ allData }) {
  return (
      <Layout home>
        <h1 className="text-center mt-4">My family</h1>
        <div className="text-center">
          {allData.map(({ id, name }) => (
            <ul className="list-group list-group-flush">
                <Link key={id} href={`/${id}`}>
                  <a className="list-group-item">{name} </a> 
                </Link>
            </ul>
          ))}
        </div>
      </Layout>
  );
}
