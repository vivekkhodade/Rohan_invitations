import React, { Component } from 'react';
import './App.css';
// import Calender from './Calender'
import Splash from './Splash'
// import Calender from './Calender.js';
// import Typing from './Typing';
import Chat from './Chat';
import { Cube } from 'react-preloaders';
// import BackgroundSong from './audio/Winter.mp3';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      // preloader:true,
      loading:true
    }
    // this.playPromise=new Audio(require('./audio/Winter.mp3'));
  }
  myFunction() {
    let text = "Press a button!\nEither OK or Cancel.";
    if (window.confirm(text) == true) {
      text = "You pressed OK!";
      this.playPromise.play();
    } else {
      text = "You canceled!";
    }
    console.log("🚀 ~ file: App.js ~ line 27 ~ App ~ myFunction ~ text", text)
  }
  componentDidMount(){
    // this.playPromise=new Audio(require('./audio/Winter.mp3'));
    // this.playPromise.muted();
    // this.playPromise.play();
    // setTimeout(()=>{
    //   this.playPromise.pause();
    // },1000)
      this.timer= setTimeout(()=>{
        this.setState({
          loading:false
        },
        // ()=>this.myFunction()
        );
      },7000)
  }
  render() {
    return (
      <React.Fragment>
      <Cube
          color={'#FFD700'} //Default #2D2D2D
          bgColor={'#fff'} //Default #F7F7F7
          time={2400} //Default #1300
      />
          <div className="App">
          {
            this.state.loading ? 
          <div 
              style={{background:'white'}}
          >
            <Splash/>

          </div>
          :
          <div className="App">
            {/* <BackgroundSong/> */}
            <Chat />
          </div>
          
          }
          </div>
      </React.Fragment>
    );
  }
}

export default App;
