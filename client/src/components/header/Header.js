import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="dataset">
        
        <div className="dataset__form-box">
          <h1 className="heading-primary">
            <span className="heading-primary__main">a</span>
            <span className="heading-primary_sub">b</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">Cadastro de CPF/CNPJ</a>
        </div>

      </header>
    );
  }
}

export default Header;
