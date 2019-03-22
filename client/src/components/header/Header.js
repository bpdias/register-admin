import React from 'react';
import { Route } from 'react-router-dom';
import DatasetForm from '../datasetForm';
import './Header.scss';

const Header = () => (
  <section className="header">
    <div className="header__form-box">
      <h1 className="heading-primary">
        <span className="heading-primary__main">Neoway</span>
        <span className="heading-primary__sub">Save your info to work with us</span>
      </h1>
      <Route path="/" exact component={DatasetForm} />
      <Route path="/record/:id" exact component={DatasetForm} />
    </div>
  </section>
);

export default Header;
