import React from "react";

export default class ToolBar extends React.Component {
  render() {
    return (
      <div className='toolbar-container'>
        <span>{this.props.name}</span>
        <i onClick={this.props.changeShowProperty} className={`${this.props.icon} icon_for_fullscreen`}></i>
      </div>
    );
  }
}
