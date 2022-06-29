import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Orbit from "../components/charts/Orbit";

const TheExpansePage: NextPage = () => {
  return (
    <Layout>
      <Orbit/>
    </Layout>
  )
}

export default TheExpansePage