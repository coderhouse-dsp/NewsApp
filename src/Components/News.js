import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super()
    console.log('Hello I am a constructor from News component')
    this.state = {
      loading: false,
    }
  }
  async componentDidMount() {
    // console.log(cdm)
    let url =
      'https://newsapi.org/v2/everything?q=tesla&from=2022-03-17&sortBy=publishedAt&apiKey=52f2b93ef9764c26a72e94eab22c4790'
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.articles })
  }
  render() {
    console.log('I am render')
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
          {/* {this.state.articles[0].url} */}
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ''}
                  description={
                    element.description ? element.description.slice(0, 88) : ''
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News
