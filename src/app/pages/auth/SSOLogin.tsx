import { Avatar, AvatarImage, Box, Button, Text } from 'folds';
import { IIdentityProvider, createClient } from 'matrix-js-sdk';
import React, { useMemo } from 'react';
import { useAutoDiscoveryInfo } from '../../hooks/useAutoDiscoveryInfo';

type SSOLoginProps = {
  providers: IIdentityProvider[];
  asIcons?: boolean;
  redirectUrl: string;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SSOLogin({ providers, redirectUrl, asIcons }: SSOLoginProps) {
  const discovery = useAutoDiscoveryInfo();
  const baseUrl = discovery['m.homeserver'].base_url;
  const mx = useMemo(() => createClient({ baseUrl }), [baseUrl]);

  // If the site is running in an iframe we 
  let getSSOIdUrl = null;

  const hardcodedRedirectUrl = "https://allstora.com/pages/kiki"
  function isInIframe() {
    try {
      // Check if window is not the same as window.parent
      return window !== window.parent;
    } catch (e) {
      // If accessing window.parent throws an error, we are in a cross-origin iframe
      return true;
    }
  }
  const iframe = isInIframe();
  if (iframe === true) {
    getSSOIdUrl = (ssoId: string): string => mx.getSsoLoginUrl(hardcodedRedirectUrl, 'sso', ssoId);
  }
  else {
    getSSOIdUrl = (ssoId: string): string => mx.getSsoLoginUrl(redirectUrl, 'sso', ssoId);
  }

  const anyAsBtn = providers.find(
    (provider) => !provider.icon || !mx.mxcUrlToHttp(provider.icon, 96, 96, 'crop', false)
  );

  return (
    <Box justifyContent="Center" gap="600" wrap="Wrap">
      {providers.map((provider) => {
        const { id, name, icon } = provider;
        const iconUrl = icon && mx.mxcUrlToHttp(icon, 96, 96, 'crop', false);

        const buttonTitle = `Join the conversation`;

        if (!anyAsBtn && iconUrl && asIcons) {
          return (
            <Avatar
              style={{ cursor: 'pointer' }}
              key={id}
              as="a"
              href={getSSOIdUrl(id)}
              aria-label={buttonTitle}
              size="300"
              radii="300"
            >
              <AvatarImage src={iconUrl} alt={name} title={buttonTitle} />
            </Avatar>
          );
        }

        return (
          <><div>{redirectUrl}</div><Button
            style={{ width: '100%' }}
            key={id}
            as="a"
            href={getSSOIdUrl(id)}
            size="500"
            variant="Secondary"
            fill="Soft"
            outlined
            target={iframe ? '_blank' : undefined}
            before={iconUrl && (
              <Avatar size="200" radii="300">
                <AvatarImage src={iconUrl} alt={name} />
              </Avatar>
            )}
          >
            <Text align="Center" size="B500" truncate>
              {buttonTitle}
            </Text>
          </Button></>
        );
      })}
    </Box >
  );
}
