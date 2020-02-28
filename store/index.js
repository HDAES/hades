import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducer/index.js'

export default function initiallizeStore (state){
	const store = createStore(
	  reducer,
	  Object.assign({}, state),
	  composeWithDevTools(applyMiddleware(thunk))
    )
    return store
}
