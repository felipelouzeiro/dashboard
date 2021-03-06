import {
  ButtonFilter,
  HeaderContainer,
  Subtitle,
  Title,
  Zone,
} from './Header.style'

export const Header = () => {
  return (
    <>
      <Zone />
      <HeaderContainer>
        <div>
          <Title>Dashboard</Title>
          <Subtitle>Desafio Técnico Frontend</Subtitle>
        </div>
        <ButtonFilter>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33331 7.33334V8.08001C5.33457 8.16793 5.37051 8.2518 5.43331 8.31334L10.2866 13.22C10.3495 13.2816 10.3854 13.3654 10.3866 13.4533V18.0467C10.3865 18.1091 10.404 18.1704 10.437 18.2234C10.47 18.2765 10.5172 18.3192 10.5733 18.3467L13.2066 19.2867C13.2575 19.3116 13.3139 19.3232 13.3705 19.3202C13.427 19.3173 13.4819 19.3 13.53 19.27C13.578 19.24 13.6176 19.1982 13.645 19.1486C13.6724 19.0991 13.6868 19.0433 13.6866 18.9867V13.3933C13.6959 13.3032 13.7387 13.2199 13.8066 13.16L18.5533 8.32668C18.6161 8.26513 18.6521 8.18127 18.6533 8.09334V7.33334H5.33331Z"
              fill="white"
            />
          </svg>
          Filtrar
        </ButtonFilter>
      </HeaderContainer>
    </>
  )
}
