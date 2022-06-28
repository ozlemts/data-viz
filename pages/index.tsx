import type { NextPage } from 'next'
import Layout from "../components/Layout";
import LineChart from "../components/charts/LineChart";

const Home: NextPage = () => {
  return (
    <Layout>
      <LineChart/>
    </Layout>
  )
}

export default Home
