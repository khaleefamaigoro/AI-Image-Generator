import React,{Component} from 'react';
import ImageLink from './components/ImageLink/imageLink';
import InputText from './components/InputText/inputText';
import Spinner from './components/Spinner/Spinner';
import Luca from './luca.jpg';
import AI from './AI.png';

class App extends Component{
  constructor(){
    super()
    this.state ={
      input : '',
      imgUrl : Luca,
      loading: false,
    }
  }

  onInputChange = (e) =>{
    this.setState({input : e.target.value});
  }

  validateInput = () => {
    const input = this.state.input;
    const valid = !input;
    return valid;
  }

  onButtonSubmit = async () => {
    const value = this.state.input;
    const response = await fetch(
      'https://api.openai.com/v1/images/generations',
      {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          Authorization: "Bearer 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",
          "User-Agent": "Chrome",
        },
        body:JSON.stringify({
          prompt: value,
          n: 1,
          size: "1024x1024",
        }),
      }
    );

    let data = await response.json();
    const aivalue = data.data[0].url;

    this.setState({
      loading: true,
    }, ()=> {
      setTimeout(() => {
        this.setState({
          loading: false,
          imgUrl : aivalue,
        })
      }, 1000);
    }); 
  }

  render(){
    return (
        <div className="App">
          <div style={{textAlign : 'center'}}>
            <h1 className='header'>
              <img src={AI} alt="user_photo" style={{marginRight:8}} width={55}/>
              AI Image Generator
            </h1> 
            {/* Picture Image */}
            {this.state.loading ? <Spinner /> :
              <ImageLink imgUrl={this.state.imgUrl}/>
            }
            
            {/* Input */}
              <InputText 
                validate={this.validateInput()}
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
                />
          </div>
        </div>
    );
  }
}

export default App;
