import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Gatsby Graphql Project</h1>
    <p>This is a sample page</p>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>)

export default IndexPage
