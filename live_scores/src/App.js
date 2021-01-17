import React,{Fragment, useEffect,useState} from "react";
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import Blog from './components/Blog';
import Blog2 from './components/Blog2';
import Blog3 from './components/Blog3';
import Blog4 from './components/Blog4';
import Blog5 from './components/Blog5';
import Blog6 from './components/Blog6';
import Blog7 from './components/Blog7';
import Blog8 from './components/Blog8';
import Blog9 from './components/Blog9';
import Blog10 from './components/Blog10';
import { getMatches } from "./Api/Api";
import { Container, Grid, Typography, } from "@material-ui/core";



function App() {

  const [matches, setMatches] = useState([]);


  useEffect(() => {
    getMatches()
      .then((data) => 
        setMatches(data.matches))
      
      .catch((error) =>alert("could not load"));
  }, []);
  return (
    <div className="App">
      <Navbar/>
    <h1>Live Scores</h1>
    

    
   <Grid container>
   
   <Grid sm="3">
   {matches.map((match) => (
     <Fragment>
       {match.type=="Twenty20"?(<MyCard match={match}></MyCard>):("")}
       </Fragment>
            
            ))}
   </Grid>
   <Grid sm="6"><Blog></Blog>
   <Blog2></Blog2>
   <Blog3></Blog3>
   <Blog4></Blog4>
   <Blog5></Blog5>
   <Blog6></Blog6>
   <Blog7></Blog7>
   <Blog8></Blog8>
   <Blog9></Blog9>
   <Blog10></Blog10>
   </Grid>
   <Grid sm="3">
   {matches.map((match) => (
     <Fragment>
       {match.type=="Twenty20"?(<MyCard match={match}></MyCard>):("")}
       </Fragment>
            
            ))}
   </Grid>
   </Grid>
    
   
    </div>
  );
  
}

export default App;
