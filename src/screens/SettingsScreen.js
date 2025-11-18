import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { colors } from '../theme/colors';

const settingsSections = [
  {
    id: 1,
    title: 'Account',
    items: [
      { id: 1, icon: 'person-outline', label: 'Edit Profile', type: 'navigate', screen: 'EditProfile' },
      { id: 2, icon: 'lock-closed-outline', label: 'Change Password', type: 'navigate', screen: 'ChangePassword' },
      { id: 3, icon: 'mail-outline', label: 'Email Preferences', type: 'navigate', screen: 'EmailPreferences' },
    ],
  },
  {
    id: 2,
    title: 'Notifications',
    items: [
      { id: 4, icon: 'notifications-outline', label: 'Push Notifications', type: 'switch', value: true },
      { id: 5, icon: 'mail-outline', label: 'Email Notifications', type: 'switch', value: true },
      { id: 6, icon: 'megaphone-outline', label: 'Promotional Updates', type: 'switch', value: false },
    ],
  },
  {
    id: 3,
    title: 'Privacy & Security',
    items: [
      { id: 7, icon: 'shield-checkmark-outline', label: 'Privacy Policy', type: 'navigate', screen: 'Privacy' },
      { id: 8, icon: 'document-text-outline', label: 'Terms of Service', type: 'navigate', screen: 'Terms' },
      { id: 9, icon: 'finger-print-outline', label: 'Biometric Login', type: 'switch', value: false },
    ],
  },
  {
    id: 4,
    title: 'App Settings',
    items: [
      { id: 10, icon: 'language-outline', label: 'Language', type: 'navigate', screen: 'Language', value: 'English' },
      { id: 11, icon: 'color-palette-outline', label: 'Theme', type: 'navigate', screen: 'Theme', value: 'Light' },
      { id: 12, icon: 'cloud-download-outline', label: 'Data Usage', type: 'navigate', screen: 'DataUsage' },
    ],
  },
  {
    id: 5,
    title: 'Support',
    items: [
      { id: 13, icon: 'help-circle-outline', label: 'Help Center', type: 'navigate', screen: 'Help' },
      { id: 14, icon: 'chatbubble-outline', label: 'Contact Us', type: 'navigate', screen: 'Contact' },
      { id: 15, icon: 'star-outline', label: 'Rate App', type: 'navigate', screen: 'Rate' },
    ],
  },
];

export default function SettingsScreen({ navigation }) {
  const [switches, setSwitches] = useState({
    4: true,
    5: true,
    6: false,
    9: false,
  });

  const handleSwitch = (id, value) => {
    setSwitches({ ...switches, [id]: value });
  };

  const handleItemPress = (item) => {
    if (item.type === 'navigate') {
      navigation.navigate(item.screen);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Settings" navigation={navigation} showCart={false} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {settingsSections.map((section) => (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionContent}>
              {section.items.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.settingItem}
                  onPress={() => handleItemPress(item)}
                  disabled={item.type === 'switch'}
                >
                  <View style={styles.settingItemLeft}>
                    <View style={styles.iconContainer}>
                      <Ionicons name={item.icon} size={22} color={colors.primary} />
                    </View>
                    <View style={styles.settingItemTextContainer}>
                      <Text style={styles.settingItemText}>{item.label}</Text>
                      {item.value && (
                        <Text style={styles.settingItemValue}>{item.value}</Text>
                      )}
                    </View>
                  </View>
                  {item.type === 'switch' ? (
                    <Switch
                      value={switches[item.id]}
                      onValueChange={(value) => handleSwitch(item.id, value)}
                      trackColor={{ false: colors.lightGray, true: colors.primary + '80' }}
                      thumbColor={switches[item.id] ? colors.primary : colors.white}
                    />
                  ) : (
                    <Ionicons name="chevron-forward" size={20} color={colors.textLight} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* App Version */}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
          <Text style={styles.copyrightText}>© 2024 FKart. All rights reserved.</Text>
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
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textLight,
    textTransform: 'uppercase',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  sectionContent: {
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingItemTextContainer: {
    flex: 1,
  },
  settingItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  settingItemValue: {
    fontSize: 14,
    color: colors.textLight,
    marginTop: 2,
  },
  versionContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  versionText: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 8,
  },
  copyrightText: {
    fontSize: 12,
    color: colors.textLight,
    opacity: 0.7,
  },
});

