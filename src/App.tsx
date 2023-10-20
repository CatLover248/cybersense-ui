import Dashboard from "./components/Dashboard"
import "./App.css"
import Sidebar from "./components/Sidebar"
import React, {useState} from "react";

function App() {

  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <div className="View">
        <Dashboard page={page} />
      </div>

      <Sidebar stateClick={setPage} itemType="Status-button"/>

    </div>
  )
}

export default App
