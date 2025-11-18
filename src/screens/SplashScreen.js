import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.5);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="cart" size={80} color={colors.white} />
        </View>
        <Text style={styles.title}>FKart</Text>
        <Text style={styles.subtitle}>Shop Smart, Live Better</Text>
      </Animated.View>
      
      <Animated.View style={[styles.loader, { opacity: fadeAnim }]}>
        <View style={styles.loaderDot} />
        <View style={[styles.loaderDot, styles.loaderDotDelay]} />
        <View style={[styles.loaderDot, styles.loaderDotDelay2]} />
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 48,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 10,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    color: colors.white,
    opacity: 0.9,
    fontWeight: '300',
  },
  loader: {
    position: 'absolute',
    bottom: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loaderDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.white,
    marginHorizontal: 4,
  },
  loaderDotDelay: {
    animationDelay: '0.2s',
  },
  loaderDotDelay2: {
    animationDelay: '0.4s',
  },
});

