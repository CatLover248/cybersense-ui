import React, {useState} from 'react'
import Status from './views/Status';
import Home from './views/Home';
interface Prop{
  page: number;
}

function Dashboard(prop: Prop) {
  
  switch(prop.page){
    case 1:
      return <Home/>;
    case 2:
      return <Status/>;
    default:
      return <h1>The page that was attempted to be accessed does not exist. page={prop.page}</h1>
  }

  
}

export default Dashboard