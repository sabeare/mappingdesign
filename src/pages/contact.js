// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Contact = ()=> {
  return (
    <>
        <Layout pageHeading='Contact' pageTitle='Contact us' >
            <p>wil je meer weten bel me </p>
        
        </Layout>
    </>
  )
    
    
};

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Contact;