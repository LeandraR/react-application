import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import applicationsReducer from './reducers/applicationsReducer';
import candidatesReducer from './reducers/candidatesReducer';
import questionsReducer from './reducers/questionsReducer';
import thunk from 'redux-thunk';

//composeEnhancers enables redux devtools in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//combining multiple reducers into one:
const rootReducer = combineReducers({
    candidates: candidatesReducer,
    applications: applicationsReducer,
    questions: questionsReducer
})

//composeEnhancers applies redux devtools as middleware along with thunk
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;