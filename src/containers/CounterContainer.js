import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component {
  handleIncrement_a = () => {
    this.props.increment_xx();
  }

  handleDoubleIncre = () => {
      this.props.doubleIncre();
  }
  handleDecrement_a = () => {
      this.props.decrement_xx();
    }
  handleDoubleDecre = () => {
    this.props.doubleDecre();
  }
  handleZero = () => {
    this.props.zero();
  }

  render() {
    const { handleIncrement_a, handleDecrement_a, handleDoubleIncre, handleDoubleDecre, handleZero } = this;
    const { number } = this.props;

    return (
      <Counter 
        onIncrement={handleIncrement_a}
        onDoubleIncrement={handleDoubleIncre}
        onDecrement={handleDecrement_a}
        onDoubleDecrement={handleDoubleDecre}
        onZero={handleZero}
        number={number}
      />
    );
  }
}

// props 값으로 넣어 줄 상태를 정의해줍니다.
const mapStateToProps = (state) => ({
  number: state.counter.number
});

// props 값으로 넣어 줄 액션 함수들을 정의해줍니다
const mapDispatchToProps = (dispatch) => ({
  increment_xx: () => dispatch(counterActions.increment_()),
  doubleIncre: () => dispatch(counterActions.double_incre()),
  decrement_xx: () => dispatch(counterActions.decrement_()),
  doubleDecre: () => dispatch(counterActions.double_decre()),
  zero: () => dispatch(counterActions.zero())
})

// 컴포넌트를 리덕스와 연동 할 떄에는 connect 를 사용합니다.
// connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를 반환합니다.
// 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);