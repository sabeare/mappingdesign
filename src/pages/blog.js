
// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Blog = ()=> {
  return (
    <>
        <Layout pageHeading='Blog' pageTitle='Digital garden' >
            <p>digital gardening is leuk </p>
            
            
        
        </Layout>
    </>
  )
    
    
};

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Blog;