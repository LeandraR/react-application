const initialState = {
    questions: [],
    questionsError: false
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_QUESTIONS_CALL':
            return {
                ...state
            };
        case 'QUESTIONS_CALL_SUCCESSFUL':
            return {
                ...state,
                questions: action.payload
            };

        case 'QUESTIONS_CALL_FAILED':
            return {
                ...initialState,
                questionsError: true
            };
        default:
            return state;
    }
};

export default questionsReducer;

