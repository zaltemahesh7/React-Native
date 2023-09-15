import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserProfileCard from './UserProfileCard';

export default function App() {
  return (
    <View style={styles.container}>
      <UserProfileCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
