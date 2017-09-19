import * as React from "react";

import { RestState } from "../states/States";

export default class Rest extends React.Component<undefined, RestState> {
  constructor() {
    super();
    this.state = {
      click: "",
      name: "testing",
    };
  }

  public handleOnChange(event: any): void {
    this.setState({
      click: event.target.value,
    });
  }

  public componentDidMount(): void {
    this.testRestCall();
  }

  public async testRestCall() {
    try {
      const response = await fetch("/api/");
      const data = await response.json();
      console.log(data);
      this.setState({
        name: data.species,
      });
    } catch {
      console.log("Something went wrong with the request");
    }
  }

  public render() {
    return(
      <div>
        <div className="row">
          <div className="col-12">
            <div className="center">
              <h2> This will do a fetch call on the backend </h2>
            </div>
          </div>
          <div className="col-12">
            <div className="center">
              <h3> Working with state: {this.state.name} </h3>
            </div>
          </div>
          <div className="col-12">
            <div className="center">
              <h3> Working with state: {this.state.click} </h3>
            </div>
          </div>
          <div className="col-12">
            <div className="center">
              <input onChange={(e) => this.handleOnChange(e)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
