import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import SEO from "../components/SEO"

const Tags = () => {
  const tags = useStaticQuery(query).allContentfulRecipe.nodes
  const newTags = setupTags(tags)

  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slugTag = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${slugTag}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

const query = graphql`
  {
    allContentfulRecipe(filter: {}) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
