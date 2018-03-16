import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers'; // результат вызова combineReducers запишет в перемекнную reducers

const store = createStore(reducers, composeWithDevTools());  //composeWithDevTools добавление в браузер возможность использ devtools
//console.log(store.getState());  // объект состояний

export default store;