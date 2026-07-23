import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { images } from '../data/stitchContent';
import { colors } from '../theme/colors';

export function IntercomScreen() {
  return (
    <ImageBackground source={{ uri: images.gate }} style={styles.screen} imageStyle={styles.image}>
      <View style={styles.scrim} />
      <View style={styles.top}>
        <View style={styles.statusPill}>
          <View style={styles.redDot} />
          <Text style={styles.statusText}>Llamada entrante</Text>
        </View>
        <Text style={styles.title}>Entrega - Uber Eats</Text>
        <Text style={styles.location}>Acceso principal</Text>
      </View>

      <View style={styles.center}>
        <View style={styles.ring}>
          <MaterialCommunityIcons name="bell-ring" size={34} color={colors.onPrimary} />
        </View>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.openGate}>
          <MaterialCommunityIcons name="gate-open" size={34} color={colors.onPrimary} />
        </Pressable>
        <Text style={styles.openGateText}>ABRIR PORTÓN</Text>

        <View style={styles.callRow}>
          <CallAction label="SILENCIO" />
          <CallAction label="RECHAZAR" danger large />
          <CallAction label="ACEPTAR" accept large />
          <CallAction label="FOTO" />
        </View>
      </View>
    </ImageBackground>
  );
}

function CallAction({ label, danger, accept, large }: { label: string; danger?: boolean; accept?: boolean; large?: boolean }) {
  const icon = label === 'SILENCIO' ? 'microphone-off' : label === 'RECHAZAR' ? 'phone-hangup' : label === 'ACEPTAR' ? 'phone' : 'camera-outline';

  return (
    <View style={styles.callAction}>
      <Pressable style={[styles.callButton, large && styles.largeButton, danger && styles.reject, accept && styles.accept]}>
        <MaterialCommunityIcons name={icon} size={large ? 30 : 24} color={colors.onPrimary} />
      </Pressable>
      <Text style={styles.callLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 112,
    paddingHorizontal: 24,
    paddingTop: 52,
  },
  image: {
    resizeMode: 'cover',
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.36)',
  },
  top: {
    alignItems: 'center',
  },
  statusPill: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.64)',
    borderColor: 'rgba(255, 255, 255, 0.55)',
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  redDot: {
    backgroundColor: colors.error,
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  statusText: {
    color: colors.onSurfaceVariant,
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  title: {
    color: colors.onPrimary,
    fontSize: 36,
    fontWeight: '900',
    lineHeight: 42,
    marginTop: 20,
    textAlign: 'center',
  },
  location: {
    color: 'rgba(255, 255, 255, 0.82)',
    fontSize: 18,
    marginTop: 8,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.32)',
    borderColor: 'rgba(255, 255, 255, 0.44)',
    borderRadius: 50,
    borderWidth: 1,
    height: 96,
    justifyContent: 'center',
    width: 96,
  },
  actions: {
    alignItems: 'center',
  },
  openGate: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    width: 80,
  },
  openGateText: {
    color: colors.onPrimary,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 12,
  },
  callRow: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 18,
    justifyContent: 'center',
    marginTop: 28,
    width: '100%',
  },
  callAction: {
    alignItems: 'center',
    flex: 1,
  },
  callButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.34)',
    borderColor: 'rgba(255, 255, 255, 0.42)',
    borderRadius: 28,
    borderWidth: 1,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  largeButton: {
    borderRadius: 36,
    height: 72,
    width: 72,
  },
  reject: {
    backgroundColor: colors.error,
    borderColor: colors.error,
  },
  accept: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  callLabel: {
    color: 'rgba(255, 255, 255, 0.78)',
    fontSize: 10,
    fontWeight: '900',
    marginTop: 10,
  },
});
