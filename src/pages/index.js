import React from "react"

import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SailingLink from "../components/sailing"

const IndexPage = () => (
  <Layout>
    <SEO title="Sailing" />
    <SailingLink />
    <Footer />
  </Layout>
)

export default IndexPage
