import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=apple&from=2024-08-13&to=2024-08-13&sortBy=popularity&apiKey=970587856d7f49dcb0373f5f097f70c9&pagesize=${this.props.pageSize}&page=1`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  movePrevious = async () => {
    let url = `https://newsapi.org/v2/everything?q=apple&from=2024-08-13&to=2024-08-13&sortBy=popularity&apiKey=970587856d7f49dcb0373f5f097f70c9&pagesize=${
      this.props.pageSize
    }&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    console.log("previous");
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
  };

  moveNext = async () => {
    console.log(this.state.page);
    if (
      !(
        Math.ceil(this.state.totalResults / 12) < this.state.page + 1 ||
        12 * this.state.page > 80
      )
    ) {
      let url = `https://newsapi.org/v2/everything?q=apple&from=2024-08-13&to=2024-08-13&sortBy=popularity&apiKey=970587856d7f49dcb0373f5f097f70c9&pagesize=${
        this.props.pageSize
      }&page=${this.state.page + 1}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="my-4 text-center">NewsMoneky - Top Headlines Today</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
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
        <div className="container d-flex justify-content-between my-6">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark my-5"
            onClick={this.movePrevious}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalResults / 12) < this.state.page + 1 ||
              12 * this.state.page > 80
            }
            type="button"
            className="btn btn-dark my-5"
            onClick={this.moveNext}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
