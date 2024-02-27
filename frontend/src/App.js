import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Opp from './Opp';
import Query from './Query';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  // check if user is logged in
  useEffect(() => {
    
    const user = JSON.parse(localStorage.getItem("user"))

    if (!user || !user.token) {
      setLoggedIn(false)
      return 
    }

    // verify token
    fetch("http://localhost:3080/verify", {
      method: "POST",
      headers: {
        'jwt-token': user.token
      }
    })
      .then(r => r.json())
      .then(r => {
        setLoggedIn('success' === r.message)
        setEmail(user.email || "")
      })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/opp" element={<Opp />} />
          <Route path="/query" element={<Query />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

// export the App component to be used in index.js
export default App;