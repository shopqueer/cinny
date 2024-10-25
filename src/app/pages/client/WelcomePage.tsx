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
                Welcome to Kiki! As a Beta user, you’re one of the first to join the conversation.
                Here’s how to get started:
                <ol>
                  <li>
                    <Link to={getHomeRulesPath()}>Check out our Community Guidelines.</Link>
                  </li>
                  <li>
                    <Link
                      to={getSpaceRoomPath(
                        '!XJD4PLdFjSyHBvvKIh:beta-community.allstora.com',
                        '!Bfo5b9TeyGfT65X76P:beta-community.allstora.com'
                      )}
                    >
                      Introduce Yourself!
                    </Link>
                  </li>
                  <li>
                    <Link to={getSpaceLobbyPath('!XJD4PLdFjSyHBvvKIh:beta-community.allstora.com')}>
                      Browse our Discussion Rooms.
                    </Link>
                  </li>
                </ol>
                Once you’ve gotten to know Kiki a little bit, we might reach out to ask you for some
                feedback on your experience through a survey or a video chat. If you’re willing to
                spill a little tea for us, we’ll thank you with a $20 gift card. And if you’ve got
                feedback already, please let us know in the Kiki Feedback room.
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
