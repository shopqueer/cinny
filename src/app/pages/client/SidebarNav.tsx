import React, { MouseEventHandler, useRef } from 'react';
import { Icon, Icons, Scroll } from 'folds';

import { useNavigate } from 'react-router-dom';

import {
  Sidebar,
  SidebarContent,
  SidebarStackSeparator,
  SidebarStack,
  SidebarAvatar,
  SidebarItemTooltip,
  SidebarItem,
} from '../../components/sidebar';
import { DirectTab, HomeTab, SpaceTabs, InboxTab, UserTab, UnverifiedTab } from './sidebar';
import { openSearch } from '../../../client/action/navigation';
import { _RULES_PATH, HOME_RULES_PATH } from '../paths';
import { ScreenSize, useScreenSizeContext } from '../../hooks/useScreenSize';

export function SidebarNav() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarContent
        scrollable={
          <Scroll ref={scrollRef} variant="Background" size="0">
            <SidebarStack>
              <HomeTab />
              <DirectTab />
            </SidebarStack>
            <SpaceTabs scrollRef={scrollRef} />
            {/* Explore + add space tab is confusing for users since we want them to just focus on their book club spaces 
            <SidebarStack>
              <ExploreTab />
              <SidebarItem>
                <SidebarItemTooltip tooltip="Create Space">
                  {(triggerRef) => (
                    <SidebarAvatar
                      as="button"
                      ref={triggerRef}
                      outlined
                      onClick={() => openCreateRoom(true)}
                    >
                      <Icon src={Icons.Plus} />
                    </SidebarAvatar>
                  )}
                </SidebarItemTooltip>
              </SidebarItem>
            </SidebarStack> */}
          </Scroll>
        }
        sticky={
          <>
            <SidebarStackSeparator />
            <SidebarStack>
              <SidebarItem>
                <SidebarItemTooltip tooltip="Search">
                  {(triggerRef) => (
                    <SidebarAvatar
                      as="button"
                      ref={triggerRef}
                      outlined
                      onClick={() => openSearch()}
                    >
                      <Icon src={Icons.Search} />
                    </SidebarAvatar>
                  )}
                </SidebarItemTooltip>
              </SidebarItem>

              <UnverifiedTab />

              <InboxTab />
              <UserTab />
            </SidebarStack>
          </>
        }
      />
    </Sidebar>
  );
}
