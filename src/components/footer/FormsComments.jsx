import React from "react";
import styled from "styled-components";
import { BiHeart } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

// reviews
const AddReview = styled.div`
  height: content;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  margin-bottom: 2.5rem;
`;
const Rating = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextRating = styled.h3``;
const RatingIconContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const ReviewContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`;
const Review = styled.div`
  width: 100%;
  display: flex;
  gap: 3.125rem;
`;
const TitleReview = styled.span``;

const InputTextArea = styled.textarea`
  border: solid 1px black;
  width: 100%;
  height: 7.5rem;
  outline: none;
  resize: none;
  overflow:scroll ;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.625rem;
  font-size: 0.9375rem;
  font-weight: 400;

`;

const Button = styled.button`
  outline: none;
  background-color: black;
  color: white;
  border: none;
  padding: 0.5rem;
  width: 9.375rem;
`;

const FormsComments = () => {
  return (
    <AddReview>
      <Rating>
        <TextRating>Valoración</TextRating>
        <RatingIconContainer>
          <FcLike />
          <FcLike />
          <FcLike />
          <FcLikePlaceholder />
          <FcLikePlaceholder />
        </RatingIconContainer>
      </Rating>

      <ReviewContainer>
        <InputContainer>
          <TitleReview>Deja un comentario </TitleReview>
          <InputTextArea />
        </InputContainer>
        <Review>
          <InputContainer>
            <TitleReview type="text">Name</TitleReview>
            <Input />
          </InputContainer>

          <InputContainer>
            <TitleReview>Email</TitleReview>
            <Input type="email" />
          </InputContainer>
        </Review>

        <Button>Enviar</Button>
      </ReviewContainer>
    </AddReview>
  );
};

export default FormsComments;
