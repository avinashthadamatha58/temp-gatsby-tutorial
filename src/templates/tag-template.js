import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import RecipesList from "../components/RecipesList"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const TagTemplate = props => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO title={props.pageContext.tag} />
      <main className="page">
        <h2>{props.pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={data.allContentfulRecipe.nodes} />
        </div>
      </main>
    </Layout>
  )
}

const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        cookTime
        prepTime
      }
    }
  }
`

export default TagTemplate
