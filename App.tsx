import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AppStack} from './app/navigator/app_navigator';
import {ToastProvider} from 'react-native-toast-notifications';
import {LogBox} from 'react-native';
import {getDatabase, ref, set} from 'firebase/database';

export const App: React.FC = () => {
  const queryClient = new QueryClient();
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ToastProvider>
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </ToastProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
