import React from 'react'
import styled, { css } from 'styled-components'
import ButtonLink from '../../ui/ButtonLink'
import Divider from './Divider'
import Spacer from './Spacer'
import Link from '../../ui/Link'
import Logo from '../../../assets/multisig-logo.svg'

const HeaderItemPadding = css`
  padding-left: 16px;
  padding-right: 16px;
`

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  box-shadow: 3px 4px 14px 0 rgba(0, 0, 0, 0.15);
  border: ${p => `solid 1px ${p.theme.palette.greyGreen}`};
  background-color: ${p => p.theme.palette.pink};
`

const NavContainer = styled.nav`
  height: 100%;
  font-weight: 800;
  color: ${p => p.theme.palette.navy};
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`

const NavListItem = styled.li`
  ${HeaderItemPadding}
`

const NavLink = styled(Link)``

const SLogo = styled(Logo)`
  height: 40px;

  ${HeaderItemPadding}
`

const Header: React.FC<{}> = () => {
  return (
    <Container>
      <SLogo />
      <Divider />
      <Spacer />
      <NavContainer>
        <NavList>
          <Divider />
          <NavListItem>
            <Link to="/security">Security</Link>
          </NavListItem>
          <Divider />
          <NavListItem>
            <ButtonLink url="/gnosis-safe.io">Open App</ButtonLink>
          </NavListItem>
          <Divider />
        </NavList>
      </NavContainer>
    </Container>
  )
}

export default Header
