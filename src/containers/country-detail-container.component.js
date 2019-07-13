import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions-countries';
import CountryDetails from '../presentational/country-details.component';
import CountryFlagList from '../presentational/flag-list.component';

class CountryDetailsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCountry(this.props.params.id));
    }

    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <CountryFlagList countries={this.props.countries} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        selectedCountry: store.countriesReducer.selectedCountry
    };
};

export default connect(mapStateToProps)(CountryDetailsContainer);