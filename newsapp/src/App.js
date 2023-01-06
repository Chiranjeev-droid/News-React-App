
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=>{
  const pageSize = 5;
  const apiKey= process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        
        <Switch>
          <Route exact path="/"><News apiKey={apiKey} setProgress={setProgress}  key="general" pageSize = {6} category={'general'}/></Route>
          <Route exact path="/business"><News apiKey={apiKey} setProgress={setProgress}  key="business" pageSize = {6} category={'business'}/></Route>
          <Route exact path="/entertainment"><News apiKey={apiKey} setProgress={setProgress}  key="entertainment" pageSize = {6} category={'entertainment'}/></Route>
          <Route exact path="/general"><News apiKey={apiKey} setProgress={setProgress}  key="general" pageSize = {6} category={'general'}/></Route>
          <Route exact path="/health"><News apiKey={apiKey} setProgress={setProgress}  key="health" pageSize = {6} category={'health'}/></Route>
          <Route exact path="/science"><News apiKey={apiKey} setProgress={setProgress}  key="science" pageSize = {6} category={'science'}/></Route>
          <Route exact path="/sports"><News apiKey={apiKey} setProgress={setProgress}  key="sports" pageSize = {6} category={'sports'}/></Route>
          <Route exact path="/technology"><News apiKey={apiKey} setProgress={setProgress}  key="technology" pageSize = {6} category={'technology'}/></Route>
        </Switch>
        </Router>
        
      </div>
    )
  
}

export default App;


