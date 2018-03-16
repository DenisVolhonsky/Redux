import React, { Component } from 'react';
import {connect} from 'react-redux'; // привязывает компонент Counter к store

const Counter = ({value, incremetCounter, decrementCounter}) => {

    // incrementCounter = () => {
    //     this.setState(prevState => ({
    //         value: prevState.value + 1
    //     }));
    // }

    // decrementCounter = () => {
    //     this.setState(prevState => ({
    //         value: prevState.value - 1
    //     }));
    // }
        console.log(this.props);
        return (
            <div>
                <h2>{value}</h2>
                <button onClick={incremetCounter}>+</button>
                <button onClick={decrementCounter}>-</button>
            </div>
        )

}

const mapStateToProps =  state => ({  // связывает state с props этого компонента
    value: state.counterValue

});          


const mapDispatchToProps = dispatch => ({  // отправка (dispatch) action в prop-ы
    incremetCounter() {
        // console.log('incrememt!');
        dispatch({
            type: 'INCREMENT_COUNTER',
            payload: 10
        });
    },
    decrementCounter() {    // создаем имя метода и внутри него выстрелить action
        dispatch({
            type: 'DECREMENT_COUNTER',
            payload: 15
        });
    }
});    

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // connect оборачивает Counter и передает в пропы этого компонента состояние


