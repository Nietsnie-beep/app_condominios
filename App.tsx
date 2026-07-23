import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { AppHeader } from './src/components/AppHeader';
import { BottomNav, ScreenName } from './src/components/BottomNav';
import { AccessScreen } from './src/screens/AccessScreen';
import { BookingsScreen } from './src/screens/BookingsScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { IntercomScreen } from './src/screens/IntercomScreen';
import { colors } from './src/theme/colors';

export default function App() {
  const [screen, setScreen] = useState<ScreenName>('Home');

  const renderScreen = () => {
    switch (screen) {
      case 'Access':
        return <AccessScreen />;
      case 'Bookings':
        return <BookingsScreen />;
      case 'Intercom':
        return <IntercomScreen />;
      case 'Profile':
        return <HomeScreen onNavigate={setScreen} />;
      case 'Home':
      default:
        return <HomeScreen onNavigate={setScreen} />;
    }
  };

  const fullscreen = screen === 'Intercom';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {!fullscreen ? <AppHeader /> : null}
        <View style={styles.scene}>{renderScreen()}</View>
        <BottomNav active={screen} onChange={setScreen} />
        <StatusBar style={fullscreen ? 'light' : 'dark'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    position: 'relative',
  },
  scene: {
    flex: 1,
  },
});
