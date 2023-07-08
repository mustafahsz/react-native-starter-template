import {
  createNavigationContainerRef,
  InitialState,
  NavigationState,
  PartialState,
} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {BackHandler} from 'react-native';
import {Storage} from '../utils/storage';
import {AppNavigatorParamList} from './app_navigator';

export const navigationRef = createNavigationContainerRef();

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(
  state: NavigationState | PartialState<NavigationState>,
): any {
  const route = state.routes[state.index!];

  // Found the active route -- return the name
  if (!route.state) return route.name;

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state);
}

/**
 * Gets the current screen params from any navigation state.
 */
export function getActiveRouteParams(
  state: NavigationState | PartialState<NavigationState>,
): Readonly<object | undefined> {
  const route = state.routes[state.index!];

  // Found the active route -- return the params
  if (!route.state) return route.params;

  // Recursive call to deal with nested routers
  return getActiveRouteParams(route.state);
}

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(
  canExit: (routeName: keyof AppNavigatorParamList) => boolean,
) {
  const canExitRef = useRef(canExit);

  useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);

  useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false;
      }

      // grab the current route
      const routeName = getActiveRouteName(navigationRef.getRootState());

      // are we allowed to exit?
      if (canExitRef.current(routeName)) {
        // let the system know we've not handled this event
        return false;
      }

      // we can't exit, so let's turn this into a back action
      if (navigationRef.canGoBack()) {
        navigationRef.goBack();
        return true;
      }

      return false;
    };

    // Subscribe when we come to life
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // Unsubscribe when we're done
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);
}

/**
 * Custom hook for persisting navigation state.
 */
export function useNavigationPersistence(
  storage: typeof Storage,
  persistenceKey: string,
) {
  const [initialNavigationState, setInitialNavigationState] =
    useState<InitialState>();

  // This feature is particularly useful in development mode.
  // It is selectively enabled in development mode with
  // the following approach. If you'd like to use navigation persistence
  // in production, remove the __DEV__ and set the state to true
  const [isRestored, setIsRestored] = useState(!__DEV__);

  const routeNameRef = useRef<string | undefined>();

  const onNavigationStateChange = (state: any) => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state);

    if (previousRouteName !== currentRouteName) {
      // track screens.
      console.log('new Route: ' + currentRouteName);
    }

    // Save the current route name for later comparison
    routeNameRef.current = currentRouteName;

    // Persist state to storage
    storage.save(persistenceKey, state);
  };

  const restoreState = useCallback(async () => {
    try {
      const state = await storage.load<InitialState>(persistenceKey);
      if (state) setInitialNavigationState(state);
    } finally {
      setIsRestored(true);
    }
  }, [persistenceKey, storage]);

  useEffect(() => {
    if (!isRestored) restoreState();
  }, [isRestored, restoreState]);

  return {
    onNavigationStateChange,
    restoreState,
    isRestored,
    initialNavigationState,
  };
}

/**
 * use this to navigate to navigate without the navigation
 * prop. If you have access to the navigation prop, do not use this.
 * More info: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 */
export function navigate<RouteName extends keyof AppNavigatorParamList>(
  ...args: undefined extends AppNavigatorParamList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params: AppNavigatorParamList[RouteName]]
    : [screen: RouteName, params: AppNavigatorParamList[RouteName]]
) {
  if (navigationRef.isReady()) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigationRef.navigate(...args);
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function resetRoot(
  params:
    | PartialState<NavigationState<AppNavigatorParamList>>
    | NavigationState<AppNavigatorParamList> = {
    index: 0,
    routes: [],
  },
) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot(params);
  }
}
