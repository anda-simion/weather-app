import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        rootReducer(history),
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            )
        )
    );

    return store;
};

export default configureStore;