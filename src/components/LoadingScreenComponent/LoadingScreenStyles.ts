import styled from 'styled-components'

export const LoadingContainer = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.8);
  z-index: 2;
`

export const Image = styled.img`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%,-110%);
  width: 200px;
`

export const HeaderFive = styled.h5`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 15px;
  color: white;
  transform: translate(-50%,-50%);
`