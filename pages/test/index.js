import React, { Component } from "react";
import FroalaEditorComponent from "../../components/FroalaEditor";
import Theme from "../../components/theme";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Theme {...this.props}>
        <div className="box-padding">
          <FroalaEditorComponent
            data={(data) => {
              console.log(data.html.get());
            }}
          ></FroalaEditorComponent>
        </div>
      </Theme>
    );
  }
}
