import React, { Component } from 'react'

export default class Mynav extends Component {
  shouldComponentUpdate(newProps, nesState){
    //console.log('shouldComponentUpdate 작동')
    // newProps.data, 새값
    // this.props.data, 기존값
    if(newProps.data === this.props.data){
      return false;
    } // else 생략했음.
    return true;
  }
  render() {
    //console.log('Mynav.js 실행됨');
    let lists = [];
    let data = this.props.data;
    
    let i = 0;

    while(i<data.length){
      lists.push(<li key={data[i].id}>
        <a href="" data-id={data[i].id} onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id); 
            }.bind(this)
          }
        >{data[i].title}</a></li>)
      i++;
    }

    return (
      <ul>
        {lists}  
      </ul>
    )
  }
}
