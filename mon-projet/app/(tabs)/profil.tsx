import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';

export default function ProfilScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <ThemedText type="title" style={styles.title}>
          Mon profil
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Paramètres et statistiques
        </ThemedText>
        <ThemedView style={styles.card}>
          <ThemedText type="defaultSemiBold">Compte</ThemedText>
          <ThemedText style={styles.cardText}>
            Solde, historique des paris et préférences.
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
