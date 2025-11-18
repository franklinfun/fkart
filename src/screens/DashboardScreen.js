import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { colors } from '../theme/colors';
import { products, categories, featuredProducts } from '../data/products';

const { width } = Dimensions.get('window');

export default function DashboardScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <View style={styles.container}>
      <Header title="FKart" navigation={navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color={colors.textLight} />
            <Text style={styles.searchPlaceholder}>Search products...</Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  selectedCategory === category.id && styles.categoryCardActive,
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <LinearGradient
                  colors={
                    selectedCategory === category.id
                      ? [colors.primary, colors.secondary]
                      : [colors.white, colors.white]
                  }
                  style={styles.categoryGradient}
                >
                  <Ionicons
                    name={category.icon}
                    size={24}
                    color={selectedCategory === category.id ? colors.white : colors.primary}
                  />
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategory === category.id && styles.categoryTextActive,
                    ]}
                  >
                    {category.name}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Products */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Products')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredContainer}
          >
            {featuredProducts.map((product) => (
              <View key={product.id} style={styles.featuredCard}>
                <ProductCard product={product} navigation={navigation} />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* All Products */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>All Products</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Products')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {products
            .filter(
              (product) =>
                selectedCategory === 1 ||
                product.category === categories.find((c) => c.id === selectedCategory)?.name
            )
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                navigation={navigation}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 50,
    marginRight: 12,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchPlaceholder: {
    marginLeft: 12,
    color: colors.textLight,
    fontSize: 14,
  },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  categoryCard: {
    marginRight: 12,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryCardActive: {
    elevation: 4,
  },
  categoryGradient: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
  categoryTextActive: {
    color: colors.white,
  },
  featuredContainer: {
    paddingHorizontal: 16,
  },
  featuredCard: {
    width: width * 0.7,
    marginRight: 16,
  },
});

