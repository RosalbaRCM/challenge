import reducer from '../reducers/rootReducer'
import * as actions from '../actions/actions'
import slices from '../data/slices';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        risk: "1",
        slices: slices[1],
      }
    )
  })

it('should handle UPDATE_RISK', () => {
    expect(
      reducer({}, {
        type: actions.UPDATE_RISK,
        risk:"2"
      })
    ).toEqual(
      {
        risk: "2",
        slices:slices[2]
      })

    expect(
      reducer(
          {
           risk: "2",
           slices:slices[2]
          },
        {
          type: actions.UPDATE_RISK,
          risk:"3"
        }
      )
    ).toEqual(
      {
        risk: "3",
        slices:slices[3]
      })
    })
})