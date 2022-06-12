import styled from 'styled-components'

export const Zone = styled('header')`
  background-color: #cec6ce;
  width: 100%;
  height: 91px;
  margin-bottom: 33px;
`

export const HeaderContainer = styled('header')`
  margin: 0 28px 0 28px;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Title = styled('h1')`
  font-size: 28px;
  line-height: 100%;
  color: #5d405c;
  font-weight: 700;
  width: fit-content;
`

export const Subtitle = styled('h2')`
  font-size: 14px;
  color: #828282;
  line-height: 100%;
  font-weight: 500;
  margin-top: 8px;
  width: fit-content;
  letter-spacing: 0.5px;
`

export const ButtonFilter = styled('button')`
  position: absolute;
  right: 0;
  bottom: 15px;
  top: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background-color: #5d405c;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border-style: none;
  color: #f6f6f6;
  font-weight: 600;
  line-height: 17px;
  cursor: pointer;
`