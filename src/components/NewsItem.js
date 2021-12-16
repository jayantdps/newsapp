// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
       let {title, description } = this.props;

        return (
            <div>
            <div className="card" style={{width: "18rem"}}>
  <img src="https://cdn.24.co.za/files/Cms/General/d/372/8899610f02b04c5aaf63f930d759f9ca.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title}</h5>
    <p className="card-text">{description}.</p>
    <a href="/newsitem" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItem
