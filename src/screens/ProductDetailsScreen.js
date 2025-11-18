import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Button from '../components/Button';
import { colors } from '../theme/colors';
import { useCart } from '../context/CartContext';

const { width } = Dimensions.get('window');

export default function ProductDetailsScreen({ navigation, route }) {
  const { product } = route.params;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <Header title="Product Details" navigation={navigation} showCart={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />
          {discount > 0 && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>{discount}% OFF</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => setIsFavorite(!isFavorite)}
          >
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={28}
              color={isFavorite ? colors.error : colors.white}
            />
          </TouchableOpacity>
        </View>

        {/* Product Info */}
        <View style={styles.content}>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.name}>{product.name}</Text>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <View style={styles.ratingStars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons
                  key={star}
                  name={star <= Math.floor(product.rating) ? 'star' : 'star-outline'}
                  size={20}
                  color={colors.warning}
                />
              ))}
            </View>
            <Text style={styles.ratingText}>
              {product.rating} ({product.reviews} reviews)
            </Text>
          </View>

          {/* Price */}
          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹{product.price.toLocaleString()}</Text>
            {product.originalPrice > product.price && (
              <>
                <Text style={styles.originalPrice}>
                  ₹{product.originalPrice.toLocaleString()}
                </Text>
                <View style={styles.savingsBadge}>
                  <Text style={styles.savingsText}>
                    Save ₹{(product.originalPrice - product.price).toLocaleString()}
                  </Text>
                </View>
              </>
            )}
          </View>

          {/* Description */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          {/* Quantity Selector */}
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityLabel}>Quantity</Text>
            <View style={styles.quantitySelector}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Ionicons name="remove" size={20} color={colors.primary} />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(quantity + 1)}
              >
                <Ionicons name="add" size={20} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Features */}
          <View style={styles.featuresContainer}>
            <Text style={styles.featuresTitle}>Key Features</Text>
            {[
              'Premium Quality',
              'Fast Delivery',
              'Easy Returns',
              'Warranty Included',
            ].map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Ionicons name="checkmark-circle" size={20} color={colors.success} />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color={colors.primary} />
        </TouchableOpacity>
        <View style={styles.buyButtonContainer}>
          <Button
            title={`Add to Cart (₹${(product.price * quantity).toLocaleString()})`}
            onPress={handleAddToCart}
            style={styles.buyButton}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageContainer: {
    width: '100%',
    height: 400,
    position: 'relative',
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  discountBadge: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: colors.error,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  discountText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  favoriteButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  category: {
    fontSize: 14,
    color: colors.textLight,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingStars: {
    flexDirection: 'row',
    marginRight: 12,
  },
  ratingText: {
    fontSize: 14,
    color: colors.textLight,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    flexWrap: 'wrap',
  },
  price: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.primary,
    marginRight: 12,
  },
  originalPrice: {
    fontSize: 20,
    color: colors.textLight,
    textDecorationLine: 'line-through',
    marginRight: 12,
  },
  savingsBadge: {
    backgroundColor: colors.success + '20',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  savingsText: {
    color: colors.success,
    fontSize: 12,
    fontWeight: '700',
  },
  descriptionContainer: {
    marginBottom: 24,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: colors.textLight,
    lineHeight: 24,
  },
  quantityContainer: {
    marginBottom: 24,
  },
  quantityLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 8,
    alignSelf: 'flex-start',
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 8,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginHorizontal: 20,
    minWidth: 30,
    textAlign: 'center',
  },
  featuresContainer: {
    marginBottom: 24,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 12,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    elevation: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cartButton: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  buyButtonContainer: {
    flex: 1,
  },
  buyButton: {
    height: 56,
  },
});

