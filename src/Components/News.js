import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
  constructor() {
    super()
    console.log('Hello I am a constructor from News component')
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }
  async componentDidMount() {
    // console.log(cdm)
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=52f2b93ef9764c26a72e94eab22c4790&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
  }
  handleNextClick = async () => {
    console.log('Next')
    if (
      !this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=52f2b93ef9764c26a72e94eab22c4790&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`
      this.setState({ loading: true })
      let data = await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData)
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      })
    }
  }
  handlePrevClick = async () => {
    console.log('Next')
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=52f2b93ef9764c26a72e94eab22c4790&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    })
  }
  render() {
    console.log('I am render')
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {/* {this.state.articles[0].url} */}
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className='col-md-4' key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ''
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              )
            })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button
            disabled={this.state.page <= 1}
            type='button'
            class='btn btn-dark'
            onClick={this.handlePrevClick}
          >
            {' '}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type='button'
            class='btn btn-dark'
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    )
  }
}

export default News
