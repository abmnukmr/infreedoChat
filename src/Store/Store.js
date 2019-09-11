import reducer  from '../Reducers/Reducer'
import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';

const Store = createStore(reducer,
    compose(applyMiddleware(thunk))
);

export default Store