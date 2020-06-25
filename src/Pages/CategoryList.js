import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import './Home.css';
import {
    FaStar
} from 'react-icons/fa';
import Loader from 'react-loader-spinner';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDataList: [],
            currentPageNo:2,
            isShowActiveIndicator:true,
            genre:props.match.params.category
        }
    }
    componentWillMount() {
      this.getMovieList(1);
    }
    getMovieList(page){
        this.setState({isShowActiveIndicator:true});
        console.log(page,`https://yts.mx/api/v2/list_movies.json?limit=50&page=${page}`);
        fetch(`https://yts.mx/api/v2/list_movies.json?genre=${this.state.genre}&limit=50&page=${page}`)
        .then(res=>res.json())
        .then((response)=>{
            
            console.log("response ..................");
            
          
            if(page ==1){
                this.setState({movieDataList:response.data.movies,isShowActiveIndicator:false});
            }else{
                 
                
                var m=this.state.movieDataList.concat(response.data.movies);
                console.log("existing.......",typeof(m));

                 this.setState({movieDataList:m,isShowActiveIndicator:false,currentPageNo:this.state.currentPageNo+1});
               
            }
           
            
        })
    }
    handleScroll(e) {
        console.log("scorller",e.target.scrollHeight,e.target.scrollTop,e.target.clientHeight);
        const bottom = e.target.scrollHeight - (e.target.scrollTop) === e.target.clientHeight;
        console.log("lco",bottom);
        if (bottom) {

            console.log("end......");
            this.getMovieList(this.getMovieList(this.state.currentPageNo))
        }
    }

    render() {
        return (
            <div 
            onScroll={(e) => this.handleScroll(e)}
            style={{ height: "100vh", width: "100vw",backgroundColor:"black",overflow:"auto" }}>
                <Header />
              <div
              style={{height:680,overflow:"auto",paddingTop:20,marginTop:10,textAlign:"center",marginLeft:30}}
              >
              <h2 style={{color:"white"}}>{this.state.genre}</h2>  
              {this.state.movieDataList.map((movie, index) =>
                        <Link
          key={index}
                             to={`/details/${movie.id}`}
                            
                            class="card" style={{ width: 180, marginRight: 20, float: 'left', height: 250,borderColor:"transparent",backgroundColor:"transparent",alignItems:"center",overflow:"auto",marginTop:15 }}>
                            <label > <FaStar style={{height:20,width:20,color:"orange"}}/>          {movie.rating}</label>
                            
                            <img src={movie.large_cover_image} class="card-img-top" alt="..." style={{ height: 150, width: 100,textAlign:"center" }} />
                            <div class="card-body" style={{textAlign:"center",width: 150}}>
                                <h5 class="card-title" style={{color:"white"}} >{movie.title_long}</h5>
                                

                            </div>
                        </Link >)}
                        <br></br>
                        
                      
                      

              </div>
              <Loader
                        
                        className="loaderStyle"
                    visible={this.state.isShowActiveIndicator}
                    style={{textAlign:"center",float:"center"}}
         type="ThreeDots"
         color="#00BFFF"      
         height="20"
         width="100"
      />
            
              
            </div>
        )
    }

}
