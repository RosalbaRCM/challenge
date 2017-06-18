import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions/actions';
import DonutChart from './components/DonutChart';


export const App = props => {
  return (
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title">Investment portfolio</h2>
        </div>
        <div className="panel-body">
          <DonutChart slices={props.slices} risk={props.risk} />
          <div className="group">
            <label>Select the risk level</label>
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
  risk: state.risk,
  slices: state.slices,
});

export default connect(mapStateToProps, { onChange: actions.updateRisk })(App);