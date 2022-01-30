import { createStore, applyMiddleware, compose } from 'redux'
import  rootReducer  from './reducers/rootReducer'
import thunk from 'redux-thunk';


export default function configureStore(preloadedState) {
     const middlwares = [thunk]
     const middlewareEnhancer = applyMiddleware(...middlwares)
     const enhancers  = [middlewareEnhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]
     const composedEnhancers = compose(...enhancers)

     const store = createStore(rootReducer, preloadedState, composedEnhancers)

     return store
}

