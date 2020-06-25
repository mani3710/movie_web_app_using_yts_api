import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import './Home.css';
import Loader from 'react-loader-spinner';
import {Button} from 'react-bootstrap';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetails:{},
            movieId:props.match.params.id,
            isShowActiveIndicator:true,
            
        }
    }
    componentDidMount() {
       this.getMovieDetails();
    }
    getMovieDetails(){
        this.setState({isShowActiveIndicator:true});
        
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${this.state.movieId}`)
        .then(res=>res.json())
        .then((response)=>{
           
            console.log("response ..................",response);
            this.setState({isShowActiveIndicator:false,movieDetails:response.data.movie})
            
            
          
           
            
        })
    }
    isShowGenres(){
        if(this.state.movieDetails.genres){
            return(
                <div style={{marginTop:15}}>
                 <label style={{color:"#E0E0E0"}}>Tags:</label>
                    {this.state.movieDetails.genres.map((genre, index) =>
                        <label 
                        style={{backgroundColor:"gray",color:"white",marginLeft:15,padding:10,borderRadius:10}}
                        key={index}>{genre}</label>
                        )}
                </div>
            );
        }else{
            return null;
        }
    }
    isShowDownload(){
        if(this.state.movieDetails.torrents){
            return(
                <div style={{marginTop:15,height:350,overflow:"auto",borderColor:"white",borderWidth:4}}>
                <div>
                 <label style={{color:"#E0E0E0"}}>Quality:</label>
                 </div>
                    {this.state.movieDetails.torrents.map((genre, index) =>
                    <div style={{marginTop:15}}>
                    <div style={{textAlign:"center",fontSize:20,color:"white"}}> { genre.quality}</div>
                    <div style={{textAlign:"center"}}>
                        <label>Peers : </label>
                        <label style={{color:"white"}}>{genre.peers}</label>
                        <label style={{marginLeft:35}}>Seeds :</label>
                        <label style={{color:"white"}}> {genre.seeds}</label>
                    </div>
                        <div style={{textAlign:"center",marginBottom:20}}>
  <Button 
  href={`https://wolfozzotorrent.herokuapp.com/#magnet:?xt=urn:btih:${genre.hash}&dn=${genre.url}&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent`}
  
  variant="outline-warning" style={{marginLeft:15,width:"48%",float:"left"}}>Watch Online</Button>
  <Button 
  href={genre.url}
  variant="outline-secondary" style={{marginLeft:15,width:"48%",float:"left"}}>Download Torrent</Button>
  </div>
  
  </div>
                        )}
                </div>
            );
        }else{
            return null;
        }
    }

    render() {
        return (
            <div 
                
            style={{ height: "100vh", width: "100vw",backgroundColor:"black",overflow:"auto" }}>
                <Header />
              <div
              style={{height:710,overflow:"auto",paddingTop:20,alignItems:"center"}}
              >
               <Loader
                        
                        className="loaderStyle"
                    visible={this.state.isShowActiveIndicator}
                    style={{textAlign:"center"}}
         type="ThreeDots"
         color="#00BFFF"      
         height="20"
         width="100"
      /> 
              <div 
              style={{float:"left",width:"35vw",height:"80vh",marginLeft:"5rem",alignItems:"center",justifyContent:"center"}}>
 <img src={this.state.movieDetails.large_cover_image} class="card-img-top" alt="..." style={{ height: "90%", width: "65%",borderRadius:10,marginLeft:40,marginTop:40}} />
              </div>
              <div style={{float:"left",width:"55vw",height:"80vh"}}>

           <h3 style={{color:"white"}}>{this.state.movieDetails.title_long}</h3>
         
              
               {this.isShowGenres()}
               <div style={{marginTop:15}}>
                 <label style={{color:"#E0E0E0"}}>Description:</label>
                    <p style={{color:"white",lineHeight:2}}>{this.state.movieDetails.description_full}</p>
                </div>
                
               {this.isShowDownload()}
               


           
              </div>
              
                      
            

              </div>
             
              
            </div>
        )
    }

}
