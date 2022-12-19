import React , {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mehdi from './mehdi.jpg';
import "./App.css";


class App extends Component {
  state = {
      fullName :"Mehdi Mellouli",
      bio : "I am a junior developper with a lot of ambitions.",
      profession : "Full-stack developper",
      show: true ,
      count: 0,
      
  };
   handleChange = () =>{
    this.setState({show:!this.state.show})
  }
  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);}
  
  render () {
    return (
      <div className="App" >
        <div className='container'>
                {this.state.show?
                <Card >
                  <Card.Img variant="top" src={mehdi} />
                  <Card.Body>
                    <Card.Title  style={this.state.style} >
                      {this.state.fullName}
                      <br></br>
                      {this.state.profession}
                    </Card.Title>
                    <Card.Text>
                      {this.state.bio}
                    </Card.Text>
                  </Card.Body>
                </Card> : null}
                <Button variant="primary" onClick={this.handleChange}>Submit</Button>
                <br/>
                <h1 style={{ color: `red` }} >Counter!  : {this.state.count}</h1>
        </div>
      </div>
    );
  }
}
export default App;
