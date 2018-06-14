import React from "react";
import { Button } from 'react-materialize';
import "../styles/BackButton.css";

class BackButton extends React.Component {
  static contextTypes = {
    router: () => true,
  }

  render() {
    return (
      <Button
        waves='purple'
        className="button icon-left BackButton"
        onClick={this.context.router.history.goBack}>
          Back
      </Button>
    )
  }
}

export default BackButton;