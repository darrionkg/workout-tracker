import React from 'react';
import { View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SearchBar } from '../components/Themed';

export const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.searchBarContainer}>
          <FontAwesome
            style={styles.searchIcon}
            name="search"
            size={24}
            color="#BDBDC6"
          />
          <SearchBar
            placeholder="Plans, Workouts, Routines..."
            style={styles.searchBar}
          />
        </View>
        <Image
          source={require(`../assets/images/profile-picture-example.jpg`)}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#4B4B4B',
  },
  profileImage: {
    borderRadius: 50,
  },
  searchBarContainer: {
    display: 'flex',
    backgroundColor: '#4B4B4B',
    padding: 6,
    paddingLeft: 12,
    borderRadius: 25,
    color: '#BDBDC6',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  searchBar: {
    backgroundColor: '#4B4B4B',
    fontSize: 12,
    fontWeight: 'normal',
    paddingRight: 5,
  },
  searchIcon: {
    paddingRight: 10,
  },
});
