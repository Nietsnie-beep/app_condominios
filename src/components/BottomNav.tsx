import { Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '../theme/colors';

export type ScreenName = 'Home' | 'Access' | 'Bookings' | 'Intercom' | 'Profile';

type IconName = React.ComponentProps<typeof MaterialCommunityIcons>['name'];

const items: Array<{ screen: ScreenName; icon: IconName; label: string }> = [
  { screen: 'Home', icon: 'home-outline', label: 'Inicio' },
  { screen: 'Access', icon: 'qrcode-scan', label: 'Acceso' },
  { screen: 'Bookings', icon: 'calendar-star', label: 'Reservas' },
  { screen: 'Intercom', icon: 'phone-in-talk-outline', label: 'Interfón' },
  { screen: 'Profile', icon: 'account-outline', label: 'Perfil' },
];

type Props = {
  active: ScreenName;
  onChange: (screen: ScreenName) => void;
};

export function BottomNav({ active, onChange }: Props) {
  return (
    <View style={styles.nav}>
      {items.map((item) => {
        const selected = active === item.screen;
        return (
          <Pressable key={item.screen} onPress={() => onChange(item.screen)} style={styles.item}>
            <MaterialCommunityIcons name={item.icon} size={24} color={selected ? colors.primary : colors.outline} />
            <Text style={[styles.label, selected && styles.active]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    alignItems: 'center',
    backgroundColor: 'rgba(249, 249, 252, 0.94)',
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderWidth: 1,
    bottom: 0,
    flexDirection: 'row',
    height: 84,
    justifyContent: 'space-around',
    left: 0,
    paddingBottom: 12,
    position: 'absolute',
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
  },
  item: {
    alignItems: 'center',
    minWidth: 58,
    paddingVertical: 8,
  },
  label: {
    color: colors.outline,
    fontSize: 10,
    fontWeight: '800',
    marginTop: 6,
    textTransform: 'uppercase',
  },
  active: {
    color: colors.primary,
  },
});
