// 컴포넌트의 첫글자는 무.조.건 대문자여야 한다.
import React, { Component } from 'react';
import './App.css'; //모든 js 내용들을 컨트롤하는 css
import Myheader from './Myheader';
import Mynav from './Mynav';
import Myarticle from './Myarticle';
import Controls from './Controls';
import CreateArticle from './CreateArticle';
import ReadArticle from './ReadArticle'; 

export default class App extends Component {
  constructor(props) {
    super(props);
    this.current_id = 3;
    this.state = {
      mode:'welcome',
      selected_id:2,
      welcome: {title:'Welcome', desc:'Welcome to React'},
      subject: {title:'React', desc:'Single Page Application'},
      menus: [
        {id:1, title:'HTML', desc:'Hypertext Markup Languag'},
        {id:2, title:'CSS', desc:'CSS is Design'},
        {id:3, title:'JAVASCRIPT', desc:'JAVASCRIPT is for interactive'},
      ]
    }
  }

  render() {
    //console.log('App.js 실행됨');
    let _title, _desc, _article = null; //let _title, _desc; 와 같다.
    if(this.state.mode === 'welcome'){ //welcome 일때
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article=<Myarticle title={_title} desc={_desc}/>
    }else if(this.state.mode === 'read'){ //read 일때
      /*반복문을 이용할것이다.*/
      let i = 0;
      while(i < this.state.menus.length){
        let data = this.state.menus[i];
        if(data.id === this.state.selected_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article=<Myarticle title={_title} desc={_desc}/>
      // _title=this.state.menus[0].title;
      // _desc=this.state.menus[0].desc;
    }else if(this.state.mode === 'create'){
      _article=<CreateArticle
          onSubmit={function(_title1, _desc1){
            //console.log(_title, _desc);
            this.current_id = this.current_id + 1;
            // this.state.menus.push(
            //   {id:this.current_id, title:_title1, desc:_desc1}
            // );
            let _menus = this.state.menus.concat(
              {id:this.current_id, title:_title1, desc:_desc1}
            )

            this.setState({
              // menus:this.state.menus
                menus:_menus
            })
            console.log(this.state.menus)
          }.bind(this)}/>
    }else if(this.state.mode ==='update'){
      _article=<ReadArticle/>
    }

    return (
      <div className="App">
        <Myheader 
            title={this.state.subject.title}
            desc={this.state.subject.desc}
            onChangePage={
              function(e){
                this.setState({
                  mode: 'welcome'
                });
              }.bind(this)
            }
        />
        <Mynav
          data={this.state.menus}
          onChangePage={
            function(id){
              //debugger;
              this.setState({
                mode: 'read',
                selected_id: Number(id),
              });
            }.bind(this)
          }
        />
        {/* <Myarticle title={_title} desc={_desc}/> */}
        {_article}
        <Controls
          onChangePage={
            function(_mode){
              this.setState({
                mode: _mode
              });
            }.bind(this)
          }
        />
      </div>
    )
  }
}