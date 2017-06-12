export const UPDATE_RISK = 'UPDATE_RISK';
export const UPDATE_SLICES = 'UPDATE_SLICES'

export const updateRisk = (risk) => {
    return {
        type: UPDATE_RISK,
        risk
    }
}

export const updateSlices = (slices) => {
    return {
        type: UPDATE_SLICES,
        slices
    }

}
