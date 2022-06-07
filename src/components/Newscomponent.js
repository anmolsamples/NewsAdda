import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'




export class Newscomponent extends Component {



  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }

  }

  async loadData(url) {
    this.setState({ loading: true });
    let response = await fetch(url);
    response = await response.json();
    this.setState({ articles: response.articles, totalResults: response.totalResults, loading: false });
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e12dcb90f4c84b39a513952224cdb498&page=1&pageSize=${this.props.pageSize}`
    
    let data=await fetch(url);
    let parseddata= await data.json();
    this.setState({
      articles:parseddata.articles
    })

  }
  handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e12dcb90f4c84b39a513952224cdb498&page=${this.state.page - 1}&pageSize=${this.props.pageSize}` 
    let data = await fetch(url);
    let parseddata=await data.json();
    this.setState({
      page:this.state.page-1,
      articles:parseddata.articles
    })
  }
  handlenext =  async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e12dcb90f4c84b39a513952224cdb498&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      this.loadData(url);
    }
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e12dcb90f4c84b39a513952224cdb498&page=${this.state.page - 1}&pageSize=${this.props.pageSize}` 
    let data = await fetch(url);
    let parseddata=await data.json();
    this.setState({
      page:this.state.page+1,
      articles:parseddata.articles
    })

  }



  render() {
    return (
      <div className="container my-3" >
        <h1 className='text-center'>NewsAdda - Top headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title} desc={element.description} imageurl={element.urlToImage} newsurl={element.url} />
            </div>
          })}


        </div>

        <div className="container d-flex justify-content-between my-4">
          <button disabled={this.state.page <= 1?true : false} type="button" className="btn btn-dark" onClick={this.handleprev}>&larr; previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenext}>next&rarr;</button>
        </div>
      </div>


    )
  }

}

export default Newscomponent
