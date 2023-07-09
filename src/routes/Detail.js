//detail페이지로 이동

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let PinkButton = styled.button`
  background: pink;
  color: gray;
  padding 10px;

  &:hover {
    background: gray;
    color: white;
  }
`;

function Detail(props) {
  let { id } = useParams(); //상품 클릭 시 그 상품의 상세페이지로 이동하도록 도와주는 Hook
  let 찾은상품 = props.donuts.find((x) => x.id == id);
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    console.log("안녕"); //버튼 클릭 시 마다 콘솔 창에 안녕이라는 표시가 뜨게 된다

    //할인이라는 div 창을 2초 후에 감춤
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    console.log(2); //return에 있는 console.log다음에 작동

    return () => {
      //기존 타이머 제거 / useEffect가 실행되기 전에 먼저 실행된다
      clearTimeout(a); //위의 요소를 함수 a로 지정하게 되면 제거할 떄도 편리하다

      //서버로 데이터 요청 시 기존데이터는 제거해주세요와 같이 요청도 가능해진다

      console.log(1); //해당 console.log를 통해 return이 먼저 작용한다는 것을 확인할 수 있다
    };
  }, []);

  return (
    <>
      <div className="container">
        {alert == true ? (
          <div className="alert alert-warning">2초 이내 구매 시 할인</div>
        ) : null}

        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          버튼
        </button>
        <div className="row">
          <div className="col-md-4">
            <div className="donut donut2" />
            <h4>{props.donuts[id].title}</h4>
            <p>{props.donuts[id].content}</p>
            <p>{props.donuts[id].price}</p>
            <PinkButton>주문하기</PinkButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
