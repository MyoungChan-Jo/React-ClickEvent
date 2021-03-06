import React, { Component } from 'react'

export default class Controls extends Component {
  render() {
    // console.log('controls.js실행됨');
    return (
        <ul>
            <li><a 
                    href="/create" 
                    className="btn"
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage('create');
                    }.bind(this)
                    }
                >create</a></li>
            <li><a 
                    href="/update"
                    className="btn"
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage('update');
                    }.bind(this)
                    }
                    >update</a></li>
            <li><input 
                    type="button" 
                    value="delete"
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage('delete');
                    }.bind(this)
                    }
                    ></input></li>
      </ul>
    )
  }
}
