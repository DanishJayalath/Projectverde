import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Canals from './components/canals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemModal from './components/itemModel';
import { Container } from 'reactstrap'
import { Provider } from 'react-redux';
import store from './store';



class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
          <ItemModal/>
          <Canals />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
