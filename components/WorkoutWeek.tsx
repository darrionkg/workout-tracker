import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

export const WorkoutWeek = () => {
  const days: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <View style={styles.weekSection}>
      <FlatList
        data={days}
        keyExtractor={(day) => day}
        horizontal={true}
        renderItem={(day) => {
          console.log(day);
          return (
            <TouchableOpacity onPress={() => console.log('button pressed')}>
              <View style={styles.day}>
                <Text style={styles.dayText}>{day.item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  weekSection: {
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 23,
    borderBottomWidth: 2,
    borderBottomColor: '#4B4B4B',
  },
  weekList: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  day: {
    backgroundColor: '#4B4B4B',
    height: 75,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
    borderRadius: 10,
  },
  dayText: {
    color: '#F7F7FF',
    fontSize: 24,
  },
});
