import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'

function App() {
  const [ global, setGlobal ] = useState({})
  const [ countries, setCountries ] = useState([])
  const [ country, setCountry ] = useState([])
  const [ nav, setNav ] = useState('')
  const [ navtitle, setNavtitle] = useState('china')
  const [ dayone, setDayone ] = useState('')

  const handlePickCountry = e => {
    if (e === "") {
      setCountry(global)
      setNav("GLOBAL")
      setNavtitle("china")
    } else {
      setCountry(countries[e])
      setNav(countries[e].Country)
      setNavtitle(countries[e].Country.toLowerCase())
    }
  }

  useEffect(()=> {
      axios.get(`https://api.covid19api.com/summary`)
      .then(resp => {
        setGlobal(resp.data.Global)
        setCountry(resp.data.Global)
        setCountries(resp.data.Countries)
      })
  }, [])

  useEffect(() => {
    axios.get(`https://api.covid19api.com/dayone/country/${navtitle}`)
    .then(resp => {
      setDayone(resp.data[0].Date.slice(0,10))
    })
  }, [nav])
  
  return (    
    <div className="App">
      <Nav nav={nav.toUpperCase()} dayone={dayone} />
      <Main country={country} countries={countries} handlePickCountry={handlePickCountry} />
    </div>
  );
}

export default App;