import * as React from 'react';
import {StatusBarProps} from 'react-native';
import {FocusAwareStatusBar} from '../focus-aware-status-bar/focus-aware-status-bar';

export const DefaultStatusBar: React.FC<StatusBarProps> = props => {
  return (
    <FocusAwareStatusBar
      barStyle={'light-content'}
      translucent
      backgroundColor="transparent"
      {...props}
    />
  );
};
