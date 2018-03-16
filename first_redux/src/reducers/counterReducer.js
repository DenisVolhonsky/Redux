// функия берет предыдущ сост, текущее и возращает вообще новое состояние, отдает в стор
// это чистая функция которая что-то делает


export default function counterReducer(state=0, action) { // дефолтное значение 0
   switch(action.type) {
        case 'INCREMENT_COUNTER': 
            return state + action.payload;
        case 'DECREMENT_COUNTER': 
            return state - action.payload;
        default: 
            return state;       
   }
} 
