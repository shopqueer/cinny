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
        <p>
          {' '}
          Welcome to the Official Community Chat [space?] for Allstora! We look forward to seeing
          you become a regular here! However, please ensure that you are familiar with our Server
          Guidelines! Your entrance into our server confirms you accept the following rules as well
          as agree to our Terms of Service{' '}
        </p>
        <p>
          Rule 1: Stay on topic! Please visit our Channel Titles to become more familiar with our
          server. It will help you find the appropriate places for specific discussions. Incorrect
          and/or inappropriate content are subjected to removal!
        </p>
        Rule 2: Be mindful of others! Do not spam or flood discussions with consecutive separate
        messages of single letters, words, images, emoticons, or large blocks of text in one or
        multiple channels. Other Trailblazers are also sharing this server, and we must be
        considerate of each other. Certain links are blacklisted to help enforce our guidelines.
        <p>
          2A. Do not send unsolicited DMs to others. <br />
          2B. Advertising under the objective to boost personal growth rather than contribute to our
          community is prohibited. However, if you are interested in sharing your project, please do
          so within reasonable frequencies within our relevant media channels.
        </p>
        <p>
          Rule 3: Be respectful to each other! It is everyones responsibility to keep this a safe
          and positive community. Regardless of ethnicity, religion, gender identity, romantic or
          sexual orientation, ability, social class, or mental health, everyone is welcome on this
          server. Offensive content or harassment on this basis, either personal or generalized,
          will not be tolerated. Please be respectful of your fellow server members. If you feel
          unsafe or have an issue within the community and need to contact a moderator, please send
          our Moderation bot a direct message.
          <br />
          3A. Content that affects others experience, including but not limited to: baiting,
          fearmongering, misinformation, and derailing from the original discussions intention, are
          subjected to removal.
          <br />
          3B. When commenting about others content, ensure your criticism is reasonable and
          constructive. Hostile or irrational remarks will not go unnoticed from restriction.
        </p>
        <p>
          Rule 4: Keep our server safe! Distribution of pornographic, offensive or uncomfortable, or
          NSFW content will NOT be tolerated. Following along with Rule 3, do not share the
          following examples: hentai, gore, shock media, etc. There is also a ZERO tolerance policy
          for the sexualization of underage characters or people. 4A. Any form of content, from text
          to media, that suggests normalization or justification of sexualizing minors will result
          in an immediate ban without appeal. There is no room for jokes or maneuvering.
          <br />
          4B. We encourage you to add profile photos, names, and pronouns that help other members
          get to know you. Keep in mind that these must also abide by the rules.
        </p>
        <p>
          Rule 5: Access to Book Club Channels Accessing content for any of Allstoras Book Clubs is
          contingent on having an active subscription. Should you decide to make changes to your
          account or cancel a subscription, you will also lose access to the content and discussions
          taking place on that book clubs channel. Any issues regarding channel access can be
          directed to #support.
        </p>
        <p>
          Rule 6: Do not backseat moderate or impersonate! Doctoring content to undermine or
          impersonate as a moderator or Allstora Staff is prohibited. If there is a report youd like
          to submit, please do not hesitate to contact Moderators directly via #moderator!
        </p>
        <p>
          Rule 7: Respect the copyright of others! Please give credit out of courtesy. Third-party
          sites that do not easily identify original creators will not be accepted. Reposts not
          authorized by the original creator(s) will be removed. If the creators platform/name
          cannot be found, please do not share.
        </p>
        <p>
          Rule 8: How to contact Customer Support? ⁠ If you are having any issues in regards to
          access to channels or the community chat as a whole, feel free to message in #support. If
          you are having any other issues with your account or subscription, please email
          info@allstora.com. They are the proper department to answer your inquiries related to
          Payment, Account issues, or Feedback.
        </p>
        <p>
          Rule 9: Personal Information We ask that you do not share any personal information on this
          server that you would like to keep private. Allstora is not responsible in the event that
          you share personal information. Keep eachother safe in order to keep our community safe!
        </p>
        <p>
          Final Thoughts Even if a specific rule is not explicitly stated nor is this list
          considered exhaustive, moderators and Allstora Staff reserve final interpretation.
          Decisions will be based on the general principles that ultimately promote healthy
          communities as well as the assumption that members act in good faith. Guidelines may be
          amended based on future developments and feedback. Offenses that disrupt our community may
          result in a temporary mute, permanent mute, or ban - depending on the severity and
          repetition of the offense. Moderator actions will not be debated publicly nor discussed
          with other Subscribers that are not directly involved with corresponding incidents. If you
          seek clarification about a specific action related to you, please open an inquiry with
          #moderator and an available Moderator will review. Lastly, understand that personal
          opinions expressed by the Mod Team and Staff are private and should NOT be taken as an
          official Allstora statement.
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
