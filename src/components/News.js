import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2024-08-13&to=2024-08-13&sortBy=popularity&apiKey=0d320d23098e405e8be65074be77809b";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }

  render() {
    return (
      <div>
        <>
          <div className="container my-3">
            <h2 className="my-4">These are the top headlines</h2>
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title}
                      description={element.description}
                      imageUrl={
                        !element.urlToImage
                          ? "https://gizmodo.com/app/uploads/2024/08/google-wallet-1.jpg"
                          : element.urlToImage
                      }
                      newsurl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default News;
