import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    flex-direction: column;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 20px;
    height: auto;
    min-height: 65%;
    width: 40%;
    @media (max-width: 767px) { 
        width: 90%;
   }   
   .label, .signup {
    width: 100%;
    display: flex;
    justify-content: end;
    margin: 10px 0;

    a {
        font-size: 10px;
    }
   }

   .label {
    margin: 5px 0;
    justify-content: start;

    label{
        color: ${({theme}) => theme.colors.text};
    }
   }

`

export const InputsContainer = styled.div`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;
    width: 60%;
    display: flex;
`

export const ButtonsContainer = styled.div`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    display: flex;
`

export const Title = styled.h1`
  text-align: center;
  font-weight: 900;
  font-size: 25px;

  span {
      color: ${({theme}) => theme.colors.secondary1};
      font-weight: 900;
      font-size: 25px;
  }
`;
