import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
        <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt}/>
        <div className="content-page">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`