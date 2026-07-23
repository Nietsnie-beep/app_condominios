import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { GlassCard } from '../components/GlassCard';
import { images, vehicles } from '../data/stitchContent';
import { colors } from '../theme/colors';

type Tab = 'pedestrian' | 'vehicle';

export function AccessScreen() {
  const [tab, setTab] = useState<Tab>('pedestrian');

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Control de acceso</Text>
      <View style={styles.tabs}>
        <Pressable onPress={() => setTab('pedestrian')} style={[styles.tab, tab === 'pedestrian' && styles.activeTab]}>
          <Text style={[styles.tabText, tab === 'pedestrian' && styles.activeTabText]}>Acceso peatonal</Text>
        </Pressable>
        <Pressable onPress={() => setTab('vehicle')} style={[styles.tab, tab === 'vehicle' && styles.activeTab]}>
          <Text style={[styles.tabText, tab === 'vehicle' && styles.activeTabText]}>Placas vehiculares</Text>
        </Pressable>
      </View>

      {tab === 'pedestrian' ? <PedestrianCredential /> : <VehiclePlates />}
    </ScrollView>
  );
}

function PedestrianCredential() {
  return (
    <View style={styles.stack}>
      <GlassCard style={styles.credential}>
        <View style={styles.qrFrame}>
          <Image source={{ uri: images.qr }} style={styles.qr} />
        </View>
        <Text style={styles.person}>Abraham J. Peterson</Text>
        <Text style={styles.subtle}>Penthouse 402 - Torre Alpha</Text>
        <View style={styles.activePill}>
          <View style={styles.dot} />
          <Text style={styles.activeText}>CREDENCIAL ACTIVA</Text>
        </View>
        <View style={styles.infoGrid}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>VIGENTE HASTA</Text>
            <Text style={styles.infoValue}>31 dic. 2024</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>LÍMITE DE VISITAS</Text>
            <Text style={styles.infoValue}>Quedan 4</Text>
          </View>
        </View>
      </GlassCard>
      <View style={styles.actionRow}>
        <Action label="COMPARTIR LLAVE" />
        <Action label="HISTORIAL" />
      </View>
    </View>
  );
}

function VehiclePlates() {
  return (
    <View style={styles.stack}>
      <View style={styles.warning}>
        <MaterialCommunityIcons name="information-outline" size={20} color={colors.error} />
        <Text style={styles.warningText}>Tu residencia ya alcanzó el número máximo de placas vehiculares autorizadas.</Text>
      </View>
      {vehicles.map((vehicle) => (
        <GlassCard key={vehicle.plate} style={styles.vehicleCard}>
          <View style={styles.vehicleHeader}>
            <View>
              <View style={styles.vehicleTitleRow}>
                <View style={styles.vehicleIcon}>
                  <MaterialCommunityIcons name="car-outline" size={24} color={colors.primary} />
                </View>
                <Text style={styles.plate}>{vehicle.plate}</Text>
              </View>
              <Text style={styles.subtle}>{vehicle.detail}</Text>
            </View>
            <Text style={styles.vehicleStatus}>ACTIVA</Text>
          </View>
          <View style={styles.vehicleActions}>
            <SmallButton label="EDITAR" />
            <SmallButton label="DESACTIVAR" />
            <SmallButton label="ELIMINAR" danger />
          </View>
        </GlassCard>
      ))}
      <Pressable disabled style={styles.disabledButton}>
        <MaterialCommunityIcons name="plus-circle-outline" size={20} color={colors.outline} />
        <Text style={styles.disabledText}>AGREGAR PLACA</Text>
      </Pressable>
    </View>
  );
}

function Action({ label }: { label: string }) {
  return (
    <GlassCard style={styles.action}>
      <MaterialCommunityIcons name={label === 'COMPARTIR LLAVE' ? 'share-variant-outline' : 'history'} size={22} color={colors.primary} />
      <Text style={styles.actionText}>{label}</Text>
    </GlassCard>
  );
}

function SmallButton({ label, danger }: { label: string; danger?: boolean }) {
  return (
    <Pressable style={[styles.smallButton, danger && styles.dangerButton]}>
      <MaterialCommunityIcons
        name={label === 'EDITAR' ? 'pencil-outline' : label === 'DESACTIVAR' ? 'block-helper' : 'trash-can-outline'}
        size={15}
        color={danger ? colors.error : colors.onSurfaceVariant}
      />
      <Text style={[styles.smallButtonText, danger && styles.dangerText]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
    paddingBottom: 112,
  },
  title: {
    color: colors.onSurface,
    fontSize: 28,
    fontWeight: '900',
    marginTop: 24,
  },
  tabs: {
    borderBottomColor: colors.outlineVariant,
    borderBottomWidth: 1,
    flexDirection: 'row',
    gap: 26,
    marginTop: 22,
  },
  tab: {
    paddingBottom: 12,
  },
  activeTab: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  tabText: {
    color: colors.outline,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  activeTabText: {
    color: colors.primary,
  },
  stack: {
    gap: 18,
    marginTop: 24,
  },
  credential: {
    alignItems: 'center',
    padding: 28,
  },
  qrFrame: {
    backgroundColor: colors.onPrimary,
    borderColor: 'rgba(46, 97, 132, 0.14)',
    borderRadius: 28,
    borderWidth: 3,
    height: 260,
    padding: 18,
    width: 260,
  },
  qr: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%',
  },
  person: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: '900',
    marginTop: 24,
  },
  subtle: {
    color: colors.outline,
    fontSize: 14,
    marginTop: 4,
  },
  activePill: {
    alignItems: 'center',
    backgroundColor: 'rgba(135, 232, 254, 0.24)',
    borderRadius: 16,
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  dot: {
    backgroundColor: colors.secondary,
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  activeText: {
    color: colors.onSecondaryContainer,
    fontSize: 10,
    fontWeight: '900',
  },
  infoGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 28,
  },
  infoBox: {
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: 16,
    flex: 1,
    padding: 14,
  },
  infoLabel: {
    color: colors.outline,
    fontSize: 10,
    fontWeight: '900',
  },
  infoValue: {
    color: colors.onSurface,
    fontSize: 15,
    fontWeight: '800',
    marginTop: 4,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 14,
  },
  action: {
    alignItems: 'center',
    flex: 1,
    gap: 8,
    padding: 18,
  },
  actionText: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '900',
  },
  warning: {
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 218, 214, 0.34)',
    borderColor: 'rgba(186, 26, 26, 0.18)',
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 16,
  },
  vehicleTitleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  vehicleIcon: {
    alignItems: 'center',
    backgroundColor: 'rgba(46, 97, 132, 0.08)',
    borderRadius: 12,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  warningText: {
    color: colors.onErrorContainer,
    fontSize: 14,
    lineHeight: 20,
  },
  vehicleCard: {
    padding: 20,
  },
  vehicleHeader: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  plate: {
    color: colors.onSurface,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 2,
  },
  vehicleStatus: {
    color: colors.onSecondaryContainer,
    fontSize: 10,
    fontWeight: '900',
  },
  vehicleActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 20,
  },
  smallButton: {
    alignItems: 'center',
    borderColor: colors.outlineVariant,
    borderRadius: 12,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  dangerButton: {
    borderColor: 'rgba(186, 26, 26, 0.28)',
  },
  smallButtonText: {
    color: colors.onSurfaceVariant,
    fontSize: 10,
    fontWeight: '900',
  },
  dangerText: {
    color: colors.error,
  },
  disabledButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(113, 120, 126, 0.2)',
    borderRadius: 18,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    padding: 18,
  },
  disabledText: {
    color: colors.outline,
    fontSize: 12,
    fontWeight: '900',
  },
});
