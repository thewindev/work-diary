import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import { css } from "emotion";
import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const customStyles = css`
  border-radius: 50% 0 50% 0;
  margin: 0 10px;
  flex-basis: 60px;
  height: 60px;
  flex-grow: 0;
`;
    const shareBlockProps = {
      url: "https://workdiary.dev/",
      button: ShareButtonRectangle,
      buttons: [
        { network: "Twitter", icon: FaTwitter },
        { network: "Facebook", icon: FaFacebook },
      ],
      text: 'hello',
      longtext: `Take a look at this super website I have just found.`,
      buttonClassName: customStyles
    };

    return (
        <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {/* <ShareBlockStandard {...shareBlockProps} /> */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            title
          }
        }
      }
    }
  }
`
