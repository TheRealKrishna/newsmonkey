/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie';

export default function Navbar(props){
  const [elementsForBlackMode] = useState([])
  const [elementsForDarkMode] = useState([])
  const [currentThemeIcon, setCurrentThemeIcon] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAihJREFUSEvd1svrTVEUB/DPL4+UATNlZMSQRPJ+lreEIWWk/AVGwsR/YGBmZoY888ojb4mUgRGKqRTl/Whpnzqd33nsc7u6ZdXt3rv32uu711p7fdcaMyIZGxGuQYFnYW+69Am87uvAoMCrcCOBrcbN/wJ4JabhbI03OR5vwwfcrotGU6jX4DwmYguuVA5Px7y09iwBlFXW4xy+YxNuVcGbgNfhAibjCyKPDzLzuAKXMQXfsBnXcoFDbytO4zM24G7pcFx4Tvr/Er9Le0tLwBHui31CXejuwjvcTwth9AAiFVPT2qfk0VE8TmtLMCNdvDZQfcppP47RWPu/sBsnc1KSC7woed2l/xVzEeFvlS5DxeF7WNxlLO3Hu9jRpVsGDhqMTyFFmcxMee6yVeyH11H/8V0uu9gPav1Lr2XgwzhUsl5QYTyoO7moSS/C/RxloomtIwicLOCFeNQTeAGe5AI3hTrCFtSXK/G6I8Qfc0PdZvh6qt0c8GC8oNmhvOr5KdwTOuz9SBz+YljAYWcfjrcY/Ik9wyKQnXiLhwlwWXqVaysXiPAexNO0HpUQlHmq6aJtBBJ5OpOaxMZKSc1G1HfIK7wpASzHpdSdotHE73GS2xajv9Y29Bqb5bYYLbX2bBNwkEcMApNSP71aAegaBKKNxuQSg0AAjyOgtlDHzaOGY5KoSs7osx3v+44+XdWQAzyUOh7E438CPLKBvisVnfu5g0Cnob4KfwBXiXUfhZxBjAAAAABJRU5ErkJggg==")

  useEffect(()=>{
    elementsForDarkMode.push(document.getElementById("root"));
    elementsForBlackMode.push(...Array.from(document.getElementsByClassName("navbar")));
    elementsForBlackMode.push(...Array.from(document.getElementsByClassName("nav-item")));
    elementsForBlackMode.push(...Array.from(document.getElementsByClassName("nav-link")));
    elementsForBlackMode.push(...Array.from(document.getElementsByClassName("navbar-brand")));
    elementsForDarkMode.push(...Array.from(document.getElementsByTagName("html")));
    elementsForDarkMode.push(...Array.from(document.getElementsByClassName("form-control")));
    elementsForDarkMode.push(...Array.from(document.getElementsByClassName("btn-outline-success")));
    elementsForBlackMode.push(...Array.from(document.getElementsByClassName("card")));
    elementsForBlackMode.push(...Array.from(document.getElementsByClassName("card-body")));
    elementsForBlackMode.push(...Array.from(document.getElementsByClassName("card-title")));
    elementsForBlackMode.push(...Array.from(document.getElementsByClassName("card-text")));
    elementsForBlackMode.push(...Array.from(document.getElementsByClassName("accordion-button")));
    elementsForDarkMode.push(...Array.from(document.getElementsByClassName("accordion-body")));
    if(!Cookies.get("currentTheme")){
      Cookies.set('currentTheme', 'light');
    }
    if(Cookies.get("currentTheme") === "dark"){ 
      setCurrentThemeIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAmZJREFUSEvVlrtrVFEQh78fPhAskk6wstJSEUV8GxUSNQmilgpWgn+BlaiN/4GFnZ2dETWKL3zgW0QRLFIZQVsJKGh8/WSWs/F6s3fv2SWyeKrde+bMd2bmzEP0aKlHXLoC214GHE6XPidpslMDugVvA+4k2ICku/8/2PZWoE/SpbI1tmsttj0KTEm638obLV1teztwBZgPDEu6UTxsux9Ylb69kjRV2h8ELgPfgd2S7pXhVeCdwDiwEPgKRByf5MTR9hbgOrAI+AbskXQrCxxCtkeAMeALMCTpYfOw7bjwivR/QpILexsL4FFJV7NdXVByAPgg6XG6TCg9BkQoFie5z0BYdFrS8yS3AVgiKS7ecmWnk+2jwBmozP1fwEFJ53NCkgW2vQ4Iq+vkp4GVkibq4HWKGudtPwLW1ylL+2OS9tXJzoBTGYxS2FyNNLG9NOJcp6iwH1ZH/k+X0i5EJpvltQg+CZwoKGiUQtvxoB50AA7RcPfrUqGJ76ckBedPzGxXgdcCzzoEr5H0Ihccbm7l6r4ofR2A43X3S/qU5ep2im3fTrmbwx+XNFwnmPuqVyd3z6tR+CNquKQ3cwJOKXUEONtG4U/g0JwUENv7gfeSnib4JiAe4Y7SBaKhHJf0MslFJkTJvFB10UpX2444XUxNYpekmZSyvRyI/I71VtK7JsD2ZuBa6k4jkuL3rJXbFgerGnpZY6ktRkttebYKPJAGgQWpn94sAjIGgSEgJpcYBAI8qwC1c3U09Ch9MUn8tTJHn73Ax45Gn7pUyAHX6cjK424s/lfg3gz0ddbk7Hfl6hzFdTK/AZTRES64+9RRAAAAAElFTkSuQmCC")
      for(let element of elementsForBlackMode){
          element.classList.add("blackMode")
      }
      for(let element of elementsForDarkMode){
          element.classList.add("darkMode")
      }
      }
  }, [props.progress, useLocation(), props.refreshThemeElements])
  
  const toogleTheme = async()=>{
    if(Cookies.get("currentTheme") === "dark"){
      Cookies.set('currentTheme', 'light');
      setCurrentThemeIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAihJREFUSEvd1svrTVEUB/DPL4+UATNlZMSQRPJ+lreEIWWk/AVGwsR/YGBmZoY888ojb4mUgRGKqRTl/Whpnzqd33nsc7u6ZdXt3rv32uu711p7fdcaMyIZGxGuQYFnYW+69Am87uvAoMCrcCOBrcbN/wJ4JabhbI03OR5vwwfcrotGU6jX4DwmYguuVA5Px7y09iwBlFXW4xy+YxNuVcGbgNfhAibjCyKPDzLzuAKXMQXfsBnXcoFDbytO4zM24G7pcFx4Tvr/Er9Le0tLwBHui31CXejuwjvcTwth9AAiFVPT2qfk0VE8TmtLMCNdvDZQfcppP47RWPu/sBsnc1KSC7woed2l/xVzEeFvlS5DxeF7WNxlLO3Hu9jRpVsGDhqMTyFFmcxMee6yVeyH11H/8V0uu9gPav1Lr2XgwzhUsl5QYTyoO7moSS/C/RxloomtIwicLOCFeNQTeAGe5AI3hTrCFtSXK/G6I8Qfc0PdZvh6qt0c8GC8oNmhvOr5KdwTOuz9SBz+YljAYWcfjrcY/Ik9wyKQnXiLhwlwWXqVaysXiPAexNO0HpUQlHmq6aJtBBJ5OpOaxMZKSc1G1HfIK7wpASzHpdSdotHE73GS2xajv9Y29Bqb5bYYLbX2bBNwkEcMApNSP71aAegaBKKNxuQSg0AAjyOgtlDHzaOGY5KoSs7osx3v+44+XdWQAzyUOh7E438CPLKBvisVnfu5g0Cnob4KfwBXiXUfhZxBjAAAAABJRU5ErkJggg==")
      for(let element of elementsForBlackMode){
        element.classList.remove("blackMode")
      }
      for(let element of elementsForDarkMode){
        element.classList.remove("darkMode")
      }
    }
    else{
      Cookies.set('currentTheme', 'dark');
      setCurrentThemeIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAmZJREFUSEvVlrtrVFEQh78fPhAskk6wstJSEUV8GxUSNQmilgpWgn+BlaiN/4GFnZ2dETWKL3zgW0QRLFIZQVsJKGh8/WSWs/F6s3fv2SWyeKrde+bMd2bmzEP0aKlHXLoC214GHE6XPidpslMDugVvA+4k2ICku/8/2PZWoE/SpbI1tmsttj0KTEm638obLV1teztwBZgPDEu6UTxsux9Ylb69kjRV2h8ELgPfgd2S7pXhVeCdwDiwEPgKRByf5MTR9hbgOrAI+AbskXQrCxxCtkeAMeALMCTpYfOw7bjwivR/QpILexsL4FFJV7NdXVByAPgg6XG6TCg9BkQoFie5z0BYdFrS8yS3AVgiKS7ecmWnk+2jwBmozP1fwEFJ53NCkgW2vQ4Iq+vkp4GVkibq4HWKGudtPwLW1ylL+2OS9tXJzoBTGYxS2FyNNLG9NOJcp6iwH1ZH/k+X0i5EJpvltQg+CZwoKGiUQtvxoB50AA7RcPfrUqGJ76ckBedPzGxXgdcCzzoEr5H0Ihccbm7l6r4ofR2A43X3S/qU5ep2im3fTrmbwx+XNFwnmPuqVyd3z6tR+CNquKQ3cwJOKXUEONtG4U/g0JwUENv7gfeSnib4JiAe4Y7SBaKhHJf0MslFJkTJvFB10UpX2444XUxNYpekmZSyvRyI/I71VtK7JsD2ZuBa6k4jkuL3rJXbFgerGnpZY6ktRkttebYKPJAGgQWpn94sAjIGgSEgJpcYBAI8qwC1c3U09Ch9MUn8tTJHn73Ax45Gn7pUyAHX6cjK424s/lfg3gz0ddbk7Hfl6hzFdTK/AZTRES64+9RRAAAAAElFTkSuQmCC")
      for(let element of elementsForBlackMode){
        await element.classList.add("blackMode")
      }
      for(let element of elementsForDarkMode){
        await element.classList.add("darkMode")
      }
      }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">News Monkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/pages/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/category/business">Business</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/category/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/category/health">Health</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/category/science">Science</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/category/sports">Sports</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/category/technology">Technology</Link>
                </li>
            </ul>
            <button className="btn" style={{marginRight:"20px"}} onClick={toogleTheme}> <img src={currentThemeIcon} alt="darkModeButton"/></button>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    )
}