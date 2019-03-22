import React from 'react';
import { Route } from 'react-router-dom';
import Select from '../form/select/Select';
import './Filter.scss';

const Filter = props => (
  <section className="filter">
    <div className="filter__box">
      <div className="form__group">
        <Route
          path="/"
          exact
          render={() => (
            <Select
              name="Order By"
              onChange={props.onChange}
              options={['Cpf', 'Cnpj']}
              id="order"
            />
          )
          }
        />

        <Route
          path="/"
          exact
          render={() => (
            <Select
              name="Filter By"
              onChange={props.onChange}
              options={['Cpf', 'Cnpj']}
              id="filter"
            />
          )
          }
        />
      </div>
    </div>
  </section>

);

export default Filter;
