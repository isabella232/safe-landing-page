import React from 'react'
import styled from 'styled-components'
import LinesSVG from '../../assets/bg-lines-03.svg'
import ContentWrapper from '../Layout/ContentWrapper'
import ButtonLink from '../ui/ButtonLink'
import Heading from '../ui/Heading'
import { DEVELOPERS_CATEGORY, useAnalytics } from '../../utils/googleAnalytics'

const Container = styled.div`
  position: relative;
  padding: 107px 20px 20px;
  color: ${(p) => p.theme.palette.navy};
  @media screen and (max-width: 1080px) {
    padding: 0;
    margin-bottom: 50px;
  }
`

const SHeading = styled(Heading)`
  letter-spacing: 1px;
  margin-bottom: 54px;
  @media screen and (max-width: 1080px) {
    font-size: 28px;
    margin-bottom: 30px;
    padding: 0 12px;
  }
`

const SSmallHeading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  width: 130px;
  @media screen and (max-width: 1080px) {
    width: auto;
  }
`

const SRightSmallHeading = styled(SSmallHeading)`
  color: ${(p) => p.theme.palette.primary};
  width: 100px;
`

const SLinesSVG = styled(LinesSVG)`
  position: absolute;
  left: 0;
  bottom: 0;
  stroke: #d8d8d8;
  opacity: 0.27;
  z-index: -1;
  @media screen and (max-width: 1080px) {
    display: none;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  @media screen and (max-width: 1080px) {
    display: block;
  }
`

const SubRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

const Col = styled.div`
  display: flex;
`

const RCol = styled.div`
  width: 100%;
`

const SubCol = styled.div`
  flex-basis: 33%;
  letter-spacing: 0.36px;
  font-size: 16px;
  line-height: normal;
  @media screen and (max-width: 1080px) {
    flex-basis: 50%;
    text-align: center;
    padding: 0 12px;
  }
`

const SButtonLink = styled(ButtonLink)`
  width: 180px;
  text-align: center;
  margin-left: 20px;
  padding: 0;
  & > div {
    padding: 10px 20px;
  }
  @media screen and (max-width: 1080px) {
    margin: 0;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const LoveMessage = styled.h3`
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.56px;
  text-align: center;
  line-height: normal;
  padding-top: 169px;
  padding-bottom: 30px;
  @media screen and (max-width: 1080px) {
    padding: 0;
    padding: 10px 0 40px 0;
  }
`

const Repositories = () => {
  const { trackEvent } = useAnalytics()

  return (
    <Container>
      <SLinesSVG />
      <ContentWrapper>
        <SHeading>
          We believe in open source.
          <br />
          Get inspired by our Repositories!
        </SHeading>
        <Row>
          <Col>
            <RCol>
              <Row>
                <SubCol>
                  <SubRow>
                    <SSmallHeading>Contracts</SSmallHeading>
                  </SubRow>
                </SubCol>
                <SubRow>
                  <SubCol>
                    <SButtonLink
                      url="https://github.com/gnosis/safe-contracts/blob/main/contracts/GnosisSafe.sol"
                      colorScheme="navy"
                    >
                      <div
                        onClick={() =>
                          trackEvent({
                            category: DEVELOPERS_CATEGORY,
                            action: 'Repositories section',
                            label: 'Open github: Core Contracts',
                          })
                        }
                      >
                        Core
                      </div>
                    </SButtonLink>
                  </SubCol>
                  <SubCol>
                    <SButtonLink
                      url="https://github.com/gnosis/safe-modules"
                      colorScheme="navy"
                    >
                      <div
                        onClick={() =>
                          trackEvent({
                            category: DEVELOPERS_CATEGORY,
                            action: 'Repositories section',
                            label: 'Open github: Modules',
                          })
                        }
                      >
                        Modules
                      </div>
                    </SButtonLink>
                  </SubCol>
                </SubRow>
              </Row>
              <Row>
                <SubCol>
                  <SubRow>
                    <SSmallHeading>Services</SSmallHeading>
                  </SubRow>
                </SubCol>
                <SubRow>
                  <SubCol>
                    <SButtonLink
                      url="https://github.com/gnosis/safe-transaction-service"
                      colorScheme="navy"
                    >
                      <div
                        onClick={() =>
                          trackEvent({
                            category: DEVELOPERS_CATEGORY,
                            action: 'Repositories section',
                            label: 'Open github: Transaction indexer',
                          })
                        }
                      >
                        Transaction indexer
                      </div>
                    </SButtonLink>
                  </SubCol>
                  <SubCol>
                    <SButtonLink
                      url="https://github.com/gnosis/safe-relay-service"
                      colorScheme="navy"
                    >
                      <div
                        onClick={() =>
                          trackEvent({
                            category: DEVELOPERS_CATEGORY,
                            action: 'Repositories section',
                            label: 'Open github: Relay',
                          })
                        }
                      >
                        Relay
                      </div>
                    </SButtonLink>
                  </SubCol>
                </SubRow>
              </Row>
            </RCol>
          </Col>
          <Col>
            <RCol>
              <Row>
                <SubCol>
                  <SubRow>
                    <SRightSmallHeading>Clients</SRightSmallHeading>
                  </SubRow>
                </SubCol>
                <SubRow>
                  <SubCol>
                    <SButtonLink
                      url="https://github.com/gnosis/safe-react"
                      colorScheme="green"
                    >
                      <div
                        onClick={() =>
                          trackEvent({
                            category: DEVELOPERS_CATEGORY,
                            action: 'Repositories section',
                            label: 'Open github: Web interface',
                          })
                        }
                      >
                        Web interface
                      </div>
                    </SButtonLink>
                  </SubCol>
                  <SubCol>
                    <SButtonLink
                      url="https://github.com/gnosis/contract-proxy-kit"
                      colorScheme="green"
                    >
                      <div
                        onClick={() =>
                          trackEvent({
                            category: DEVELOPERS_CATEGORY,
                            action: 'Repositories section',
                            label: 'Open github: Proxy Kit',
                          })
                        }
                      >
                        Proxy kit
                      </div>
                    </SButtonLink>
                  </SubCol>
                </SubRow>
              </Row>
              <Row>
                <SubCol>
                  <SubRow></SubRow>
                </SubCol>
                <SubRow>
                  <SubCol>
                    <SButtonLink
                      url="https://github.com/gnosis/safe-android"
                      colorScheme="green"
                    >
                      <div
                        onClick={() =>
                          trackEvent({
                            category: DEVELOPERS_CATEGORY,
                            action: 'Repositories section',
                            label: 'Open github: Android App',
                          })
                        }
                      >
                        Android app
                      </div>
                    </SButtonLink>
                  </SubCol>
                  <SubCol>
                    <SButtonLink
                      url="https://github.com/gnosis/safe-ios"
                      colorScheme="green"
                    >
                      <div
                        onClick={() =>
                          trackEvent({
                            category: DEVELOPERS_CATEGORY,
                            action: 'Repositories section',
                            label: 'Open github: iOS App',
                          })
                        }
                      >
                        iOS app
                      </div>
                    </SButtonLink>
                  </SubCol>
                </SubRow>
              </Row>
            </RCol>
          </Col>
        </Row>
        <LoveMessage>Gnosis &hearts; Developers</LoveMessage>
      </ContentWrapper>
    </Container>
  )
}

export default Repositories
