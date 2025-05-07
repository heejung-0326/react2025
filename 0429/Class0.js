import React from 'react';
import './css/compo.css';

function Class0(props) {
  return (
    <>
      <h3>Node.js설치와 리액트 프로젝트 실행방법</h3>
      <ol>
        <li>nodejs 사이트에 방문하여 lts(안정화)버전을 다운로드하여 설치</li>
        <li>내 컴퓨터〉시작〉실행〉cmd(명령프롬프트)실행</li>
        <li>node,npm버전확인 node -v, npm -v</li>
        <li>프로젝트 설치하고자 하는 폴더로 이동 : cd 폴더명</li>
        <li>npx설치(execute npm package binaries) : npm i npx -g</li>
        <li>npx 버전확인 : npx -v</li>
      </ol>
      <hr />
      <h3>1. 명령프롬프트에서 사용하는 명령어</h3>
        <ul>
          <li>cd 폴더명 : change directory의 약자로서 지정한 폴더로 이동한다.</li>
          <li>dir : 폴더, 파일 리스트 출력하기 위한 명령어</li>
          <li>cd\ : 최상위 폴더로 이동하는 명령어</li>
          <li>cd.. : 이전 상위 폴더로 이동하는 명령어(현재 폴더 나가기)</li>
          <li>cls : clear의 약자로서 화면을 깨끗하게 비우는 명령어</li>
          <li>cd 드라이브명 : 현재 폴더 위치에서 다른 폴더로 이동하기 위한 명령어</li>
        </ul>
        <hr />
      <h3>2. vs code에서 cmd등록하여 리액트 프로젝트 설치하기</h3>
        <ul>
          <li>상단 메뉴에서 '터미널'메뉴 클릭</li>
          <li>새 터미널 생성되면 오른쪽 메뉴 '+'옆 화살표 클릭하여 '기본 프로필선택'하면 vs code에서 항상 cmd 창이 나오게 된다.</li>
          <li>드라이브명을 전환하여 프로젝트를 설치할 드라이브(폴더)로 이동한다.</li>
          <li>cmd창에서 npx create-react-app 프로젝트명(폴더명)</li>
          <li>cmd창에서 npx create-react-app kdt =〉 프로젝트 설치함. 에러가 나오면 다시 재 설치하거나 또는 npx i 명령어로 미설치된 파일 재설치 한다.</li>
        </ul>
        <hr />
      <h3>3. 리액트 프로젝트 실행</h3>
        <p>리액트 프로젝트 폴더가 생성되고 설치가 완료가 되면 'npm run start' or'npm start'명령어로 프로젝트를 실행한다. </p>
        <hr />
      <h3>4. 리액트 프로젝트 종료</h3>
        <p>프로젝트를 종료하고자 할 때는 브라우저 창만 종료하지말고 vs code 'cmd'창에서 반드 시 crtl+C키를 눌러서 안정적으로 종료를 한다.</p>
        <hr />
      <h3>5. 리액트 프로젝트 작업시 유용한 플러그인 설치</h3>
        <ul>
          <li>Reactjs code snippets : 리액트 코드 작성시 단축키로 빠르게 코드를 작성할 수 있도록 도와주며 문법체크해줌.</li>
          <li>tailsind intellisence : 리액트 프로젝트 작성시 CSS코드를 빠르게 작성하도록 도와주는  플러그인</li>
        </ul>
      <h3>리액트_프로젝트 폴더구조 알아보기</h3>
        <p>리액트에 node.js설치시 생성되는 폴더의 종류와 내용 알아보기</p>
        <ul>
          <li>[node_modules] : babel 및 webpack을 통해 리액트를 실행시켜주는 파일들을 모아놓은 폴더이다. 백업하지 않아도 되며 나중에 npm i를 통해 다시 설치 가능</li>
          <li>[public] : babel이 컴파일 하여 변환된 문서 index.html을 저장하는 폴더이며, images, src폴더를 웹사이트에 업로드한다.</li>
          <li>[src] : 리액트로 개발하는 모든 대부분의 파일이 저장되는 폴더</li>
          <li>index.js : 리액트 진입하기 위한 파일로서 첫화면 문서임</li>
          <li>App.js : 콤포넌트 문서들을 모아놓은 파일</li>
          <li>[build] : 리액트 프로젝트를 완성한 후 웹서버에 업로드하고자 할 때 생성되는 폴더이며 'npm run build' 명령어를 통해 실행할 수 있다.</li>
        </ul>
    </>
  );
}

export default Class0;