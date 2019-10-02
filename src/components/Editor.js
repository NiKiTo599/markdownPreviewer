import React from 'react';

export default class Editor extends React.Component {

  changeValue = (e) => {
    this.props.onChangePreviwer(e.target.value);
  }

  render() {
    console.log(this.props)
    return (
      <textarea id='editor' className={this.props.className} onChange={this.changeValue} value={this.props.markdown}/>
    );
  }
}