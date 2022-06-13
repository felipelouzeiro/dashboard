import { BarChart } from './charts/BarChart'
import { ScatterChart } from './charts/ScatterChart'
import { GraphicContainer } from './Graphics.style'

export const Graphics = () => {
  return (
    <>
      <GraphicContainer>
        <BarChart />
        <ScatterChart />
      </GraphicContainer>
    </>
  )
}
