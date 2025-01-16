import { Icons, IconSrc } from 'folds';
import { CSSProperties } from 'react';

export const CUSTOM_CLUBS: Record<string, CustomClub> = {
  // RuPaul's Book Club
  '!cwvocyDXRTKBDZkXKb:kiki-server.allstora.com': {
    lobbyLogo: {
      src: '/public/img/rupaul_logo.png',
      alt: 'RuPaul Logo',
      invertOnDark: true,
    },
    roomIcon: Icons.Heart,
    backgroundImage: {
      src: '/public/img/rupaul_background.png',
      position: 'bottom left',
      repeat: 'no-repeat',
      size: 'cover',
    },
  },
};

export type CustomClub = {
  lobbyLogo?: {
    src: string;
    alt: string;
    invertOnDark: boolean;
  };
  roomIcon?: IconSrc;
  backgroundImage?: {
    src: string;
    position: CSSProperties['backgroundPosition'];
    repeat: CSSProperties['backgroundRepeat'];
    size: CSSProperties['backgroundSize'];
  };
};
