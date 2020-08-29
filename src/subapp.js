import React from 'react';


class subApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        question: true,
        polls: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleNewClick = this.handleNewClick.bind(this);
    }
  
    handleChange(event) {
      let name = event.target.name;
      let value = event.target.value;
      this.setState({
        [name]: value
      })
    }
  
    handleClick(event) {
      if (event.target.id == "btn3") {
        this.setState((state)=>({question: !state.question}))
      }else {
        this.setState((state)=>({question: !state.question, polls: [...state.polls, state.query]}))
      }    
    }

    handleClickaga
  
    handleNewClick(event) {
      let listItems = document.querySelectorAll('ol > li');
      let len = listItems.length;
      let randomIndex = Math.floor((Math.random() * listItems.length));
      let randomElement = listItems[randomIndex];
      while (len--) {
        listItems[len].setAttribute("style", "color:black");
       }
      randomElement.style.color = "red";
      randomElement.style.fontWeight = 900;   
    }
  
  
    render() {
      if (this.state.question) {
        return (
          <div className="container">
            <form>
              <h1 className="headers">Question</h1>
              <input type="text" className="form-control w-100" 
                                 placeholder="Q: Enter your question here" 
                                 name="query"
                                 onChange={this.handleChange}></input>
              <h1 className="headers">Options</h1>
              <input type="text" className="form-control w-100" 
                                 placeholder="A:"
                                 name="responseA"
                                 onChange={this.handleChange}></input>
              <input type="text" className="form-control w-100" 
                                 placeholder="B:"
                                 name="responseB"
                                 onChange={this.handleChange}></input>
              <input type="text" className="form-control w-100" 
                                 placeholder="C:"
                                 name="responseC"
                                 onChange={this.handleChange}></input>
              <input type="text" className="form-control w-100" 
                                 placeholder="D:"
                                 name="responseD"
                                 onChange={this.handleChange}></input>
              <button className="btn btn-success mybutton btn-lg" onClick={this.handleClick}>ANSWER!</button>
            </form>
          </div>
        )
      }
      return (
        <div className="container">
          <h1>{this.state.query || "Some Random Question?"}</h1>
          <ol>
            <li>{this.state.responseA || "Yes"}</li>
            <li style={{color:'red', fontWeight: 900}}>{this.state.responseB || "No"}</li>
            <li>{this.state.responseC || "Maybe"}</li>
            <li>{this.state.responseD || "Mayhaps"}</li>
          </ol>
          <p><button className="btn btn-success btn-lg"
                     onClick={this.handleNewClick}>Ask Again?</button></p>
          <h1><button className="btn btn-outline-secondary btn-lg" id="btn3"
                     onClick={this.handleClick}>Ask Another Question?</button></h1>
          <div className="poppolls">
            <h1>Popularity Polls</h1>
            {
              <div>
                {this.state.polls.map((question)=><p className="pollquestions">{question}</p>)}
              </div>
            }
          </div>
        </div>
      )
    }
  }

  export default subApp;