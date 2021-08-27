import React from 'react'
import { Link } from "react-router-dom";
import "./sidebar.css"

function LandingPage() {
    return (
        <div>
            <h1 className="nj1">Groww Assignment</h1>
            <h4>1.Fetch the data of all the banks from the API.</h4>
            <h4>2.Displayed the data in Tables.</h4>
            <h4>3.By default only 10 records are shown in a page.</h4>
            <h4>4.User can change this to a desired no if he wants.</h4>
            <h4>5.User can also add or remove his favourite bank.</h4>
            <h4>6.User can also click on See Details to see the complete bank Details.</h4>
            <h4>7.User can also go a url /bank-details/:ifsc to select a respective bank.</h4>
            <h4>8.User can also select a city from dropdown to see all the banks of that respective city.</h4>
            <h4>9.User can also click on Favourites to see the list of his favourite banks.</h4>
        
            <Link to='/all-banks' >
                <h2 className="nj2">Click Here To See The Assignment</h2>
            </Link>
        </div>
    )
}

export default LandingPage
