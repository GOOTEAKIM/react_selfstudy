import React from "react";
import "./App.css";

import { Routes,Route, Link, useNavigate, } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

import { getEmotoinImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function App() {

  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new"); // 버튼을 누르면 /new 로 이동한다.

  };

  return (
    <>
      <Header 
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Button 
        text={"123"}
        // type={"DEFAULT"}
        // default 는 생략해도 됨
        onClick={() => {
        console.log("123번 클릭");
      }}/>

      <Button 
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
        console.log("123번 클릭");
      }}/>

      <Button 
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
        console.log("123번 클릭");
      }}/>

      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/new" element = {<New/>} />
        <Route path="/diary/:id" element = {<Diary/>} />
        <Route path="*" element = {<Notfound/>} />
      </Routes>
    </>
  );
}

export default App;