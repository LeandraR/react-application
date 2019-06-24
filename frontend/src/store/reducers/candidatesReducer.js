const initialState = {
    candidates: [],
    candidatesLoading: false,
    candidatesError: false
};

const candidatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_CANDIDATES_CALL':
            return {
                ...state,
                candidatesLoading: true
            };
        case 'CANDIDATES_CALL_SUCCESSFUL':
            return {
                ...state,
                candidatesLoading: false,
                candidates: action.payload
            };

        case 'CANDIDATES_CALL_FAILED':
            return {
                ...initialState,
                candidatesLoading: false,
                candidatesError: true
            };
        default:
            return state;
    }
};

export default candidatesReducer;

