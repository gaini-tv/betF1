import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';

export default function AccueilScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <ThemedText type="title" style={styles.title}>
          F1 Paris
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Pariez sur les plus grandes courses de Formule 1
        </ThemedText>

        <ThemedView style={styles.card}>
          <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
            Prochaine course
          </ThemedText>
          <ThemedText style={styles.cardText}>
            Grand Prix à venir — Consultez l’onglet Course pour le calendrier et les cotes.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.actions}>
          <Link href="/(tabs)/course" asChild>
            <Pressable style={styles.button}>
              <ThemedText style={styles.buttonText}>Voir les courses</ThemedText>
            </Pressable>
          </Link>
          <Link href="/(tabs)/pari" asChild>
            <Pressable style={[styles.button, styles.buttonSecondary]}>
              <ThemedText style={styles.buttonTextSecondary}>Mes paris</ThemedText>
            </Pressable>
          </Link>
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
    marginBottom: 28,
    opacity: 0.85,
    fontSize: 16,
  },
  card: {
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(220, 38, 38, 0.35)',
    marginBottom: 24,
  },
  cardTitle: {
    marginBottom: 8,
    color: Colors.light.tint,
  },
  cardText: {
    opacity: 0.9,
    fontSize: 15,
  },
  actions: {
    gap: 12,
  },
  button: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.light.tint,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonTextSecondary: {
    color: Colors.light.tint,
    fontWeight: '600',
    fontSize: 16,
  },
});
