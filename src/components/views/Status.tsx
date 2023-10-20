import "./../../App.css"

function Status() {
  return (
    <>
    <h1 className="heading">Status</h1>
      <div className="View-section">
        <div className="View-status-gradient View-status-gradient-down">
        </div>
        <div>
          <h2>Services</h2>
          <div className="View-service-routes">
            <div className="View-service-route">
              <h3>/potato</h3>
              <h3>O</h3>
            </div>
            <div className="View-service-route">
              <h3>/potato</h3>
              <h3>O</h3>
            </div>
            

          </div>
        </div>
      </div>
      <div className="View-section">
        <div className="View-status-gradient View-status-gradient-up">
        </div>
        <div>
          <h2 className="hover-animation">Ping</h2>
          <div className="View-service-routes">
            <div className="View-service-route">
              <h3>127.0.0.1</h3>
              <h3>O</h3>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Status