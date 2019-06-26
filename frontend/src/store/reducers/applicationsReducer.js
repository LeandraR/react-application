const initialState = {
  applicationsLoading: true,
  error: false,
  applicationDetails: []
};

const applicationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_APPLICATIONS_CALL':
            return {
                ...state,
                applicationsLoading: true
            };
        case 'APPLICATIONS_CALL_SUCCESSFUL':
            return {
                ...state,
                applicationsLoading: false,
                applicationDetails: action.payload
            };
        case 'APPLICATIONS_CALL_FAILED':
            return {
                ...initialState,
                applicationsLoading: false,
                error: true
            };
        case 'APPLICATIONS_COMMENT_MADE':
            return {
                ...state,
                // applicationDetails: state.applicationDetails.map(
                //         item => item.id === action.payload.id ? action.payload : item
                //         //ids not the same, return original item
                // )
            };
        default:
            return state;
    }
};

export default applicationsReducer;

