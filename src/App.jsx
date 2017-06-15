import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions/actions';
import DonutChart from './components/DonutChart';


export const App = props => {
    const labels = ['Stocks', 'Bonds', 'ETFs', 'Cash', 'Commodities', 'Fixed Income'];
    const colors=['#FF5722','#b1c94e','#377bbc','#ce4b99', '#6600CC'  ,'#ffa500'];
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Invesment portfolio</h3>
          </div>
          <div className="panel-body">
            <div>
              {!props.slices ?<p className="loading"> Loading...</p> : <DonutChart slices={props.slices} colors={colors} risk={props.risk} labels={labels} />}
            </div>
            <div>
              <p>Select the risk </p>
              <input
                type="number"
                defaultValue={props.risk}
                min="1"
                max="10"
                onChange={(e) => {
                  e.preventDefault();
                  props.onChange(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

App.PropTypes = {
  risk: PropTypes.string.isRequired,
  slices: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
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