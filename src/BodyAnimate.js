import React from "react";

class BodyAnimate extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("loaded", this.props.isDark);
  }
  render() {
    return this.props.children;
  }
}

export default BodyAnimate;
