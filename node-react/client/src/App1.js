import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Componente from './Componente';
import Card from './Card';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOn: true
    };
  }

  toggle = () => {
    this.setState({isOn: !this.state.isOn})
  }
  
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.oi }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  getHour(){
    var hora = (new Date()).toLocaleString().substr(11, 5);
    return hora + "";
  }

  getSaudacao(){
    var data = new Date();
   
    if( data.getHours() > 12 && data.getHours() < 18 )
      return 'Boa tarde';
    
    if( data.getHours() > 6 && data.getHours() < 12 )
      return 'Boa dia';
    
    if( data.getHours() < 6 && data.getHours() > 18 )
      return 'Boa noite';
    
    return 'nada';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {this.state.isOn ? 
        <img src={logo} className="App-logo" alt="logo" />
        : ""
        }
          
        <h1 className="App-title">Entao {this.getSaudacao()} são {this.getHour()}</h1>
         
        </header>

        <p className="App-intro">{}</p>

        <div class= "container ">
          <div class= "row ">
            <Card server = {this.state.response}
                  react  = {<Componente name="Vinicios" />} 
                  button = {<button onClick={this.toggle}> {this.state.isOn ? 'On' : 'Off'} </button> } >
            </Card>
            <Card server = {this.state.response}
                  react  = {<Componente name="Vinicios" />} 
                  button = {<button onClick={this.toggle}> {this.state.isOn ? 'On' : 'Off'} </button> } >
            </Card>
            <Card server = {this.state.response}
                  react  = {<Componente name="Vinicios" />} 
                  button = {<button onClick={this.toggle}> {this.state.isOn ? 'On' : 'Off'} </button> } >
            </Card>
          </div>
        </div>

        
       
      </div>
    );
  }
}

export default App1;

