import styled from "styled-components";

export const Box = styled.div`
  padding: 60px 40px;
  color: #fff;
  /* height: 400px; */
  /* text-shadow: 1px 1px 2px black; */
  /* background: rgb(0, 245, 214);
  background: linear-gradient(
    90deg,
    rgba(0, 245, 214, 1) 0%,
    rgba(47, 41, 179, 1) 100%
  ); */
  /* position: absolute; */
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;



export const Container = styled.div`
  display: flex;
  /* position: relative;
  bottom: 150px; */
  /* border-radius: 15px;
  -webkit-box-shadow: 0px 9px 16px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 9px 16px 4px rgba(0, 0, 0, 0.5); */
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: #fff; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
  width: 100%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #48efe5;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
