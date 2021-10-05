import './App.css';
import React, { Component } from "react";
import { NavLink, Switch, Route } from 'react-router-dom';
import UploadPage from './UploadPage'
import CombinationPage from './CombinationPage';
import SearchPage from './SearchPage'
import Demo from './Demo'
import {UserContext, servers} from './UserContext';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);   

    this.toggleServer = () => {
      const {server, servername} = this.state;

      var newServer;
      if(server == servers.local)
        newServer = servers.test;
      else if(server == servers.test)
        newServer = servers.product;
      else if(server == servers.product)
        newServer = servers.local;

      this.setState(state => ({
        server: newServer,
        ServerUrl: newServer.url,
        servername: 'unknown'
      })); 
    };

    this.changeServername = () => { 
      axios({
        url: this.state.ServerUrl + 'api/Information/0',
        method: 'GET', 
      }).then((response) => {
        this.setState(state => ({         
          servername: response.data.Name
        })); 
           
      });      
    };   

    this.state = {
      server: servers.local,
      toggleServer: this.toggleServer, 
      ServerUrl: servers.local.url,
      servername: 'unknown', 
      changeServername: this.changeServername, 
    };
  }

  UpdateServer = (server) => {
    const {ServerUrl} = this.state;

    if(ServerUrl != server.url)
      this.setState({ServerUrl: server.url})
  }

  render() { 
    const { ServerUrl } = this.state;
    return (
      <div className='app'>
        <h1>LayoutDesiger API(s)</h1>
           
          <TextField label="Server" variant="outlined" value={ServerUrl} style = {{width: 600}}/>

        <UserContext.Provider value={this.state}>
          <Navigation />
        </UserContext.Provider>  
        <UserContext.Provider value={this.state}>
          <Main />
        </UserContext.Provider>
      </div>       
    );
  }
}

const Navigation = () => (
   
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/upload'>Upload</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/search'>Search</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/combination'>Combination</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/settings'>Settings</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/demo'>Demo</NavLink></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className='home'>
    <h1>Welcome to LayoutDesginer React App website</h1>
    <p> Enjoy this site.</p>

    <hr></hr>
    <p> 설명 : </p>
    <p>사용자가 선택한 템플릿 요소(배경, 전경, 레이아웃)들을 조합해 프리젠테이션 템플릿을 생성하고 이를 사용자에게 다운로드 할 수 있도록 하는 서비스</p>

    <hr></hr>
    <p> 요구사항 </p>
    <p>1. 사용자 파일 업로드 가능(디자인 서식 추가)</p>
    <p>2. 템플릿 조합 기능 제공</p>
    <p>3. 생성된 템플릿 다운로드 제공</p>
    <p>4. 이미지 기반 템플릿 서칭 기능 제공</p>
  </div>
);

const Upload = () => (
  <div className='upload'>
    <UploadPage />
  </div>
);

const Search = () => (
  <div className='search'>
    <SearchPage />
  </div>
);

const Combination = () => (
  <div className='combination'>
    <CombinationPage />
  </div>
);

const About = () => (
  <div className='about'>
    <h1>About Me</h1>
    <p>AWS ABP - LayoutDesigner API Test</p>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hskim@hancom.com</strong></p>
  </div>
);

class Settings extends React.Component { 
  render() {
    return (
      <div>       

      <UserContext.Consumer>
        {({server, toggleServer, servername, changeServername}) => (         
          <div>
            <div>
            <button onClick={toggleServer}> Change Server </button>
            <p>{`Current Server(${server.name}): ${server.url}`}</p>  
            </div>

            <div>
              <button onClick={changeServername}> Get Server Name </button>
              <p>{`Current Server Name(${servername})`}</p>  
            </div>
          </div>
        )}
      </UserContext.Consumer>      
      </div> 
    );
  }
}


const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/upload' component={Upload}></Route>
    <Route exact path='/search' component={Search}></Route> 
    <Route exact path='/combination' component={Combination}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/settings' component={Settings}></Route>
    <Route exact path='/demo' component={Demo}></Route>
  </Switch>
);

export default App;