import React from 'react';
import PropTypes from 'prop-types';


const DonutChart = (props) => {
  const startingOffset = 0;
  let currentSum = 0;
  const getOffset = (value) => {
    let thisOffset;
    if (currentSum === 0) {
      thisOffset = startingOffset;
    } else {
      thisOffset = (100 - currentSum) + startingOffset;
    }
    currentSum += value;
    return thisOffset;
  };
  return (
    <figure>
      <svg width="50%" height="50%" viewBox="0 0 42 42">
        <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff" />
        <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3" />
        {
                    props.slices.map((slice, index) => {
                      const thisOffset = getOffset(slice);
                      return (
                        <circle
                          key={`${slice}-${index}`} className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                          strokeWidth="3"
                          style={{
                            stroke: props.colors[index],
                            strokeDasharray: `${slice} ${100 - slice}`,
                            strokeDashoffset: thisOffset,
                          }}
                        />
                      );
                    })
                }
        <g className="chart-text">
          <text x="50%" y="50%" className="chart-number">{props.risk}</text>
          <text x="50%" y="50%" className="chart-label">Risk</text>
        </g>
      </svg>
      <figcaption>
        <ul>
          {
                        props.labels.map((label, index) => (
                          <li key={label}><span className="shape-circle" style={{ backgroundColor: props.colors[index] }} /> {label} -- {props.slices[index]}</li>
                            ))
                    }
        </ul>
      </figcaption>
    </figure>
  );
};

DonutChart.PropTypes = {
  slices: PropTypes.array.isRequired,
  risk: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
};

export default DonutChart;
