import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from './components/Loading';
import * as actions from './actions/actions';
import DonutChart from './components/DonutChart';


class App extends Component {
  render() {
    const labels = ['Stocks', 'Bonds', 'ETFs', 'Cash', 'Commodities', 'Fixed Income'];
    const colors = ['#900', '#090', '#009', '#ff0', '#ffa500', '#0000ff'];
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Invesment portfolio</h3>
          </div>
          <div className="panel-body">
            <div>
              {!this.props.slices ? <Loading /> : <DonutChart slices={this.props.slices} colors={colors} risk={this.props.risk} labels={labels} />}
            </div>
            <div>
              <label>Select the risk </label>
              <input
                type="number" defaultValue="1" min="1" max="10" onChange={(e) => {
                  e.preventDefault();
                  this.props.onChange(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.PropTypes = {
  risk: PropTypes.string.isRequired,
  slices: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  slices: state.slices,
  risk: state.risk,
});
const mapDispatchToProps = dispatch => ({
  onChange: (risk) => {
    dispatch(actions.updateRisk(risk));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
