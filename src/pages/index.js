import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Slider from "../components/slider/slider"
import Services from "../components/service/services"
// import Customers from "../components/customers/customers"
import "../scss/main.scss"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
    query customers {
      allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "//home/customer-review//"}}
      ) {
      edges {
          node {
          frontmatter {
              title
              date
              image {
                  childImageSharp {
                      fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
              }
          }
          html
          excerpt
          }
      }
      }
  } 
    `}

render={data => (
  <Layout>
     <SEO
          title="Home"
          keywords={[`TRANSIT TECH`, ` STARTUPS`, `SOFTWARE PRODUCT DEVELOPMENT`, `omniwyse`]}
        />
      <Slider/>
      <Services/>
      {/* <Customers/> */}
      <section className="py-5">
        <div className="container  text-center py-md-5 py-3">
          <h5 className="heading mb-2">OUR CUSTOMERS</h5>
          <div className="customers-image">
          {data.allMarkdownRemark.edges.map(({node}, i)=> (
            <a className="references__item" key={i}>
              <Img className="customer-logo"
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                />
            </a>
          ))}
          </div>
        </div>
    </section>
  </Layout>
)}
/>
)

export default IndexPage


// import React from 'react';
// import { StaticQuery, graphql } from 'gatsby'
// import Layout from "../components/layout/layout"

// const Profile = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         mongodb: allMongodbProfileStudentData {
//           edges {
//             node {
//               name
//               experience
//               designation
//             }
//           }
//         }
//       }
      
//       `}

//     render={data => (
//       <Layout>
//         <div className="container py-sm-4">
//         {data.mongodb.edges.map(({ node }, i) => (
//           <div className="card mb-5">
//             {/* <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%"></img> */}
//             <div className="card-body">
//               <h4 className="card-title">{node.name}</h4>
//               <p className="card-text">{node.designation}</p>
//               <p className="card-text">{node.experience}</p>
//             </div>
//           </div>
//         ))
//         }
//         </div>
//       </Layout>
//     )}
//   />
// )

// export default Profile