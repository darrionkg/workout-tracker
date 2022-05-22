import { StyleSheet, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, SafeAreaView } from '../components/Themed';
import { Image, TextInput, Button } from 'react-native';
import { RootTabScreenProps } from '../types';
import { Header } from '../components/Header';
import { WorkoutWeek } from '../components/WorkoutWeek';

export default function WorkoutScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <WorkoutWeek />
      <View style={styles.workoutButtonSection}>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => {
            console.log('workout button pressed');
          }}>
          <Text style={styles.buttonText}>Begin Workout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  workoutButtonSection: {
    display: 'flex',
    margin: 10,
  },
  buttonTouchable: {
    // linear F0F0F0 to F1F1FF
    backgroundColor: 'linear-gradient(#F0F0F0, #F1F1FF)',
    height: 80,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
  },
});
