import React from 'react';
import { Box, Button, Icon, Icons, Text, config, toRem } from 'folds';
import { Page, PageHero, PageHeroSection } from '../../components/page';
import WordmarkBlackSVG from '../../../../public/res/svg/Allstora_Wordmark_RGB_Black.svg';
import WordmarkWhiteSVG from '../../../../public/res/svg/Allstora_Wordmark_RGB_White.svg';
import { wordmarkImage } from '../../components/page/style.css';

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
                Use the Book Club and Allstora General spaces on the left nav bar to join the
                conversation!
              </Box>
            </Box>
          </PageHero>
        </PageHeroSection>
      </Box>
    </Page>
  );
}
