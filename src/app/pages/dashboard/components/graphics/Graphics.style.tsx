import styled from 'styled-components'

export const device = {
  mobile: `(max-width: 680px)`,
}

export const GraphicContainer = styled('section')`
  margin-top: 45px;
  padding: 0 28px;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 28px;
  width: 100%;
  max-width: 1440px;
  height: 359px;

  div#chart {
    background-color: #ffffff;
    border-radius: 20px;
    padding: 14px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  }

  @media ${device.mobile} {
    flex-direction: column;
    height: 640px;
  }
`
/* max-width: 1440px; */
