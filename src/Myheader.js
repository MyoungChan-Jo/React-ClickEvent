import React, { Component } from 'react'

export default class Myheader extends Component {
  render() {
    //console.log('Myheader.js 실행됨');
    return (
        <header>
          <h1 className="logo">
            <a href="" onClick={function(e){
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)
            }             
            >{this.props.title}</a>
          </h1>
          <p>{this.props.desc}</p>
        </header>
      )
  }
}
