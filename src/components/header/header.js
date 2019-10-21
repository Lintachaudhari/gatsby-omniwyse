import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.css';
import './header.scss';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";



const Header = ({ siteTitle }) => (


  <StaticQuery
    query={graphql`
        query IndexQuery {
            service: allMarkdownRemark(
              filter: {frontmatter: {posttype: {eq:"service"}}}
              ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  excerpt
                  timeToRead
                  frontmatter {
                    title
                  
                    date
                  }
                }
              }
            }
        }
    `}

    render={data => (
      <header className="bg-light">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" className="container">
          <Navbar.Brand>
            <Link
              to="/"
              style={{
                color: `#0c2e8a`,
                textDecoration: `none`,
              }}
            >
              <h1 style={{ fontSize: '40px' }}>{siteTitle}</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/about_us">About Us</Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link to="/profile">Student profile</Link>
              </Nav.Link> */}
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                {data.service.edges.map(({ node }, i) => (
                  <NavDropdown.Item key={i}>
                    <Link to={`/services/${node.fields.slug}`} >
                      {node.frontmatter.title}{" "}
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link>
                <Link to="/blog">Blog</Link>
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
