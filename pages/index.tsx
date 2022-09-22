import type { ReactElement } from 'react'
import Layout from '../layouts'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return (
    <h1>welcome</h1>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Home">
      {page}
    </Layout>
  )
}

export default Page