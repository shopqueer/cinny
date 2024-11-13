import React, { useRef } from 'react';
import { Box, Button, Icon, IconButton, Icons, Scroll, Text, config, toRem } from 'folds';
import { Link } from 'react-router-dom';
import { Page, PageHeader, PageHero, PageHeroSection } from '../../components/page';
import WordmarkBlackSVG from '../../../../public/res/svg/Allstora_Wordmark_RGB_Black.svg';
import WordmarkWhiteSVG from '../../../../public/res/svg/Allstora_Wordmark_RGB_White.svg';
import { getHomeRulesPath, getSpaceRoomPath } from '../pathUtils';
import * as useScreenSize from '../../hooks/useScreenSize';
import { BackRouteHandler } from '../../components/BackRouteHandler';
import { ScreenSize } from '../../hooks/useScreenSize';
import { url } from 'inspector';
import settings from '../../../client/state/settings';


export function WelcomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const screenSize = useScreenSize.useScreenSizeContext();

  const currentThemeIndex = settings.getThemeIndex()
  const wordmarkSvg = currentThemeIndex < 2 ? WordmarkBlackSVG : WordmarkWhiteSVG

  return (
    <Page>
      <PageHeader balance>
        <Box grow="Yes" alignItems="Center" gap="200">
          <Box grow="Yes" basis="No">
            {screenSize === ScreenSize.Mobile && (
              <BackRouteHandler>
                {(onBack) => (
                  <IconButton onClick={onBack}>
                    <Icon src={Icons.ArrowLeft} />
                  </IconButton>
                )}
              </BackRouteHandler>
            )}
          </Box>
          <Box justifyContent="Center" alignItems="Center" gap="200">
            <Text size="H3" truncate>
              Welcome!
            </Text>
          </Box>
          <Box grow="Yes" basis="No" />
        </Box>
      </PageHeader>
      <Box
        grow="Yes"
        style={{ padding: config.space.S400, paddingBottom: config.space.S700 }}
        alignItems="Center"
        justifyContent="Center"
      >
<<<<<<< HEAD
        <Scroll ref={scrollRef} hideTrack visibility="Hover">
          <PageHeroSection>
            <PageHero
              icon={<img width={300} src={wordmarkSvg} alt="Allstora" />}
              title="Welcome to Kiki"
              subTitle={<span>Allstora's community conversation platform.</span>}
            >
              <Box justifyContent="Center">
                <Box grow="Yes" style={{ maxWidth: toRem(300) }} direction="Column" gap="300">
                  If you’re new, here are a few ways to get started:
                  <ol>
                    <li>
                      <Link to={getHomeRulesPath()}>Check out our Community Guidelines.</Link>
                    </li>
                    <li>
                      <Link
                        to={getSpaceRoomPath(
                          '!PXXwRDLBXUcZVPlYjy:kiki-server.allstora.com',
                          '!wPQBycjzCRnsZjbOuS:kiki-server.allstora.com'
                        )}
                      >
                        Introduce Yourself!
                      </Link>
                    </li>
                    <li>
                      <Link to={getSpaceRoomPath(
                        '!PXXwRDLBXUcZVPlYjy:kiki-server.allstora.com',
                        '!JvpqSiSSyYmZCgEAoY:kiki-server.allstora.com'
                      )}>
                        Answer today’s Discussion Prompt.
                      </Link>
                    </li>
                  </ol>
                  And one more thing: don't forget to be Spoiler-Savvy. if you’re posting something that might surprise another reader, use the Spoiler feature  to make sure you’re not spilling the tea before it’s hot.
                  <p>
                    Glad you’re here, <br />
                    Eric
                  </p>
                </Box>
=======
        <PageHeroSection>
          <PageHero
            icon={<img width="70" height="70" src={CinnySVG} alt="Cinny Logo" />}
            title="Welcome to Cinny"
            subTitle={
              <span>
                Yet another matrix client.{' '}
                <a
                  href="https://github.com/cinnyapp/cinny/releases"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  v4.2.3
                </a>
              </span>
            }
          >
            <Box justifyContent="Center">
              <Box grow="Yes" style={{ maxWidth: toRem(300) }} direction="Column" gap="300">
                <Button
                  as="a"
                  href="https://github.com/cinnyapp/cinny"
                  target="_blank"
                  rel="noreferrer noopener"
                  before={<Icon size="200" src={Icons.Code} />}
                >
                  <Text as="span" size="B400" truncate>
                    Source Code
                  </Text>
                </Button>
                <Button
                  as="a"
                  href="https://cinny.in/#sponsor"
                  target="_blank"
                  rel="noreferrer noopener"
                  fill="Soft"
                  before={<Icon size="200" src={Icons.Heart} />}
                >
                  <Text as="span" size="B400" truncate>
                    Support
                  </Text>
                </Button>
>>>>>>> a142630ff970e47303fb0aeff0f7cad6f6fbdaf3
              </Box>
            </PageHero>
          </PageHeroSection>
        </Scroll>
      </Box>
    </Page>
  );
}
