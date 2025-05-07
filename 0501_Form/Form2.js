import React, {useState} from 'react';


function Form2(props) {
  //변수선언
  let header = '';

  // 처음 초기값은 없다(초기값이있다면 괄호안에작성)
  const [name, setName] = useState('');
  const [pw_name, setPw] = useState('');

  //nameChange함수 작성
  const nameChange = (e) => {
    setName(e.target.value);
  };

  const pwChange = (e) => {
    setPw(e.target.value);
  }

  //조건식을 사용하여 값이 있으면 출력, 그렇지 않으면 공백
  if(name){ //조건식이 참이면
    header=<p>사용자가 입력한 이름은 {name}이고, 패스워드는 {pw_name} 입니다. </p>
  }else{  //거짓일 경우
    header='';
  }
  const onDateReset=(e)=>{
    setName('');
    setPw('');
  }

  return (
    <>
      <h4>2. if문으로 조건식 작성하기</h4>
      {header}

      <form>
        <label for="id_name">ID : </label>
        <input
        type='text'
        id='id_name' 
        name='name'
        value={name}
        onChange={nameChange}
        />

        <label for="pw_name">PW : </label>
        <input
        type='text'
        id='pw_name'
        name='pw_name'
        value={pw_name}
        onChange={pwChange}
        />

        <p>
          <button type="button" onClick={onDateReset}>데이터 입력 초기화</button>
        </p>
      </form>

    </>
  );
}

export default Form2; 