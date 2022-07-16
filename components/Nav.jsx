import * as fcl from "@onflow/fcl"; //Import Flow Client Library into Navigation Component so Users can use it to log in and out
import "../flow/config.js"; //import config.js file to connect to the testnet
import { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css'; //imports styles from Nav module

export default function Nav() {
    const [user, setUser] = useState({ loggedIn: false }); //sets variable for user and also a sets default value for the setUser variable of NOT logged in

    useEffect(() => { //this function runs every time whatever event is in the [] brackets. in this case empty brackets means a page refresh will trigger this function
        fcl.currentUser.subscribe(setUser); //ensures the user variable retains its value even if the page is refreshed.
      }, [])
      
    function handleAuthentication() {
        if (user.loggedIn) { //if user is loggin in, then log them out
            fcl.unauthenticate(); // logs the user out
        } else { //if user is logged out, then bring up screen to allow then so log in
            fcl.authenticate(); // logs the user in
        }
    }

  return (
    <nav className={styles.nav}> 
        <h1>Emerald DApp</h1> 
        <button onClick={handleAuthentication}>{user.loggedIn ? user.addr : "Log In"}</button> 
    </nav>
  )
}