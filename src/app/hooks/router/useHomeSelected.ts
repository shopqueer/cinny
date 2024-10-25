import { useMatch } from 'react-router-dom';
import {
  getHomeCreatePath,
  getHomeJoinPath,
  getHomePath,
  getHomeRulesPath,
  getHomeSearchPath,
  getHomeWelcomePath,
} from '../../pages/pathUtils';

export const useHomeSelected = (): boolean => {
  const homeMatch = useMatch({
    path: getHomePath(),
    caseSensitive: true,
    end: false,
  });

  return !!homeMatch;
};

export const useHomeCreateSelected = (): boolean => {
  const match = useMatch({
    path: getHomeCreatePath(),
    caseSensitive: true,
    end: false,
  });

  return !!match;
};

export const useHomeJoinSelected = (): boolean => {
  const match = useMatch({
    path: getHomeJoinPath(),
    caseSensitive: true,
    end: false,
  });

  return !!match;
};

export const useHomeSearchSelected = (): boolean => {
  const match = useMatch({
    path: getHomeSearchPath(),
    caseSensitive: true,
    end: false,
  });

  return !!match;
};

export const useHomeRulesSelected = (): boolean => {
  const match = useMatch({
    path: getHomeRulesPath(),
    caseSensitive: true,
    end: false,
  });

  return !!match;
};

export const useHomeWelcomeSelected = (): boolean => {
  const match = useMatch({
    path: getHomeWelcomePath(),
    caseSensitive: true,
    end: false,
  });

  return !!match;
};
