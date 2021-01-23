import PropTypes from "prop-types"
import React from "react"

const Footer = ({ content }) => {
  return (
  <>
    <div style={{'font-size': 'smaller', 'text-align': 'center'}}>
      <p>The source code for this page can be found on <a href="https://observablehq.com/@markusschanta/sailing-link">Observable</a> and <a href="https://github.com/markusschanta/sailing">Github</a>.</p>
    </div>
  </>
  )
}

Footer.propTypes = {
  content: PropTypes.node.isRequired,
}

export default Footer
