import React from "react"
import { graphql } from "gatsby"
import {RiSendPlane2Line} from "react-icons/ri";

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ContactQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({data}) => {

  return  (
    <Layout className="contact-page">
      <SEO 
        title="Contacto | Portadas de libros"
        description="Ponte en contacto con Portadas de libros"
      />
      <div className="wrapper">
        <h1>Estemos en contacto</h1>
        <div className="description">
        Si quieres dejar algún comentario sobre nuevos posteos o solicitar alguna portada en especial solo hazlo saber.
        También puedes enviarnos mensajes por <a href="https://twitter.com/stackrole">Twitter.</a>
        </div>
        <form className="contact-form" action="/thanks" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Nombre<input type="text" name="name" required /></label>   
          </p>
          <p>
            <label>Mail<input type="email" name="email" required /></label>
          </p>
          <p>
            <label>Asunto<input type="text" name="subject" required /></label>   
          </p>
          <p>
            <label>Mensaje<textarea name="message" required ></textarea></label>
          </p>
          <p className="text-align-right">
            <button className="button" type="submit">Enviar mensaje <span className="icon -right"><RiSendPlane2Line/></span></button>
          </p>
        </form>
      </div>

    </Layout>
  )
}

export default Contact