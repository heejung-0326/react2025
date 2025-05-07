import './App.css';
import Class0 from './0429/Class0'; //문서 연결
import Class1 from './0429/Class1'; //문서 연결
import Class2 from './0429/Class2'; //문서 연결
import Class3 from './0430/Class3'; //문서 연결
import Class4 from './0430/Class4'; //문서 연결
import Class5 from './0501/Class5'; //props
import Class6 from './0501/Class6'; //State
import Event from './0501/Event'; //State
import Form from './0501_Form/Form';
import Array1 from './0507_Array/Array1'; //배열데이터
import Yellow from './0507_Array/Yellow'; //노랑풍선 상품목록 출력



function App() {
  return (
    <>
    <header className="App">
      <h1>리액트 학습하기</h1>
    </header>

    <main>
      <h2 className="title3">1일차학습 0428 - 리액트(node.js)설치, 프로젝트 실행, 종료</h2>
      <Class0 />
      <hr />

      <h2 className="title3">2일차 학습 0429 - 리액트 문법, 콤포넌트(클래스형,함수형) 개념, JSX작성법, CSS스타일 작성방법 6가지</h2>
      <Class1 />
      <Class2 />
      <hr />

      <h2 className="title3">3일차 학습 0430 -리액트 배포방법 3가지(localhost,닷홈,깃허브,aws), 일반 DOM과 가상 DOM차이 이해, 이미지 삽입 방법 4가지,아이콘폰트 삽입, swiper slide 삽입 방법 </h2>
      <Class3 />
      <hr />

      <h2 className="title3">4일차 학습 0501 -콤포넌트(클래스형,함수형)2가지 작성 방법 비교, props(부모가 자식에게 전달하는 값) , event(이벤트) ,useState (상태관리를 위한 함수), 실습예제(로그인폼)</h2>
      <Class4 />
      <hr />
      
      <h2 className="title3">5일차 학습 0502 -폼태그, 유효성검사, router, routes, link(페이지전환), 마켓컬리 메인, 서브1,2,3,4,로그인</h2>
      <Class5 />
      <hr />

      <Class6 />
      <hr />

      <Event />
      <hr />

      <Form />
      <hr />

      <h2 className="title3">6일차 학습 0507 - -배열객체, map함수, 데이터입력, 출력, 삭제</h2>
      <Array1 />
      <hr />

      <Yellow />

    </main>

    <footer className="footer">
      <p>하단 푸터영역</p>
      <address>
        Copyright&copy; @2025 0000 allright reserved.
      </address>
    </footer>
    </>
  );
}

export default App;
