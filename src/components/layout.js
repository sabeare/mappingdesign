// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { 
    container, 
    heading, 
    navLinks, 
    navLinkItem, 
    navLinkText,
    siteTitle
} from './layout.module.css';


/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Layout = ({pageTitle, pageHeading, children})=> {
    const data = useStaticQuery(graphql`
    query title {
        site {
          siteMetadata {
            title
          }
        }
      }

`)
    return (
    
    <main className={container}>
         <title>{pageTitle} | {data.site.siteMetadata.title}
         </title>
         <p className={siteTitle}>{data.site.siteMetadata.title}</p>
         <nav> 
            <ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
            </ul>
             
         </nav> 
      <h1 className={heading}>{pageHeading}</h1>
      { children }
      
      

        
        
  
      </main>
      
      );
  };
  
  /* Step 3: Export your component so it
  can be used by other parts of your app. */
  export default Layout;

