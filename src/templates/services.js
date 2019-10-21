import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import { LandingBody } from "../components/styles/LandingBody"
import SEO from "../components/seo"
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <section class="container sub-services py-5">
      <SEO title={post.frontmatter.title} description={post.excerpt}/>
          {/* <div className="">
            <div className="service-heading text-center">
                <h1>{post.frontmatter.title}</h1>
                <p class="pt-5">{post.frontmatter.description}</p>
            </div>
            
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div> */}
           <LandingBody dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
     
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
      excerpt
    }
  }
`