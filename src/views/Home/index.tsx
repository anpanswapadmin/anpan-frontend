import React from 'react'
import styled from 'styled-components'
import { SocialLayout } from '@anpanswap/uikit'
import PageSection from 'components/PageSection'
import useTheme from 'hooks/useTheme'
import Hero from './components/Hero'
import { farmSectionData, poolSectionData } from './components/EarnSection/data'
import { predictionSectionData, lotterySectionData } from './components/WinSection/data'
import { anpanSectionData } from './components/AnpanSection/data'
import AppSection from './components/AppSection'
import EarnSection from './components/EarnSection'
import WinSection from './components/WinSection'
import AnpanSection from './components/AnpanSection'
import RoadmapSection from './components/RoadmapSection'
import PoolsRow from './components/PoolsRow'
import FarmsRow from './components/FarmsRow'
import AnpanDataRow from './components/AnpanDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import TeleChatCard from './components/Foot/TeleChatCard'
import TeleChannelCard from './components/Foot/TeleChannelCard'
import TwitterCard from './components/Foot/TwitterCard'
import InstagramCard from './components/Foot/InstagramCard'
import DocsCard from './components/Foot/DocsCard'
import GithubCard from './components/Foot/GithubCard'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 24px;
    justify-content: center;
  }
`

const Foot = styled(SocialLayout)`
  align-items: start;
  margin-bottom: 0px;

  & > div {
    grid-column: span 3;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 4;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 2;
    }
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  return (
    <>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'radial-gradient(103.12% 50% at 50% 50%, #502816 0%, #27150c 100%)'
            : 'linear-gradient(139.73deg, #fffae6 0%, #f3e1d8 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #09070C 22%, #4d2e00 100%)'
            : 'linear-gradient(180deg, #FFFFFF 22%, #eed1c3 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <AppSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill={theme.isDark ? '#4d2e00' : '#eed1c3'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <EarnSection {...farmSectionData} />
        <FarmsRow />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #1a0f00 22%, #4d2d00 100%)'
            : 'linear-gradient(180deg, #ffd699 22%, #ffebcc 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.colors.background}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <EarnSection {...poolSectionData} />
        <PoolsRow />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? '#332700'
            : '#fffae6'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill={theme.isDark ? '#4d2d00' : '#ffebcc'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <WinSection {...predictionSectionData} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradients.cardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.isDark ? '#332700' : '#fffae6'}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <WinSection {...lotterySectionData} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
            : 'linear-gradient(180deg, #6FB6F1 0%, #EAF2F6 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <RoadmapSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <AnpanSection {...anpanSectionData} />
        <AnpanDataRow />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #cd754c 0%, #9f512d 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <div>
          <Foot>
            <TeleChatCard />
            <TeleChannelCard />
            <TwitterCard />
            <InstagramCard />
            <DocsCard />
            <GithubCard />    
          </Foot>
        </div>
      </PageSection>
    </>
  )
}

export default Home
