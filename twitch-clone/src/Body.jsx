import React from 'react'
import "./Body.css"
import Profile from "./Profile"

function Body() {
    return (
        <div className="body">
            <div className="body__left">
                <Profile />
            </div>
            <div className="body__rightPlaceHolder"></div>

        </div>
    )
}

export default Body
