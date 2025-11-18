import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import { colors } from '../theme/colors';

const { width } = Dimensions.get('window');

const onboardingData = [
  {
    id: 1,
    title: 'Discover Products',
    description: 'Browse through thousands of products from top brands',
    icon: 'search',
    color: colors.primary,
  },
  {
    id: 2,
    title: 'Easy Shopping',
    description: 'Add to cart and checkout with just a few taps',
    icon: 'cart',
    color: colors.secondary,
  },
  {
    id: 3,
    title: 'Fast Delivery',
    description: 'Get your orders delivered quickly to your doorstep',
    icon: 'rocket',
    color: colors.primary,
  },
];

export default function OnboardingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(slideIndex);
  };

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: (currentIndex + 1) * width,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace('Auth');
    }
  };

  const handleSkip = () => {
    navigation.replace('Auth');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {onboardingData.map((item, index) => (
          <View key={item.id} style={styles.slide}>
            <LinearGradient
              colors={[item.color, colors.secondary]}
              style={styles.gradient}
            >
              <View style={styles.iconContainer}>
                <Ionicons name={item.icon} size={100} color={colors.white} />
              </View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </LinearGradient>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.indicatorContainer}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && styles.indicatorActive,
              ]}
            />
          ))}
        </View>

        <Button
          title={currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
          onPress={handleNext}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 10,
    padding: 10,
  },
  skipText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: '600',
  },
  slide: {
    width,
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  iconContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 26,
  },
  footer: {
    paddingHorizontal: 30,
    paddingBottom: 50,
    paddingTop: 30,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.lightGray,
    marginHorizontal: 4,
  },
  indicatorActive: {
    width: 24,
    backgroundColor: colors.primary,
  },
  button: {
    width: '100%',
  },
});

