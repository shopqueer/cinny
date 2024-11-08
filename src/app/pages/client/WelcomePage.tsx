import React from 'react';
import { Box, Button, Icon, Icons, Text, config, toRem } from 'folds';
import { Page, PageHero, PageHeroSection } from '../../components/page';
import WordmarkBlackSVG from '../../../../public/res/svg/Allstora_Wordmark_RGB_Black.svg';
import WordmarkWhiteSVG from '../../../../public/res/svg/Allstora_Wordmark_RGB_White.svg';
import { wordmarkImage } from '../../components/page/style.css';
import { Link } from 'react-router-dom';
import { getHomeRulesPath, getSpaceLobbyPath, getSpaceRoomPath } from '../pathUtils';
import { getCanonicalAliasOrRoomId } from '../../utils/matrix';

export function WelcomePage() {
  // Access the computed style of the root element
  const bodyElement = document.body;
  const computedStyle = getComputedStyle(bodyElement);
  const cssValue = computedStyle.getPropertyValue('--wordmark-image-url').trim();

  // Extract the URL if it's wrapped in `url()`
  const urlMatch = cssValue.match(/url\(["']?([^"']*)["']?\)/);
  const themeImageUrl = urlMatch && urlMatch[1] ? urlMatch[1] : cssValue;

  return (
    <Page>
      <Box
        grow="Yes"
        style={{ padding: config.space.S400, paddingBottom: config.space.S700 }}
        alignItems="Center"
        justifyContent="Center"
      >
        <PageHeroSection>
          <PageHero
            icon={<img width={300} src={themeImageUrl} alt="Allstora" />}
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
            </Box>
          </PageHero>
        </PageHeroSection>
      </Box>
    </Page>
  );
}
