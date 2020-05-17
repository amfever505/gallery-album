import React from "react"
import "../assets/css/layout.css"

export default function Header(props) {
  return (
    <div className="container">
      <h1 style={{ marginTop: "60px" }}>{props.headerText}</h1>
    </div>
  )
}
