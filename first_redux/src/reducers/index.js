// собираем reducer-ы в кучу (в 1)
import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

export default combineReducers({  // store будет объект какого вида
    counterValue: counterReducer   // за поле counterValue будет отвечать counterReducer

});  //   мы говорим какого вида будет наше хранилище объект