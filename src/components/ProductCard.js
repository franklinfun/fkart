import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onPress, navigation }) {
  const { addToCart } = useCart();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = (e) => {
    e?.stopPropagation?.();
    addToCart(product);
  };

  const handleCardPress = () => {
    if (navigation) {
      navigation.navigate('ProductDetails', { product });
    } else if (onPress) {
      onPress(product);
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handleCardPress}
      activeOpacity={0.9}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        {discount > 0 && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{discount}% OFF</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => {}}
        >
          <Ionicons name="heart-outline" size={20} color={colors.gray} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={14} color={colors.warning} />
          <Text style={styles.rating}>{product.rating}</Text>
          <Text style={styles.reviews}>({product.reviews})</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{product.price.toLocaleString()}</Text>
          {product.originalPrice > product.price && (
            <Text style={styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddToCart}
          activeOpacity={0.8}
        >
          <Ionicons name="add-circle" size={20} color={colors.white} />
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  discountBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: colors.error,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: colors.white,
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  content: {
    padding: 16,
  },
  category: {
    fontSize: 12,
    color: colors.textLight,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 4,
  },
  reviews: {
    fontSize: 12,
    color: colors.textLight,
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 14,
    color: colors.textLight,
    textDecorationLine: 'line-through',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 4,
  },
  addButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
});

