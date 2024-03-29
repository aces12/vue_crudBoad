# TO DO BOARD

### 1. 개요

이 프로젝트는 Create, Read, Update, Delete (이하 CRUD) 기능구현을 목적으로 한 포트폴리오 입니다. <br />
이 프로젝트를 함께 진행해봄으로써 Git 형상관리, 컴포넌트 구조설계, API 활용, Vue.js에 대한 전반적인 이해 등 <br/>
현업에 투입됐을 때, 전체적인 흐름을 가볍게 익힐 수 있는 교육과정 입니다.

-   사용 언어 : Vue.js (Version 3)
-   사용 레퍼런스 API : Composition API

---

### 2. 프로젝트 환경설정

-   페이지 라우팅 : Vue Router를 활용한 페이지 라우팅
    -   `npm install vue-router@4`
-   상태관리 : Pinia로 중앙집중식 State 상태관리
    -   `npm install pinia`
-   서버통신 : Axios로 API 통신
    -   `npm install axios`
-   UI 라이브러리 : Element Plus를 활용하여 필요한 부분에서의 UI 구현
    -   `npm install element-plus --save`
    -   `npm install @element-plus/icons-vue`

---

## 주의사항!

-   `npm i -D webpack-dev-server@next`로 설치(webpack-cli 버전(@4^)과 일치)!<br>
-   `package.json` 옵션으로 `browserslist` 추가!<br>
-   `.postcssrc.js` 생성(PostCSS 구성 옵션)!<br>
-   `.babelrc.js` 생성(Babel 구성 옵션)!<br>

# Webpack 기본 템플릿

__webpack__: 모듈(패키지) 번들러의 핵심 패키지<br>
__webpack-cli__: 터미널에서 Webpack 명령(CLI)을 사용할 수 있음<br>
__webpack-dev-server__: 개발용으로 Live Server를 실행(HMR)<br>

__html-webpack-plugin__: 최초 실행될 HTML 파일(템플릿)을 연결<br>
__copy-webpack-plugin__: 정적 파일(파비콘, 이미지 등)을 제품(`dist`) 폴더로 복사<br>

__sass-loader__: SCSS(Sass) 파일을 로드<br>
__postcss-loader__: PostCSS(Autoprefixer)로 스타일 파일을 처리<br>
__css-loader__: CSS 파일을 로드<br>
__style-loader__: 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입<br>
__babel-loader__: JS 파일을 로드<br>

__@babel/core__: ES6 이상의 코드를 ES5 이하 버전으로 변환<br>
__@babel/preset-env__: Babel 지원 스펙을 지정<br>
__@babel/plugin-transform-runtime__: Async/Await 문법 지원<br>

__sass__: SCSS(Sass) 문법을 해석(스타일 전처리기)<br>
__postcss__: Autoprefixer 등의 다양한 스타일 후처리기 패키지<br>
__autoprefixer__: 스타일에 자동으로 공급 업체 접두사(Vendor prefix)를 적용하는 PostCSS의 플러그인<br> 

## 주의사항!

- `npm i -D webpack-dev-server@next`로 설치(webpack-cli 버전(@4^)과 일치)!<br>
- `package.json` 옵션으로 `browserslist` 추가!<br>
- `.postcssrc.js` 생성(PostCSS 구성 옵션)!<br>
- `.babelrc.js` 생성(Babel 구성 옵션)!<br>
