import React, { Component } from 'react'

class MenuItems extends Component {
  render() {
    const { divRef } = this.props
    return (
      <div className="menuItems" ref={divRef}>
        <div className="content">
          Uses
        </div>
        <div className="content">
          Precautions and warnings
        </div>
        <div className="content">
          Interactions
        </div>
        <div className="content">
          Contraindications
        </div>
        <div className="content">
          Dietary restrictions
        </div>
        <div className="content">
          FAQs
        </div>
        <div className="content">
          References
        </div>
      </div>
    )
  }
}

export default MenuItems
