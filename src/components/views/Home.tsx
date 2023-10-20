import React from 'react'

function Home() {
  return (
    <>
        <h1 className="heading">Dashboard</h1>
        <div className="View-section">
            <h1>Current Status</h1>
        </div>
        <div className="View-section">
            <div className="View-status-gradient View-status-gradient-down">
            </div>
            <h3>Some of your services are down.</h3>
        </div>
        
    </>
  )
}

export default Home