import styled from 'styled-components'

export const Card = styled.div`
   overflow: hidden;
   padding: 48px 32px;

   width: 450px;
   font-family: Quicksand, arial, sans-serif;
   box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
   border-radius: 5px;
`

/* Todo: Styled Components with Storybook  */
export const Button = styled.button`
   display: block;
   width: 100%;
   padding: 12px 0;
   font-family: inherit;
   font-size: 14px;
   font-weight: 700;
   color: #fff;
   background-color: #3949ab;
   border: 0;
   border-radius: 35px;
   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
   cursor: pointer;
   transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

   &:hover {
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
      transform: translate(0, -5px);
   }
`

export const CardFieldset = styled.fieldset`
   position: relative;
   padding: 0;
   margin: 0;
   border: 0;

   & + & {
      margin-top: 24px;
   }

   &:nth-last-of-type(2) {
      margin-top: 32px;
   }

   &:last-of-type {
      text-align: center;
      margin-top: 50px;
   }
`
