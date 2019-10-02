import React from "react";
import  marked  from 'marked';

marked.setOptions({
  breaks: true 
})

export default class Previewer extends React.Component {
  render() {
    return (
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(this.props.markdown)
        }}
      />
    );
  }
}
