import React, { useState } from 'react';
import {
  SafeAreaView,
  Animated,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Menu, X } from 'lucide-react-native';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(-300))[0];

  const toggleMenu = () => {
    const toValue = menuOpen ? -300 : 0;
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { id: 1, title: 'Home', screen: 'HomeScreen' },
    { id: 2, title: 'Profile', screen: 'ProfileScreen' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          {menuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My App</Text>
      </View>

      {menuOpen && (
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={toggleMenu} />
      )}

      <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
        <ScrollView>
          <Text style={styles.menuHeader}>Navigation</Text>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => {
                toggleMenu();
              }}
            >
              <Text style={styles.menuItemText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // dark background
  },
  header: {
    height: 60,
    backgroundColor: '#1f1f1f',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 0,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  menuButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 20,
  },
  overlay: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1,
  },
  menu: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: 300,
    backgroundColor: '#1e1e1e',
    zIndex: 2,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  menuHeader: {
    fontSize: 22,
    fontWeight: '700',
    paddingVertical: 25,
    paddingHorizontal: 20,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  menuItem: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#292929',
  },
  menuItemText: {
    fontSize: 17,
    color: '#e0e0e0',
  },
});

export default HamburgerMenu;
