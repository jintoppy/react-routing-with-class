import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class About extends Component {
  state = {
      anotherEnabled: false
  }
  onBtnClick = () => {
    this.props.history.goBack();
  }
  gotoAnotherPage = () => {
    this.setState({
        anotherEnabled: true
    });
  };
  render(){
    const paramValue = this.props.match.params.name;
    const queryValue = new URLSearchParams(this.props.location.search).get('valid');
    console.log(this.props.match);
    return (
        <div>
            About Page
            Param Value: {paramValue}
            Query Value: {queryValue}
            <button onClick={this.onBtnClick}>Go Back</button>            
            <button onClick={this.gotoAnotherPage}>Go to Another Page</button>
            {this.state.anotherEnabled ? <Redirect to="/another" /> : null }
        </div>
    )
  }
}

export default About;
