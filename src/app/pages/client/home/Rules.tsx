import React, { RefObject, useRef } from 'react';
import { ScrollTopContainer } from '../../../components/scroll-top-container';
import { Box, Icon, IconButton, Icons, Scroll, Text } from 'folds';
import { useHomeRooms } from './useHomeRooms';
import { ScreenSize, useScreenSizeContext } from '../../../hooks/useScreenSize';
import { Page, PageContent, PageContentCenter, PageHeader } from '../../../components/page';
import { BackRouteHandler } from '../../../components/BackRouteHandler';

type RulesProps = {
  scrollRef: RefObject<HTMLDivElement>;
};

export function Rules({ scrollRef }: RulesProps) {
  const scrollTopAnchorRef = useRef<HTMLDivElement>(null);

  return (
    <Box direction="Column" gap="700">
      <ScrollTopContainer scrollRef={scrollRef} anchorRef={scrollTopAnchorRef}>
        <IconButton
          variant="SurfaceVariant"
          radii="Pill"
          outlined
          size="300"
          aria-label="Scroll to Top"
        >
          <Icon src={Icons.ChevronTop} size="300" />
        </IconButton>
      </ScrollTopContainer>
      <div id="rules">
        <h1>Welcome to Kiki, the community chat room for Allstora’s Book Clubs!</h1>
        <p>
          We look forward to seeing you become a regular here. By signing up for our platform, you
          accept the following rules, and agree to our{' '}
          <a href="https://allstora.com/pages/terms-and-conditions">Terms of Service</a>.
        </p>

        <h2>Rule 1: Stay on topic</h2>
        <p>
          Our rooms are separated into specific topics, and we ask that you respect the purpose of
          those rooms. Please be mindful of whether you're discussing a book in a room that allows
          spoilers or not.
        </p>

        <h2>Rule 2: Be respectful</h2>
        <p>
          Regardless of ethnicity, religion, gender identity, romantic or sexual orientation,
          ability, social class, or mental health, everyone is welcome in Kiki. Harassment or
          bigotry, either personal or generalized, will not be tolerated. If you feel unsafe or have
          an issue within the community, please send our Moderation bot a direct message and a Staff
          Member will help you as soon as possible.
        </p>
        <ul>
          <li>
            <strong>2B:</strong> Please ensure your comments and criticism are reasonable and
            constructive. Hostile remarks are subject to removal.
          </li>
          <li>
            <strong>2C:</strong> Do not spam or flood discussions with consecutive messages of
            single letters, words, images, emoticons, or large blocks of text. Certain links are
            blacklisted to help enforce our guidelines.
          </li>
          <li>
            <strong>2D:</strong> Personal advertising is prohibited.
          </li>
        </ul>

        <h2>Rule 3: Keep our server safe</h2>
        <p>
          Distribution of pornographic, offensive, or NSFW content will NOT be tolerated. This
          includes, but is not limited to, hentai, gore, or shock media.
        </p>
        <ul>
          <li>
            <strong>3A:</strong> Any form of content that sexualizes minors, even as a joke or
            sarcasm, will result in an immediate ban without appeal. There is a zero-tolerance
            policy for the sexualization of underage characters or people.
          </li>
          <li>
            <strong>3B:</strong> We encourage you to add profile photos, names, and pronouns that
            help other members get to know you. Keep in mind that these must also abide by the
            rules.
          </li>
        </ul>

        <h2>Rule 4: Kiki Access</h2>
        <p>
          Access to Book Club content on Kiki is contingent on having an active subscription. Should
          you make changes to your account or cancel a subscription, you may also lose access to the
          content and discussions taking place on that Book Club’s Space. Any issues regarding Book
          Club access can be directed to <a href="mailto:info@allstora.com">info@allstora.com</a>.
        </p>

        <h2>Rule 5: Do not backseat moderate or impersonate</h2>
        <p>
          Impersonating a moderator or Allstora Staff is prohibited. If you believe someone is
          impersonating a moderator or staff member, submit a report or email{' '}
          <a href="mailto:info@allstora.com">info@allstora.com</a>.
        </p>

        <h2>Rule 6: Respect copyright</h2>
        <p>
          Please credit any artist whose work you share. Third-party sites that do not easily
          identify original creators may be de-linked. If the creator’s platform/name cannot easily
          be found, please do not share.
        </p>

        <h2>Rule 7: Personal Information</h2>
        <p>
          Allstora is not responsible if you share personal information. Do not share any personal
          information that you would like to keep private. Keep each other safe in order to keep our
          community safe!
        </p>

        <h2>Rule 8: Everything Else</h2>
        <p>
          If a rule is not explicitly stated, moderators and Allstora Staff reserve final judgment
          on what constitutes punishable behavior. Guidelines may be amended at any time. Offenses
          that disrupt our community may result in a temporary or permanent ban, depending on the
          severity and repetition of the offense.
        </p>
        <p>
          If you seek clarification about a specific action related to you, please message a
          moderator or info@allstora.com. Understand that personal opinions expressed by the Mod
          Team and Staff are private and should NOT be taken as an official Allstora statement.
        </p>
        <p>
          If you are having any issues, feel free to contact a #moderator or email{' '}
          <a href="mailto:info@allstora.com">info@allstora.com</a>.
        </p>
      </div>
    </Box>
  );
}

export function HomeRules() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const screenSize = useScreenSizeContext();

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
            {screenSize !== ScreenSize.Mobile && <Icon size="400" src={Icons.Flag} />}
            <Text size="H3" truncate>
              Rules
            </Text>
          </Box>
          <Box grow="Yes" basis="No" />
        </Box>
      </PageHeader>
      <Box style={{ position: 'relative' }} grow="Yes">
        <Scroll ref={scrollRef} hideTrack visibility="Hover">
          <PageContent>
            <PageContentCenter>
              <Rules scrollRef={scrollRef} />
            </PageContentCenter>
          </PageContent>
        </Scroll>
      </Box>
    </Page>
  );
}
