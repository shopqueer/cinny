import React, { useRef, useState, useEffect } from 'react';
import { Box, Icon, IconButton, Icons, Scroll, Text, config, toRem } from 'folds';
import { Link } from 'react-router-dom';
import { Page, PageHeader, PageHero, PageHeroSection } from '../../components/page';
import WordmarkBlackSVG from '../../../../public/res/svg/Allstora_Wordmark_RGB_Black.svg';
import WordmarkWhiteSVG from '../../../../public/res/svg/Allstora_Wordmark_RGB_White.svg';
import { getHomeRulesPath, getSpaceRoomPath } from '../pathUtils';
import * as useScreenSize from '../../hooks/useScreenSize';
import { BackRouteHandler } from '../../components/BackRouteHandler';
import { ScreenSize } from '../../hooks/useScreenSize';
import settings from '../../../client/state/settings';
import { useMatrixClient } from '../../hooks/useMatrixClient';


export function WelcomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const screenSize = useScreenSize.useScreenSizeContext();

  const currentThemeIndex = settings.getThemeIndex()
  const wordmarkSvg = currentThemeIndex < 2 ? WordmarkBlackSVG : WordmarkWhiteSVG

  const [joinedRooms, setJoinedRooms] = useState<string[]>([])
  const mx = useMatrixClient();
  useEffect(() => {
    mx.getJoinedRooms().then(obj => setJoinedRooms(obj.joined_rooms))
  }, [mx])


  const SPACES_MAP: {[key:string]: {[key2:string]: string}} = {
    "!PXXwRDLBXUcZVPlYjy:kiki-server.allstora.com": {"discussion": "!JvpqSiSSyYmZCgEAoY:kiki-server.allstora.com", "intro": "!wPQBycjzCRnsZjbOuS:kiki-server.allstora.com", "hostName": "Eric"},
    "!QylPBYzSFBgSmRjpAx:kiki-server.allstora.com": {"discussion": "!JFFlUHoJYQtSqVKQxQ:kiki-server.allstora.com", "intro": "!MrneWlEWJPwrMuFkEw:kiki-server.allstora.com", "hostName": "Jordy"},
    "!OAMvlYAJNHAeJAHqMJ:kiki-server.allstora.com": {"discussion": "!KbdMTynRVIyEstrZBb:kiki-server.allstora.com", "intro": "!neoqrlvgGuUZAZLaQD:kiki-server.allstora.com", "hostName": "Kate and Leisha"},
    "!SIvciPzZUwTOeumsjM:kiki-server.allstora.com": {"discussion": "!wsavZGmlDvFYBEomkN:kiki-server.allstora.com", "intro": "!ZSDcqngwrcRomAvAHg:kiki-server.allstora.com", "hostName": "Dylan"},
    "!gofhedAMppDZiREscQ:kiki-server.allstora.com": {"discussion": "!iKEWEyyYVAsGjSYEwq:kiki-server.allstora.com", "intro": "!bMTPoMcAggFZmReBNZ:kiki-server.allstora.com", "hostName": "Gus"},
  }

  return (
    <Page>
      <PageHeader balance>
        <Box grow="Yes" alignItems="Center" gap="200">
          <Box grow="Yes" basis="No">
            {screenSize === ScreenSize.Mobile && (
              <BackRouteHandler>
                {(onBack) => (
                  <IconButton onClick={onBack} radii="Pill">
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
                    {joinedRooms.filter((roomId) => roomId in SPACES_MAP).slice(0, 1).map((spaceId) => (
                    <ol key={spaceId}>
                      <li>
                        <Link to={getHomeRulesPath()}>Check out our Community Guidelines.</Link>
                      </li>
                    
                      <li key={SPACES_MAP[spaceId].intro}>
                        <Link to={getSpaceRoomPath(spaceId, SPACES_MAP[spaceId].intro)}>
                          Introduce Yourself!
                        </Link>
                      </li>
                      <li key={SPACES_MAP[spaceId].discussion}>
                        <Link to={getSpaceRoomPath(spaceId, SPACES_MAP[spaceId].discussion)}>
                          Answer today’s Discussion Prompt.
                        </Link>
                      </li>
                    </ol>

                    ))}
                  And one more thing: don't forget to be Spoiler-Savvy. if you’re posting something that might surprise another reader, use the Spoiler feature  to make sure you’re not spilling the tea before it’s hot.
                  <p>
                    Glad you’re here,<br /> Allstora
                  </p>
                </Box>
              </Box>
            </PageHero>
          </PageHeroSection>
        </Scroll>
      </Box>
    </Page>
  );
}
