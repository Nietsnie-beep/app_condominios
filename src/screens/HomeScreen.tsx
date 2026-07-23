import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { GlassCard } from '../components/GlassCard';
import { ScreenName } from '../components/BottomNav';
import { dashboardStats, images, services } from '../data/stitchContent';
import { colors } from '../theme/colors';

type Props = {
  onNavigate: (screen: ScreenName) => void;
};

export function HomeScreen({ onNavigate }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <ImageBackground source={{ uri: images.marinaHero }} style={styles.hero} imageStyle={styles.heroImage}>
        <View style={styles.heroShade} />
        <View style={styles.heroCopy}>
          <Text style={styles.eyebrow}>BIENVENIDO A CASA</Text>
          <Text style={styles.heroTitle}>Buenos días, Abraham</Text>
          <View style={styles.chips}>
            <GlassCard style={styles.chip}>
              <Text style={styles.chipText}>Torre A, Depto. 402</Text>
            </GlassCard>
            <GlassCard style={styles.chip}>
              <View style={styles.dot} />
              <Text style={styles.chipText}>Residente activo</Text>
            </GlassCard>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.stats}>
        {dashboardStats.map((stat) => (
          <GlassCard key={stat.label} style={styles.statCard}>
            <View style={styles.statTop}>
              <MaterialCommunityIcons name={stat.icon} size={24} color={colors.primary} />
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
            <Text style={styles.statTitle}>{stat.title}</Text>
            <Text style={styles.statDetail}>{stat.detail}</Text>
          </GlassCard>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Servicios de concierge</Text>
      <View style={styles.serviceGrid}>
        {services.map((service) => (
          <Pressable key={service.label} onPress={() => onNavigate(service.route)} style={styles.servicePressable}>
            <GlassCard style={styles.serviceCard}>
              <View style={styles.serviceIcon}>
                <MaterialCommunityIcons name={service.icon} size={32} color={colors.primary} />
              </View>
              <Text style={styles.serviceLabel}>{service.label}</Text>
            </GlassCard>
          </Pressable>
        ))}
      </View>

      <ImageBackground source={{ uri: images.event }} style={styles.event} imageStyle={styles.eventImage}>
        <View style={styles.eventShade} />
        <View style={styles.eventCopy}>
          <Text style={styles.eventTitle}>Atardecer en la marina</Text>
          <Text style={styles.eventText}>Convive con tus vecinos con vino y jazz este viernes a las 7 p. m.</Text>
          <Pressable style={styles.eventButton}>
            <Text style={styles.eventButtonText}>Ver más</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 112,
  },
  hero: {
    height: 430,
    justifyContent: 'flex-end',
  },
  heroImage: {
    resizeMode: 'cover',
  },
  heroShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(249, 249, 252, 0.28)',
  },
  heroCopy: {
    padding: 24,
    paddingBottom: 42,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 8,
  },
  heroTitle: {
    color: colors.onSurface,
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 40,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 18,
  },
  chip: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  chipText: {
    color: colors.onSurfaceVariant,
    fontSize: 14,
    fontWeight: '600',
  },
  dot: {
    backgroundColor: colors.success,
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  stats: {
    gap: 16,
    marginTop: -24,
    paddingHorizontal: 24,
  },
  statCard: {
    padding: 22,
  },
  statTop: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statLabel: {
    color: colors.outline,
    fontSize: 11,
    fontWeight: '900',
  },
  statTitle: {
    color: colors.onSurface,
    fontSize: 22,
    fontWeight: '800',
  },
  statDetail: {
    color: colors.onSurfaceVariant,
    fontSize: 16,
    marginTop: 4,
  },
  sectionTitle: {
    color: colors.onSurface,
    fontSize: 24,
    fontWeight: '800',
    marginHorizontal: 24,
    marginTop: 36,
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginTop: 16,
    paddingHorizontal: 24,
  },
  servicePressable: {
    width: '47.8%',
  },
  serviceCard: {
    alignItems: 'center',
    minHeight: 148,
    justifyContent: 'center',
    padding: 18,
  },
  serviceIcon: {
    alignItems: 'center',
    backgroundColor: 'rgba(46, 97, 132, 0.08)',
    borderRadius: 32,
    height: 64,
    justifyContent: 'center',
    width: 64,
  },
  serviceLabel: {
    color: colors.onSurface,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  event: {
    height: 220,
    margin: 24,
    overflow: 'hidden',
  },
  eventImage: {
    borderRadius: 24,
  },
  eventShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(46, 97, 132, 0.46)',
    borderRadius: 24,
  },
  eventCopy: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
  },
  eventTitle: {
    color: colors.onPrimary,
    fontSize: 24,
    fontWeight: '900',
  },
  eventText: {
    color: 'rgba(255, 255, 255, 0.86)',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 8,
  },
  eventButton: {
    alignItems: 'center',
    backgroundColor: colors.onPrimary,
    borderRadius: 18,
    marginTop: 18,
    paddingHorizontal: 18,
    paddingVertical: 9,
    width: 124,
  },
  eventButtonText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});
