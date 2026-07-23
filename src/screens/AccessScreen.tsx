import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { GlassCard } from '../components/GlassCard';
import { images } from '../data/stitchContent';
import { colors } from '../theme/colors';

type Tab = 'pedestrian' | 'vehicle';

type ResidentPlate = {
  id: string;
  recNo: number;
  plate: string;
  ownerName: string;
  startDate: string | null;
  expirationDate: string | null;
};

type PlateForm = {
  plate: string;
  ownerName: string;
  startDate: string;
  expirationDate: string;
};

const API_BASE_URL = (process.env.EXPO_PUBLIC_API_URL || 'http://192.168.1.230:3000').replace(/\/$/, '');
const MAX_RESIDENT_PLATES = 2;
const DUMMY_RESIDENT_PLATES: ResidentPlate[] = [
  {
    id: 'resident-plate-1',
    recNo: 1,
    plate: 'W73792',
    ownerName: 'Alberto Perez',
    startDate: '2026-07-23 00:00:00',
    expirationDate: '2027-01-01 23:59:59',
  },
  {
    id: 'resident-plate-2',
    recNo: 2,
    plate: 'ZXQ907T01',
    ownerName: 'Alberto Perez',
    startDate: '2026-07-23 00:00:00',
    expirationDate: '2027-01-01 23:59:59',
  },
];

export function AccessScreen() {
  const [tab, setTab] = useState<Tab>('pedestrian');

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Control de acceso</Text>
      <View style={styles.tabs}>
        <Pressable
          onPress={() => setTab('pedestrian')}
          style={[styles.tab, tab === 'pedestrian' && styles.activeTab]}
        >
          <Text style={[styles.tabText, tab === 'pedestrian' && styles.activeTabText]}>
            Acceso peatonal
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setTab('vehicle')}
          style={[styles.tab, tab === 'vehicle' && styles.activeTab]}
        >
          <Text style={[styles.tabText, tab === 'vehicle' && styles.activeTabText]}>
            Placas vehiculares
          </Text>
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
  const [plates, setPlates] = useState<ResidentPlate[]>(DUMMY_RESIDENT_PLATES);
  const [showForm, setShowForm] = useState(false);
  const [editingPlate, setEditingPlate] = useState<ResidentPlate | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const openNewPlateForm = () => {
    setEditingPlate(null);
    setShowForm(true);
  };

  const openReplacementForm = (plate: ResidentPlate) => {
    setEditingPlate(plate);
    setShowForm(true);
  };

  const handleSaved = async (savedPlate: PlateForm) => {
    const residentPlate: ResidentPlate = {
      id: editingPlate?.id || `resident-plate-${Date.now()}`,
      recNo: editingPlate?.recNo || 0,
      plate: savedPlate.plate,
      ownerName: savedPlate.ownerName,
      startDate: `${savedPlate.startDate} 00:00:00`,
      expirationDate: `${savedPlate.expirationDate} 23:59:59`,
    };

    setPlates((current) =>
      editingPlate
        ? current.map((plate) => (plate.id === editingPlate.id ? residentPlate : plate))
        : [...current, residentPlate].slice(0, MAX_RESIDENT_PLATES),
    );
    setEditingPlate(null);
    setShowForm(false);
  };

  return (
    <View style={styles.stack}>
      <View style={styles.listHeader}>
        <View>
          <Text style={styles.sectionTitle}>Mis placas</Text>
          <Text style={styles.sectionCaption}>
            {plates.length} de {MAX_RESIDENT_PLATES} espacios utilizados
          </Text>
        </View>
      </View>

      {showForm ? (
        <PlateRegistrationForm
          initialPlate={editingPlate}
          submitting={submitting}
          setSubmitting={setSubmitting}
          onCancel={() => {
            setEditingPlate(null);
            setShowForm(false);
          }}
          onSaved={handleSaved}
        />
      ) : plates.length < MAX_RESIDENT_PLATES ? (
        <Pressable onPress={openNewPlateForm} style={styles.addButton}>
          <MaterialCommunityIcons name="plus-circle-outline" size={21} color={colors.onPrimary} />
          <Text style={styles.addButtonText}>AGREGAR PLACA</Text>
        </Pressable>
      ) : (
        <View style={styles.limitBanner}>
          <MaterialCommunityIcons name="information-outline" size={20} color={colors.primary} />
          <Text style={styles.limitText}>
            Alcanzaste el límite de dos placas. Usa Editar para sustituir una de ellas.
          </Text>
        </View>
      )}

      {plates.map((vehicle) => (
            <GlassCard key={vehicle.id} style={styles.vehicleCard}>
              <View style={styles.vehicleHeader}>
                <View style={styles.vehicleIdentity}>
                  <View style={styles.vehicleTitleRow}>
                    <View style={styles.vehicleIcon}>
                      <MaterialCommunityIcons name="car-outline" size={24} color={colors.primary} />
                    </View>
                    <View>
                      <Text style={styles.plate}>{vehicle.plate}</Text>
                      <Text style={styles.owner}>
                        {vehicle.ownerName || 'Propietario no especificado'}
                      </Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.vehicleStatus}>{getPlateStatus(vehicle.expirationDate)}</Text>
              </View>
              <View style={styles.validityBox}>
                <View style={styles.validityItem}>
                  <Text style={styles.infoLabel}>INICIO</Text>
                  <Text style={styles.validityValue}>{formatCameraDate(vehicle.startDate)}</Text>
                </View>
                <View style={styles.validityDivider} />
                <View style={styles.validityItem}>
                  <Text style={styles.infoLabel}>VIGENCIA</Text>
                  <Text style={styles.validityValue}>{formatCameraDate(vehicle.expirationDate)}</Text>
                </View>
              </View>
              <Pressable onPress={() => openReplacementForm(vehicle)} style={styles.editButton}>
                <MaterialCommunityIcons name="pencil-outline" size={17} color={colors.primary} />
                <Text style={styles.editButtonText}>EDITAR O SUSTITUIR</Text>
              </Pressable>
            </GlassCard>
          ))}
    </View>
  );
}

function PlateRegistrationForm({
  submitting,
  setSubmitting,
  onCancel,
  onSaved,
  initialPlate,
}: {
  submitting: boolean;
  setSubmitting: (value: boolean) => void;
  onCancel: () => void;
  onSaved: (plate: PlateForm) => Promise<void>;
  initialPlate: ResidentPlate | null;
}) {
  const today = getLocalDate();
  const [form, setForm] = useState<PlateForm>({
    plate: initialPlate?.plate || '',
    ownerName: 'Alberto Perez',
    startDate: today,
    expirationDate: '2027-01-01',
  });
  const [formError, setFormError] = useState('');

  const updateField = (field: keyof PlateForm, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: field === 'plate' ? value.toUpperCase() : value,
    }));
  };

  const submit = async () => {
    const validationError = validateForm(form);
    if (validationError) {
      setFormError(validationError);
      return;
    }

    setSubmitting(true);
    setFormError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/demo/plates/${initialPlate?.recNo}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plate: form.plate.trim(),
        }),
      });
      const payload = await readApiResponse(response);

      if (payload.syncStatus !== 'synced') {
        throw new Error(payload.syncError || 'La placa no se confirmó en la cámara.');
      }

      Alert.alert('Placa registrada', `${payload.plate} quedó sincronizada con la cámara.`);
      await onSaved({
        plate: payload.plate,
        ownerName: payload.ownerName,
        startDate: payload.startDate,
        expirationDate: payload.expirationDate,
      });
    } catch (requestError) {
      setFormError(getErrorMessage(requestError));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <GlassCard style={styles.formCard}>
      <View style={styles.formHeading}>
        <View>
          <Text style={styles.formTitle}>{initialPlate ? 'Sustituir placa' : 'Nueva placa'}</Text>
          <Text style={styles.sectionCaption}>Reemplazará a {initialPlate?.plate}</Text>
        </View>
        <Pressable accessibilityLabel="Cerrar formulario" onPress={onCancel} style={styles.closeButton}>
          <MaterialCommunityIcons name="close" size={20} color={colors.onSurfaceVariant} />
        </Pressable>
      </View>

      <Field
        autoCapitalize="characters"
        label="PLACA"
        maxLength={31}
        onChangeText={(value) => updateField('plate', value)}
        placeholder="Ej. ABC123"
        value={form.plate}
      />
      <View style={styles.fixedDataBox}>
        <View style={styles.fixedDataRow}>
          <Text style={styles.fixedDataLabel}>PROPIETARIO</Text>
          <Text style={styles.fixedDataValue}>Alberto Perez</Text>
        </View>
        <View style={styles.fixedDataRow}>
          <Text style={styles.fixedDataLabel}>INICIO</Text>
          <Text style={styles.fixedDataValue}>{formatCameraDate(`${today} 00:00:00`)}</Text>
        </View>
        <View style={styles.fixedDataRow}>
          <Text style={styles.fixedDataLabel}>VIGENCIA</Text>
          <Text style={styles.fixedDataValue}>01 ene 2027</Text>
        </View>
      </View>

      {formError ? <Text style={styles.formError}>{formError}</Text> : null}

      <View style={styles.formActions}>
        <Pressable disabled={submitting} onPress={onCancel} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>CANCELAR</Text>
        </Pressable>
        <Pressable disabled={submitting} onPress={submit} style={styles.submitButton}>
          {submitting ? (
            <ActivityIndicator color={colors.onPrimary} size="small" />
          ) : (
            <>
              <MaterialCommunityIcons name="content-save-outline" size={19} color={colors.onPrimary} />
              <Text style={styles.submitButtonText}>
                {initialPlate ? 'SUSTITUIR' : 'REGISTRAR'}
              </Text>
            </>
          )}
        </Pressable>
      </View>
    </GlassCard>
  );
}

function Field({
  label,
  ...inputProps
}: {
  label: string;
} & React.ComponentProps<typeof TextInput>) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        {...inputProps}
        editable={inputProps.editable !== false}
        placeholderTextColor={colors.outline}
        style={styles.input}
      />
    </View>
  );
}

function Action({ label }: { label: string }) {
  return (
    <GlassCard style={styles.action}>
      <MaterialCommunityIcons
        name={label === 'COMPARTIR LLAVE' ? 'share-variant-outline' : 'history'}
        size={22}
        color={colors.primary}
      />
      <Text style={styles.actionText}>{label}</Text>
    </GlassCard>
  );
}

async function readApiResponse(response: Response) {
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || `El servidor respondió HTTP ${response.status}.`);
  }
  return payload;
}

function validateForm(form: PlateForm) {
  if (!/^[A-Z0-9-]{1,31}$/.test(form.plate.trim())) {
    return 'La placa solo puede contener letras, números y guiones.';
  }
  if (!form.ownerName.trim() || form.ownerName.trim().length > 15) {
    return 'El propietario es obligatorio y admite máximo 15 caracteres.';
  }
  if (!isDateOnly(form.startDate) || !isDateOnly(form.expirationDate)) {
    return 'Las fechas deben usar el formato AAAA-MM-DD.';
  }
  if (form.expirationDate <= form.startDate) {
    return 'La vigencia debe terminar después de la fecha de inicio.';
  }
  return '';
}

function isDateOnly(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T12:00:00`);
  return !Number.isNaN(date.getTime()) && getLocalDate(date) === value;
}

function getLocalDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function addOneYear(value: string) {
  const [year, month, day] = value.split('-').map(Number);
  return getLocalDate(new Date(year + 1, month - 1, day));
}

function formatCameraDate(value: string | null) {
  if (!value) return 'Sin fecha';
  const [date] = value.split(' ');
  const [year, month, day] = date.split('-').map(Number);
  if (!year || !month || !day) return value;
  return new Intl.DateTimeFormat('es-MX', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(year, month - 1, day));
}

function cameraDateOnly(value: string | null | undefined) {
  return value ? value.split(' ')[0] : '';
}

function getPlateStatus(expirationDate: string | null) {
  if (!expirationDate) return 'ACTIVA';
  const expiration = new Date(expirationDate.replace(' ', 'T'));
  return expiration.getTime() >= Date.now() ? 'ACTIVA' : 'VENCIDA';
}

function getErrorMessage(error: unknown) {
  if (error instanceof TypeError) {
    return 'No se pudo conectar con el servidor. Revisa la red e inténtalo de nuevo.';
  }
  return error instanceof Error ? error.message : String(error);
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
  listHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: colors.onSurface,
    fontSize: 20,
    fontWeight: '900',
  },
  sectionCaption: {
    color: colors.outline,
    fontSize: 12,
    marginTop: 3,
  },
  refreshButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(46, 97, 132, 0.08)',
    borderRadius: 14,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 18,
    flexDirection: 'row',
    gap: 9,
    justifyContent: 'center',
    padding: 17,
  },
  addButtonText: {
    color: colors.onPrimary,
    fontSize: 12,
    fontWeight: '900',
  },
  limitBanner: {
    alignItems: 'flex-start',
    backgroundColor: 'rgba(46, 97, 132, 0.08)',
    borderColor: 'rgba(46, 97, 132, 0.16)',
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 16,
  },
  limitText: {
    color: colors.onSurfaceVariant,
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
  },
  errorBanner: {
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 218, 214, 0.48)',
    borderColor: 'rgba(186, 26, 26, 0.18)',
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 16,
  },
  errorCopy: {
    flex: 1,
  },
  errorText: {
    color: colors.onErrorContainer,
    fontSize: 14,
    lineHeight: 20,
  },
  retryText: {
    color: colors.error,
    fontSize: 11,
    fontWeight: '900',
    marginTop: 8,
  },
  loadingBox: {
    alignItems: 'center',
    gap: 10,
    paddingVertical: 30,
  },
  loadingText: {
    color: colors.outline,
    fontSize: 13,
  },
  emptyCard: {
    alignItems: 'center',
    padding: 28,
  },
  emptyTitle: {
    color: colors.onSurface,
    fontSize: 17,
    fontWeight: '800',
    marginTop: 10,
  },
  vehicleCard: {
    padding: 20,
  },
  vehicleHeader: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  vehicleIdentity: {
    flex: 1,
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
  plate: {
    color: colors.onSurface,
    fontSize: 21,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  owner: {
    color: colors.outline,
    fontSize: 13,
    marginTop: 2,
  },
  vehicleStatus: {
    color: colors.onSecondaryContainer,
    fontSize: 10,
    fontWeight: '900',
  },
  validityBox: {
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: 14,
    flexDirection: 'row',
    marginTop: 18,
    padding: 13,
  },
  validityItem: {
    flex: 1,
  },
  validityDivider: {
    backgroundColor: colors.outlineVariant,
    marginHorizontal: 12,
    width: 1,
  },
  validityValue: {
    color: colors.onSurface,
    fontSize: 13,
    fontWeight: '800',
    marginTop: 4,
  },
  editButton: {
    alignItems: 'center',
    borderColor: colors.outlineVariant,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'center',
    marginTop: 12,
    paddingVertical: 11,
  },
  editButtonText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: '900',
  },
  formCard: {
    padding: 20,
  },
  formHeading: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  formTitle: {
    color: colors.onSurface,
    fontSize: 20,
    fontWeight: '900',
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: 12,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  field: {
    flex: 1,
    marginBottom: 15,
  },
  fieldLabel: {
    color: colors.onSurfaceVariant,
    fontSize: 10,
    fontWeight: '900',
    marginBottom: 7,
  },
  input: {
    backgroundColor: colors.surfaceContainerLow,
    borderColor: colors.outlineVariant,
    borderRadius: 14,
    borderWidth: 1,
    color: colors.onSurface,
    fontSize: 15,
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  fixedDataBox: {
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: 14,
    gap: 11,
    marginBottom: 16,
    padding: 14,
  },
  fixedDataRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fixedDataLabel: {
    color: colors.outline,
    fontSize: 10,
    fontWeight: '900',
  },
  fixedDataValue: {
    color: colors.onSurface,
    fontSize: 13,
    fontWeight: '800',
  },
  dateRow: {
    flexDirection: 'row',
    gap: 10,
  },
  formError: {
    color: colors.error,
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 14,
  },
  formActions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 2,
  },
  cancelButton: {
    alignItems: 'center',
    borderColor: colors.outlineVariant,
    borderRadius: 14,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    padding: 14,
  },
  cancelButtonText: {
    color: colors.onSurfaceVariant,
    fontSize: 11,
    fontWeight: '900',
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 14,
    flex: 1.5,
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'center',
    minHeight: 48,
    padding: 14,
  },
  submitButtonText: {
    color: colors.onPrimary,
    fontSize: 11,
    fontWeight: '900',
  },
});
