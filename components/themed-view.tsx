import { type ViewProps } from 'react-native';
import Animated from 'react-native-reanimated';

import { useThemeColor } from '@/hooks/use-theme-color';
//T ODO: needed file? Clean up unnecessary code
export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <Animated.View style={[{ backgroundColor }, style]} {...otherProps} />;
}
