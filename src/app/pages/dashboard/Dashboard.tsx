import { GlobalStyle } from '../../shared/theme/GlobalStyle.style'
import { Graphics } from './components/graphics/Graphics'
import { Header } from './components/header/Header'

export const Dashboard = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Graphics />
    </>
  )
}
