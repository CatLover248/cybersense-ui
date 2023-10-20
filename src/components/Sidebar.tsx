import React from 'react'

interface Prop{
  stateClick: React.Dispatch<React.SetStateAction<number>>
  itemType: string;
}

function Sidebar(prop:Prop) {
  return (
    <div className="Sidebar">
        <div className={"Sidebar-item " + prop.itemType}  onClick={() => prop.stateClick(1)}></div>
        <div className={"Sidebar-item " + prop.itemType}  onClick={() => prop.stateClick(2)}></div>
        <div className={"Sidebar-item " + prop.itemType}  onClick={() => prop.stateClick(3)}></div>
        <div className={"Sidebar-item " + prop.itemType}  onClick={() => prop.stateClick(4)}></div>
        <div className={"Sidebar-item " + prop.itemType}  onClick={() => prop.stateClick(5)}></div>
        <div className={"Sidebar-item " + prop.itemType}  onClick={() => prop.stateClick(6)}></div>

    </div>
  )
}

export default Sidebar