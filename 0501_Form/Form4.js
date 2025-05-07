import React, {useState} from 'react';

function Form4(props) {
  // const [name, setName] = useState('');
  // const [id_txt, setId] = useState('');
  //상태값이 여러개일때 아래처럼 묶어서 사용가능

  const [formData, setFormData] = useState({
    name:'',
    id_txt:''
  });

  // //name 값을 저장하기위한 변수
  // const nameChange = (e) =>{
  //   setName(e.target.value);
  // }
  
  // //id_txt 값을 저장하기위한 변수
  // const idChange = (e) => {
  //   setId(e.target.value);
  // }
  const nameChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev)=> ({
      ...prev, //es6 스프레드 연산자
      [name]:value
    }))
  }

  //데이터 삭제를 위한 변수
  const onDelete = (e) =>{
    // setName('');
    // setId('');
    
    setFormData({
    name:'',
    id_txt:''
    })
  }

  return (
    <>
      <h4>4. 여러개의 input태그의 데이터 관리하기</h4>
      <ul>
        <li>e.target.value : 값에 접근하기</li>
        <li>e.target.value : name속성값에 접근하기</li>
        <li>state를 사용하여 입력값 관리</li>
        <li>onChange 이벤트를 통해 상태업데이트</li>
        <li>useState함수를 사용하여 상태 관리값을 한꺼번에 선언하고 관리할 수 있다.</li>
      </ul>

      <form>
        <p>출력내용(이름) : </p>
        <input type="text" id="name" name="name" value={formData.name} onChange={nameChange}/>

        <p>출력내용(아이디) : </p>
        <input type="text" id="id" name="id_txt" value={formData.id_txt} onChange={nameChange} />

        <p>입력하신 이름은 {formData.name}이고, 아이디는 {formData.id_txt} 입니다. </p>

        <input type="button" value="다시쓰기" onClick={onDelete} />
      </form>
    </>
  );
}

export default Form4;
