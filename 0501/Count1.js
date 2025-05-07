import React, { Component } from 'react';

class Count1 extends Component {
  //초기 변수값 지정
  state={n:1} //0이 초기값

  //함수작성하는곳
  onPlus=()=>{ //1씩증가
    //console.log('숫자증가');
    this.setState({
      n:this.state.n+1
    })
  }
  onMinus=()=>{ //1씩감소
    //console.log('숫자감소');
    if(this.state.n==1){
      this.setState({
        n:1
      })
    }else{
      this.setState({
        n:this.state.n-1
      })
    }
  }
    //만약에 state값이 1일 경우 '클릭해도' 1로 설정 javascript문법
    //   if(n==1){
    //     n=1;
    //   }else{
    //     n++
    //   }
    // }
  render() {
    return (
      <>
        <p>+,- 버튼을 클릭하면 숫자증가, 숫자 감소하는 state값을 작성하기</p>

        <div>숫자 출력 : <span className="num">{this.state.n}</span></div>
        <input type="button" value="+" onClick={this.onPlus} className="btn" />
        <input type="button" value="-" onClick={this.onMinus} className="btn" />

        <p>자신 콤포넌트에서 유동적으로 변할 값은 state로 선언</p>
        <p>setState()함수는 state의 값을 변경하고자 할 때 사용하는 함수</p>
        <p>jsx문법에서는 이벤트를 사용하고자 할 때 카멜표시법을 사용한다.</p>
        <p>이벤트 값에는 함수객체를 넣어서 호출</p>

      </>
    );
  }
}

export default Count1;