import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
          <div className='col-md-3'>
            <NewsItem
              title='myTitle'
              description='mydesc'
              imageUrl='https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AF22/production/_123143844_langer1.jpg'
              newsUrl='TODO'
            />
          </div>
          <div className='col-md-3'>
            <NewsItem title='myTitle' description='mydesc' />
          </div>
          <div className='col-md-3'>
            <NewsItem title='myTitle' description='mydesc' />
          </div>
        </div>
      </div>
    )
  }
}

export default News
