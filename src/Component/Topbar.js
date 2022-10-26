import React from 'react'
import './Topbar.css'
export default function Topbar() {
  return (
    <div className="topbarMainContainer">
        <div className="topbar-up">
            <h1>Blog-Tech</h1>
        </div>
        <div className="topbar-down">
            <div className="topbar-down-left"></div>
            <div className="topbar-down-right">
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            <div className="topbar-button">Login/Register</div>
            </div>
        </div>

    </div>
  )
}
