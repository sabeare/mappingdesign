
// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx";

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Blog = ({data})=> {

  return (
    <>
        <Layout pageHeading='Blog' pageTitle='Digital garden' >
            
              {data.allMdx.nodes.map((node) =>{
                return <article key = {node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>{node.frontmatter.date}</p>
                    <p>{node.frontmatter.category}</p>
                    <p><b>{node.frontmatter.tags}</b></p>
                    <MDXRenderer>{node.body}</MDXRenderer>
                    </article>;   
              })} 
            
        </Layout>
    </>
  )
};

/* Step 3: Export your component so it
can be used by other parts of your app. */

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "dddd, MMMM Do YYYY")
          title
          tags
          category
        }
        id
        body
      }
    }
  }
`;  
export default Blog;