import React from "react";
import styled from "styled-components";
import { comment } from "../../data";
import { AiOutlineStar } from "react-icons/ai";
import FormsComments from "./FormsComments";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { useState } from "react";
import { cartmd, mobilesm } from "../../responsive";

const Container = styled.section`
  border: solid 0.0625rem #e1dfdf;
  padding: 0rem 2.5rem;
  ${mobilesm({ padding:'0'})}
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  height: 100%;
  width: 80%;
  ${cartmd({ border: "none" })}
`;

const Titulo = styled.h2``;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.875rem;
`;
const Comment = styled.div`
  display: flex;
  width: 100%;
  gap: 1.25rem;
`;

const ImageContainer = styled.div`
  width: 3.75rem;
  height: 3.75rem;
`;
const CommentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  padding: 0.3125rem;
  width: 100%;
  border: solid 0.0625rem #e1dfdf;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

const Name = styled.h2`
  font-size: 0.9375rem;
`;
const Date = styled.span`
  font-size: 0.8125rem;
`;

const TextComment = styled.span``;
const IconsContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`;

const IconContainer = styled.div`
  margin-top: 0.625rem;
`;
const Likes = styled.span`
  font-size: 0.75rem;
`;
const DisLikes = styled.span`
  font-size: 0.75rem;
`;

const Comments = () => {


  return (
    <Container>
      <Titulo>Deja tu comentario</Titulo>
      <CommentContainer>
        {comment.map((item) => (
          <>
            <Comment>
              <ImageContainer>
                <CommentImage src={item.user} />
              </ImageContainer>
              <CommentInfo>
                <Info>
                  <Name>{item.name}</Name>
                  <Date>{item.date}</Date>
                </Info>
                <TextComment>{item.comment}</TextComment>
                <IconsContainer>
                  <IconContainer>
                    <AiOutlineLike /> <Likes>0</Likes>
                  </IconContainer>
                  <IconContainer>
                    <AiOutlineDislike />
                    <DisLikes>0</DisLikes>
                  </IconContainer>
                </IconsContainer>
              </CommentInfo>
            </Comment>
          </>
        ))}
      </CommentContainer>

      <FormsComments />
    </Container>
  );
};

export default Comments;
