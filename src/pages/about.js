import * as React from "react";
import {Link} from 'gatsby'
import Layout from "../components/layout";

const About = ()=> {
    return (
      <>
      <Layout pageHeading='About' pageTitle='Site about' >
      <p>start tekst dit is de basis, het is leuk</p>
        
        </Layout>
        
        

        <Link to="/">
        home test link
      </Link>
  
      </>
      );
  };
  
  export default About;