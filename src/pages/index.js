// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Homepage = ()=> {
  return (
    <>
        <Layout pageHeading='Home' pageTitle='Site home' >
            <p>Design research onderzoek </p>

            <StaticImage 
            src="https://www.diariesofmagazine.com/wp-content/uploads/2018/11/Reasons-to-visit-Kyrgyzstan-Lenin.jpg" 
            alt="kyrgyz mountain" 
            
            />

            <StaticImage 
            src="../images/baukje.jpg" 
            alt="baukje rienks portret" 
    
            />

<iframe width="960" height="678.6901763224181" data-original-width="1191" data-original-height="842" src="https://www.thinglink.com/card/1502652636665479169" type="text/html" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen scrolling="no"></iframe><script async src="//cdn.thinglink.me/jse/responsive.js"></script>
<iframe src="https://uploads.knightlab.com/storymapjs/1ddfd8a302e864be0954d7a0cf65d553/kyrgys/index.html" frameborder="0" width="50%" height="800"></iframe>        
        </Layout>
        
    </>
  )
};

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Homepage;