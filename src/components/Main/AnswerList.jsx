import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Plus from "../../assets/Plus.svg";

const List = styled.div`
    margin-top: 4%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ListHeader = styled.div`
    color: #333;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    display: flex;
    gap: 300px;
`;

const HeaderButton = styled.button`
    width: 136px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 6px;
    cursor: pointer;
	border:none;
    background: #366EFF;
    color: #FFF;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.64px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
`;

function AnswerList() {
    const navigate = useNavigate();

    return(
        <List>
            <ListHeader>
                <div>시은 님의 질문지 답변을 확인해 보세요!</div>
                <HeaderButton onClick={()=>{navigate('/createform')}}><img src={Plus}/> 질문지 만들기</HeaderButton>
            </ListHeader>   
        </List> 
    );
}

export default AnswerList;