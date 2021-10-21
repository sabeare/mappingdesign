
// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Blog = ({data})=> {

  return (
    <>
        <Layout pageHeading='Blog' pageTitle='Digital garden' >
            <ul>
              {data.allFile.nodes.map((node) =>{
                 return <li key = {node.name}>{node.name}</li>;   
              })} 
            </ul>
            
            
        
        </Layout>
    </>
  )
};

/* Step 3: Export your component so it
can be used by other parts of your app. */

export const query = graphql`
    query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
  `;  
export default Blog;