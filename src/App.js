import React from "react"
import {BrowserRouter, Route, Routes, } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Game from "./game-components/game"
import './App.css'

export default function App(){
   const style = {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
   }
   const gameContainer = {
    height: "100vh", 
    width: "100vw", 
    display: 'flex',
    justifyContent: 'center',
    marginTop: "3rem"
   }
    return ( 
        <div style={style}>
       <BrowserRouter>
       <Header/>
        <Routes>
            <Route path='/home' element = {<h1> homepage</h1>}/>
            <Route path='/game' element = {<div style={gameContainer}><Game/></div>}/>
            <Route path='/about' element = {<h1>This is the About</h1>}/>
            <Route path='/settings' element = {<h1>This is the Settings</h1>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </div>
    )
}