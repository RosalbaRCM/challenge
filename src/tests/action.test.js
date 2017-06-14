import * as actions from '../actions/actions'

describe('actions', () => {
  it('should create an action to updateRisk', () => {
    const risk = 2;
    const expectedAction = {
      type: 'UPDATE_RISK',
      risk
    }
  expect(actions.updateRisk(risk)).toEqual(expectedAction)
  })
})