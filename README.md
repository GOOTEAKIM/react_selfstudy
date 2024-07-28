# 7/28

## lec 3

- 앱 만들기
  - npm create vite@latest
    - React
    - javascript

- npm i

- npm run dev

- React 라우팅 라이브러리 쓰는 법
  - npm i react-router-dom
---
## lec 4

- Link : 
  - == a 태그, 조금 다름
  - 링크가 필요할 때 사용

- useNavigate
  - 함수로 만들어서 사용
  - eventhandler 로 특정 조건에 맞게 이동 시킬 경우 사용
---
## lec 5

- 동적 경로

  - URL Parameter
    - / 뒤에 아이템의 id를 명시
      - ~/product/1
      - ~/product/2
      - ~/product/3

  - `아이템의 id 등의 변경되지 않는 값을 주소로 명시하기 위해 사용됨`

  - Query String
    - ? 뒤에 변수명과 값 명시
      - ~/search?q=검색어

  - `검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용된다`

- useParams : 현재 브라우저에 명시한 parameter를 가져온다.
  - `const [params, setParams] = useSearchParams();` 작성
---
## lec 6

- public : 폰트 저장
- assets : 이미지 저장

- React build : npm run build
- 빌드된 것 프리뷰 : npm run preview

- 적은 개수의 이미지를 쓰는 경우 : src 에 저장
- 많은 개수의 이미지를 쓰는 경우 : public 에 저장
---