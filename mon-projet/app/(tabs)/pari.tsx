import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';

export default function PariScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <ThemedText type="title" style={styles.title}>
          Mes paris
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Suivez et gérez vos paris en cours
        </ThemedText>
        <ThemedView style={styles.card}>
          <ThemedText type="defaultSemiBold">Paris actifs</ThemedText>
          <ThemedText style={styles.cardText}>
            Vos paris sur les courses F1 apparaîtront ici.
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    marginBottom: 8,
    color: Colors.light.tint,
  },
  subtitle: {
    marginBottom: 24,
    opacity: 0.8,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(220, 38, 38, 0.3)',
  },
  cardText: {
    marginTop: 8,
    opacity: 0.9,
  },
});
