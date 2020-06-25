import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import './Home.css';
import {
    FaStar
} from 'react-icons/fa';
import Loader from 'react-loader-spinner';
import categoryList from '../components/categoryData';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDataList: [],
            currentPageNo:1,
            isShowActiveIndicator:true,
        }
    }
    componentWillMount() {
     
    }
    


    render() {
        return (
            <div 
            
            style={{ height: "100vh", width: "100vw",backgroundColor:"black",overflow:"auto" }}>
                <Header />
              <div
              style={{height:680,overflow:"auto",paddingTop:20,marginTop:10,textAlign:"center",marginLeft:30}}
              >
              
              <h2 style={{color:"white"}}>Category</h2>   
                      
                      
              {categoryList.map((cat, index) =>
                        <Link
          key={index}
                             to={`/categorylist/${cat.name}`}
                            
                            class="card " style={{ width: 180, marginRight: 20, float: 'left', height: 100,borderColor:"transparent",backgroundColor:cat.color,alignItems:"center",overflow:"auto",marginTop:15 }}>
                            <label style={{color:"white",marginTop:40,fontSize:18,fontWeight:"bold"}}>{cat.name} </label>
                          
                        </Link >)}
              </div>
        
            
              
            </div>
        )
    }

}
