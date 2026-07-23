import { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export function GlassCard({ children, style }: Props) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.glass,
    borderColor: 'rgba(255, 255, 255, 0.75)',
    borderRadius: 24,
    borderWidth: 1,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
  },
});
