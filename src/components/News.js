import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  render() {
    return (
      <div>
        <>
          <div className="container my-3">
            <h2 className="my-4">These are the top headlines</h2>
            <div className="row">
              <div className="col-md-4">
                <Newsitem title="My Title" description="My Description" />
              </div>
              <div className="col-md-4">
                <Newsitem title="My Title" description="My Description" />
              </div>
              <div className="col-md-4">
                <Newsitem title="My Title" description="My Description" />
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default News;
