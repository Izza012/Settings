import React from 'react';
import '../../Css/sidebar.css';
import { Jumbotron, Button } from 'reactstrap';
import SearchByUsername from '../Ajax/SearchByUsername';

const AccessForm = (props) => {
  return (
    <div>
    <header className="App-header"></header>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <SearchByUsername />
    </div>
  );
};

export default AccessForm;
