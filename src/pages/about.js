import React from "react"
import Header from "../components/header"
import Subtitle from "../components/subtitle"
import Footer from "../components/footer"

export default function About() {
  return (
    <div>
      <Header headerText="About" />

      <Subtitle subtitleText="私はかすみと申します。" />
      <Footer />
    </div>
  )
}
