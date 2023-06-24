import {React, useState} from 'react'
import process from 'process';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Navbar from "./components/Navbar.js"
import About from './components/About.js';
import News from './components/News.js'

export default function App() {
  let [progress, setProgress] = useState(0) 
  const [apiKey] = useState(process.env.REACT_APP_API_KEY)
  let [refreshThemeElements, setRefreshThemeElements] = useState(1)


    return (
      <BrowserRouter>
      <Navbar progress={progress} refreshThemeElements = {refreshThemeElements}/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Routes>
        <Route exact path='/' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="general" category="general"/></>}/>
        <Route exact path='/pages/about' element={<><About setProgress={setProgress} key="about"/></>}/>

        <Route exact path='/category/business' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="business" category="business"/></>}/>
        <Route exact path='/category/entertainment' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="entertainment" category="entertainment"/></>}/>
        <Route exact path='/category/Health' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="health" category="Health"/></>}/>
        <Route exact path='/category/Science' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="science" category="Science"/></>}/>
        <Route exact path='/category/Sports' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="sports" category="Sports"/></>}/>
        <Route exact path='/category/Technology' element={<><News setRefreshThemeElements = {setRefreshThemeElements} apiKey = {apiKey} setProgress={setProgress} key="technology" category="Technology"/></>}/>
      </Routes>
      </BrowserRouter>
    )
}
