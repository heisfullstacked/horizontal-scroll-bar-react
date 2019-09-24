import React, { Component } from 'react';
import './App.css';
import MenuItems from './MenuItems';

class App extends Component {
  constructor(props) {
    super(props)
    this.menuItemsRef = React.createRef();
    this.state = {
      leftScrollable: false,
      rightScrollable: true
    }
  }

  scrollLeft = () => {
    const menuItemsElement = this.menuItemsRef.current
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      menuItemsElement.scrollLeft -= 10;
      scrollAmount += 10
      if(scrollAmount >= 400){
          window.clearInterval(slideTimer);
          this.setState({
            leftScrollable: this.leftScrollable(),
            rightScrollable: this.rightScrollable()
          })
      }
    }, 5);
  }

  scrollRight = () => {
    const menuItemsElement = this.menuItemsRef.current
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      menuItemsElement.scrollLeft += 10;
      scrollAmount += 10
      if(!this.rightScrollable() || scrollAmount >= 400){
          window.clearInterval(slideTimer);
          this.setState({
            leftScrollable: this.leftScrollable(),
            rightScrollable: this.rightScrollable()
          })
      }
    }, 5);
  }

  rightScrollable = () => {
    const menuItemsElement = this.menuItemsRef.current
    const scrollWidth = menuItemsElement.scrollWidth
    const offsetWidth = menuItemsElement.offsetWidth
    const scrollPosition = menuItemsElement.scrollLeft
    return scrollPosition + offsetWidth < scrollWidth
  }

  leftScrollable = () => {
    return this.menuItemsRef.current.scrollLeft !== 0
  }

  render() {
    const { rightScrollable, leftScrollable } = this.state
    return (
      <div className="App">
        <div className="menuBar"> 
          {leftScrollable && <div className="navButton" onClick={this.scrollLeft}>
            <div className="navBack">
            </div>
          </div>}
          <MenuItems divRef={this.menuItemsRef} />
          {rightScrollable && <div className="navButton" onClick={this.scrollRight}>
            <div className="navForward">
            </div>
          </div>}
        </div>
      </div>
    );
  }
}

export default App;
