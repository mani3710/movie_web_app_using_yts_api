import React from 'react'
import Header from '../components/Header';
export default class App extends React.Component {
  

    render() {
      return (
        <div 
        onScroll={(e) => this.handleScroll(e)}
        style={{ height: "100vh", width: "100vw",backgroundColor:"black",overflow:"auto" }}>
            <Header />
          <div
          style={{height:680,overflow:"auto",paddingTop:20,marginTop:10,textAlign:"center"}}
          >
          <h2 style={{color:"white"}}>About</h2>
          <p style={{width:"80vw",lineHeight:2.5,color:"#E0E0E0",marginLeft:"10rem"}}>

         Torrent Movie is an American media-services provider and production company headquartered in Los Gatos, California, founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California. The company's primary business is its subscription-based streaming service which offers online streaming of a library of films and television programs, including those produced in-house.[8] As of April 2020, Netflix had over 182 million paid subscriptions worldwide, including 69 million in the United States.[9] It is available worldwide except in the following: Mainland China (Due to local restrictions), Iran, Syria, North Korea, and Crimea (Due to U.S. sanctions). The company also has offices in Brazil, Netherlands, India, Japan and South Korea.[10] Netflix is a member of the Motion Picture Association (MPA). Today, the company produces and distributes content from countries all over the globe.

Netflix's initial business model included DVD sales and rental by mail, but Hastings abandoned the sales about a year after the company's founding to focus on the initial DVD rental business.[8][11] Netflix expanded its business in 2007 with the introduction of streaming media while retaining the DVD and Blu-ray rental business. The company expanded internationally in 2010 with streaming available in Canada,[12] followed by Latin America and the Caribbean. Netflix entered the content-production industry in 2013, debuting its first series House of Cards.

Since 2012, Netflix has taken more of an active role as producer and distributor for both film and television series, and to that end, it offers a variety of "Netflix Original" content through its online library.[13] By January 2016, Netflix services operated in more than 190 countries.[14] Netflix released an estimated 126 original series and films in 2016, more than any other network or cable channel.[15] Their efforts to produce new content, secure the rights for additional content, and diversify through 190 countries have resulted in the company racking up billions in debt: $21.9 billion as of September 2017, up from $16.8 billion from the previous year.[16] $6.5 billion of this is long-term debt, while the remaining is in long-term obligations.[17] In October 2018, Netflix announced it would raise another $2 billion in debt to help fund new content
          </p>
          
                    
                  
                  

          </div>
        
        
          
        </div>
      )
    }
  }
