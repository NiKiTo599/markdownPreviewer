import React from "react";
import "./App.css";
import Previewer from "./components/Previewer";
import Editor from "./components/Editor";
import ToolBar from "./components/ToolBar";
import ModalWindow from "./components/Modal";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends React.Component {
  state = {
    placeholder: placeholder,
    classes: ["fa fa-compress"],
    show: false
  };

  onChangePreviwer = newValue => {
    this.setState({ placeholder: newValue });
  };

  changeShowProperty = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-8 col-12">
              <div>
                <ToolBar
                  changeShowProperty={this.changeShowProperty}
                  name="Editor"
                  icon="fa fa-arrows-alt"
                />
                <Editor
                  onChangePreviwer={this.onChangePreviwer}
                  markdown={this.state.placeholder}
                  className=""
                />
                <ModalWindow show={this.state.show}>
                  <ToolBar
                    changeShowProperty={this.changeShowProperty}
                    name="Editor"
                    icon="fa fa-compress"
                  />
                  <Editor
                    onChangePreviwer={this.onChangePreviwer}
                    markdown={this.state.placeholder}
                    className="height"
                  />
                </ModalWindow>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-12 col-12">
              <ToolBar name="Previewer" icon="fa fa-arrows-alt" changeShowProperty={this.changeShowProperty}/>
              <Previewer markdown={this.state.placeholder} />
              <ModalWindow show={this.state.show}>
                <ToolBar
                  name="Previewer"
                  icon="fa fa-compress"
                  changeShowProperty={this.changeShowProperty}
                />
                <Previewer markdown={this.state.placeholder} />
              </ModalWindow>
            </div>
          </div>
        </div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </>
    );
  }
}

export default App;
