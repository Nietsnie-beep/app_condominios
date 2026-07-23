import { Image, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { images } from '../data/stitchContent';
import { colors } from '../theme/colors';

export function AppHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.identity}>
        <Image source={{ uri: images.resident }} style={styles.avatar} />
        <Text style={styles.title}>Espacio Marina</Text>
      </View>
      <View style={styles.badge}>
        <MaterialCommunityIcons name="badge-account-outline" size={22} color={colors.primary} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: 'rgba(249, 249, 252, 0.92)',
    borderBottomColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 72,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  identity: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  avatar: {
    backgroundColor: colors.surfaceContainerHigh,
    borderColor: colors.primaryContainer,
    borderRadius: 20,
    borderWidth: 1,
    height: 40,
    width: 40,
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '800',
  },
  badge: {
    alignItems: 'center',
    borderColor: colors.primary,
    borderRadius: 18,
    borderWidth: 1,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
});
