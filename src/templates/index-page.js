import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 380, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""
	return (
		<Layout>
      <SEO/>
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 class="title">Portadas de libros</h1>
          <div className="description" >Acá vas a encontrar los mejores análisis de portadas de libros.
            </div>
          <Link to="/blog" className="button">Blog <span class="icon -right"><span role="img" aria-label="icon book">📝</span><RiArrowRightSLine/></span></Link>
        </div>
        <div>
          {Image ? (
            <Img 
              fluid={Image} 
              alt={frontmatter.title + ' - Tapas de libros'}
              className="featured-image"
            />
          ) : ""}
        </div>
      </div>
      <BlogListHome/>
		</Layout>
	)
}

export default HomePage
