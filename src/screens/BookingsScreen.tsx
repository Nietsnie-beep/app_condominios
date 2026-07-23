import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { GlassCard } from '../components/GlassCard';
import { amenities } from '../data/stitchContent';
import { colors } from '../theme/colors';

export function BookingsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.eyebrow}>EXPERIENCIA EXCLUSIVA</Text>
      <Text style={styles.title}>Reservación de amenidades</Text>
      <Text style={styles.copy}>Reserva tus momentos de tranquilidad y actividad dentro de nuestro enclave costero privado.</Text>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Amenidades disponibles</Text>
        <View style={styles.livePill}>
          <View style={styles.dot} />
          <Text style={styles.liveText}>Disponibilidad en vivo</Text>
        </View>
      </View>

      <View style={styles.grid}>
        {amenities.map((amenity, index) => (
          <GlassCard key={amenity.name} style={[styles.amenityCard, index === 0 && styles.featured]}>
            <View>
              <Image source={{ uri: amenity.image }} style={styles.amenityImage} />
              {amenity.badge ? (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{amenity.badge}</Text>
                </View>
              ) : null}
            </View>
            <View style={styles.amenityHeader}>
              <View style={styles.amenityText}>
                <Text style={styles.amenityTitle}>{amenity.name}</Text>
                <View style={styles.tags}>
                  {amenity.tags.map((tag) => (
                    <Text key={tag} style={styles.tag}>
                      {tag}
                    </Text>
                  ))}
                </View>
              </View>
              {amenity.price ? (
                <View>
                  <Text style={styles.price}>{amenity.price}</Text>
                  <Text style={styles.per}>Por sesión</Text>
                </View>
              ) : null}
            </View>
          </GlassCard>
        ))}
      </View>

      <GlassCard style={styles.reserve}>
        <Text style={styles.reserveTitle}>Reservar pádel</Text>
        <View style={styles.picker}>
          <View style={styles.pickerRow}>
            <View style={styles.pickerCell}>
              <Text style={styles.infoLabel}>FECHA</Text>
              <Text style={styles.infoValue}>24 oct. 2024</Text>
            </View>
            <View style={styles.pickerCell}>
              <Text style={styles.infoLabel}>INVITADOS</Text>
              <Text style={styles.infoValue}>2 jugadores</Text>
            </View>
          </View>
          <Text style={styles.infoLabel}>HORARIO PREFERIDO</Text>
          <View style={styles.times}>
            {['09:00 AM', '10:30 AM', '02:00 PM'].map((time) => (
              <Text key={time} style={[styles.time, time === '10:30 AM' && styles.selectedTime]}>
                {time}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.summary}>
          <View style={styles.summaryHeader}>
            <Text style={styles.summaryTitle}>RESUMEN</Text>
            <MaterialCommunityIcons name="shield-check-outline" size={18} color={colors.primary} />
          </View>
          <Row label="Cancha de pádel (90 min)" value="$45.00" />
          <Row label="Cargo de concierge" value="$0.00" />
          <View style={styles.divider} />
          <Row label="Total" value="$45.00" strong />
        </View>
        <Pressable style={styles.confirm}>
          <Text style={styles.confirmText}>Confirmar reservación</Text>
          <MaterialCommunityIcons name="arrow-right" size={20} color={colors.onPrimary} />
        </Pressable>
      </GlassCard>
    </ScrollView>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <View style={styles.row}>
      <Text style={[styles.rowText, strong && styles.strong]}>{label}</Text>
      <Text style={[styles.rowText, strong && styles.strong]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
    paddingBottom: 112,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 24,
  },
  title: {
    color: colors.onSurface,
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 40,
    marginTop: 8,
  },
  copy: {
    color: colors.onSurfaceVariant,
    fontSize: 17,
    lineHeight: 25,
    marginTop: 14,
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 34,
  },
  sectionTitle: {
    color: colors.onSurface,
    fontSize: 22,
    fontWeight: '900',
  },
  livePill: {
    alignItems: 'center',
    backgroundColor: 'rgba(32, 99, 128, 0.1)',
    borderRadius: 16,
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  dot: {
    backgroundColor: colors.secondary,
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  liveText: {
    color: colors.secondary,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  grid: {
    gap: 18,
    marginTop: 18,
  },
  amenityCard: {
    padding: 14,
  },
  featured: {
    borderColor: 'rgba(46, 97, 132, 0.28)',
    borderWidth: 2,
  },
  amenityImage: {
    borderRadius: 16,
    height: 180,
    width: '100%',
  },
  badge: {
    backgroundColor: colors.glass,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
    position: 'absolute',
    right: 12,
    top: 12,
  },
  badgeText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  amenityHeader: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    marginTop: 16,
  },
  amenityText: {
    flex: 1,
  },
  amenityTitle: {
    color: colors.onSurface,
    fontSize: 22,
    fontWeight: '900',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  tag: {
    backgroundColor: colors.surfaceContainer,
    borderRadius: 12,
    color: colors.outline,
    fontSize: 10,
    fontWeight: '900',
    paddingHorizontal: 8,
    paddingVertical: 5,
    textTransform: 'uppercase',
  },
  price: {
    color: colors.primary,
    fontSize: 23,
    fontWeight: '900',
    textAlign: 'right',
  },
  per: {
    color: colors.outline,
    fontSize: 9,
    fontWeight: '900',
    textAlign: 'right',
    textTransform: 'uppercase',
  },
  reserve: {
    marginTop: 22,
    padding: 22,
  },
  reserveTitle: {
    color: colors.onSurface,
    fontSize: 24,
    fontWeight: '900',
  },
  picker: {
    borderColor: colors.outlineVariant,
    borderRadius: 18,
    borderWidth: 1,
    gap: 14,
    marginTop: 18,
    padding: 16,
  },
  pickerRow: {
    flexDirection: 'row',
    gap: 12,
  },
  pickerCell: {
    flex: 1,
  },
  infoLabel: {
    color: colors.outline,
    fontSize: 10,
    fontWeight: '900',
  },
  infoValue: {
    color: colors.onSurface,
    fontSize: 15,
    marginTop: 4,
  },
  times: {
    flexDirection: 'row',
    gap: 8,
  },
  time: {
    borderColor: colors.outlineVariant,
    borderRadius: 10,
    borderWidth: 1,
    color: colors.onSurfaceVariant,
    flex: 1,
    fontSize: 11,
    fontWeight: '800',
    paddingVertical: 10,
    textAlign: 'center',
  },
  selectedTime: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    color: colors.onPrimary,
  },
  summary: {
    backgroundColor: 'rgba(46, 97, 132, 0.06)',
    borderColor: 'rgba(46, 97, 132, 0.12)',
    borderRadius: 18,
    borderWidth: 1,
    gap: 8,
    marginTop: 18,
    padding: 18,
  },
  summaryTitle: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '900',
  },
  summaryHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    color: colors.onSurfaceVariant,
    fontSize: 14,
  },
  strong: {
    color: colors.onSurface,
    fontWeight: '900',
  },
  divider: {
    backgroundColor: 'rgba(46, 97, 132, 0.14)',
    height: 1,
  },
  confirm: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 16,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: 18,
    padding: 16,
  },
  confirmText: {
    color: colors.onPrimary,
    fontSize: 16,
    fontWeight: '900',
  },
});
