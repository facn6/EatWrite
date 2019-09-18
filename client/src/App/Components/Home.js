import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button/Button';



class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
      <Button className="brown"> SUBMIT </Button>
      <Button className="green"> SUBMIT MORE! </Button>

    </div>
    );
  }
}
export default Home;
