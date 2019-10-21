import React from 'react';
import "./services.scss";
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from "gatsby"
import SEO from "../seo"

const Services =() =>(
    <StaticQuery
      query={graphql`
            query home_services {
                allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "//home/services//"}}
                ) {
                edges {
                    node {
                    frontmatter {
                        title
                        date
                        heading
                        description
                    }
                    fields {
                        slug
                    }
                    html
                    }
                }
                }
            }
      
      `}

    render={data => (
        <section className="plans-sec py-5">
            <div className="container  text-center py-md-5 py-3">
                <h5 className="heading mb-2">Exclusive Services</h5>
                <h3 className="heading mb-sm-5 mb-3">WE PROVIDE AWESOME SERVICES</h3>
                        <div className="row service-box">
                                {data.allMarkdownRemark.edges.map(({node},i) => (
                                    <div  className="col-md-4 text-center mb-4 home-service-main" key={i}>
                                         <SEO title={node.frontmatter.title} description={node.excerpt}/>
                                        <div className="service-grid card">
                                            <div className="card-body">
                                                {/* <Img className="card-image" sizes={node.frontmatter.image.childImageSharp.fluid} /> */}
                                                <h3>{node.frontmatter.heading}</h3>
                                                <p>{node.frontmatter.description}</p>
                                            <button className="button-save large">
                                                <Link to={`/services/${node.fields.slug}`} >
                                                Learn More
                                                </Link>
                                            </button>
                                            </div>
                                        </div>
                                       
                                    </div>
                                ))}
                        </div>
                </div>
        </section>
       
    )}
/>
)

export default Services