// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from "react";
import Layout from "../components/layout";

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Homepage = ()=> {
  return (
    <>
        <Layout pageHeading='Home' pageTitle='Site home' >
            <p>Design research onderzoek </p>
        
        </Layout>
        
    </>
  )
};

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Homepage;