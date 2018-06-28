import ListErrors from './ListErrors';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';


@inject('countryStore')
@observer
class CountryForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      title: '',
      image: ''
    };

    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    };

    this.submitForm = ev => {
      ev.preventDefault();

      const country = Object.assign({}, this.state);
      if (!country.title) {
        delete country.title;
      }

      this.props.onSubmitForm(country);
    };
  }

  componentWillMount() {
    if (this.props.countryStore.currentCountry) {
      Object.assign(this.state, {
        image: this.props.countryStore.currentCountry.image || '',
        title: this.props.countryStore.currentCountry.title,
        id: this.props.countryStore.currentCountry.id
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <fieldset>

          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="URL of country flag"
              value={this.state.image}
              onChange={this.updateState('image')}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.updateState('title')}
            />
          </fieldset>

          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={this.props.countryStore.updatingCountry}
          >
            Update Country
          </button>

        </fieldset>
      </form>
    );
  }
}

@inject('countryStore')
@withRouter
@observer
class CountryList extends React.Component {

  render() {
    return (
      <select id={"country"}>
              <ListErrors errors={this.props.countryStore.updatingCountryErrors} />

              <CountryForm
                currentCountry={this.props.countryStore.currentCountry}
                onSubmitForm={country => this.props.countryStore.updateCountry(country)} />
      </select>
    );
  }
}


let CountriesField = createClass({
    displayName: 'StatesField',
    propTypes: {
        label: PropTypes.string,
        searchable: PropTypes.bool,
    },
    getDefaultProps () {
        return {
            label: 'States:',
            searchable: true,
        };
    },
    getInitialCountry () {
        return {
            disabled: false,
            searchable: this.props.searchable,
            selectValue: 'chelyabinsk',
            clearable: true,
            rtl: false,
        };
    },
    clearValue (e) {
        this.select.setInputValue('');
    },
    switchCountry (e) {
        let newCountry = e.target.value;
        this.setState({
            country: newCountry,
            selectValue: null,
        });
    },
    updateValue (newValue) {
        this.setState({
            selectValue: newValue,
        });
    },
    render () {
        // TODO здесь подставляем данные дернутые через api
        //let options = STATES[this.country];
        let options = '';
        return (
            <div className="section">
                <h3 className="section-heading">{this.props.label}<a href="#">(Countries)</a></h3>
                <Select
                    id="country-select"
                    ref={(ref) => { this.select = ref; }}
                    onBlurResetsInput={false}
                    onSelectResetsInput={false}
                    autoFocus
                    options={options}
                    simpleValue
                    clearable={true}
                    name="selected-country"
                    disabled={false}
                    value={this.state.selectValue}
                    onChange={this.updateValue}
                    rtl={this.state.rtl}
                    searchable={true}
                />
            </div>
        );
    }
});

//module.exports = CountriesField;

export default CountryList;
