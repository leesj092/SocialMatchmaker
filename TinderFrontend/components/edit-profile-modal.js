import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ProfileTextfield } from '../components/profile-textfield';

export const EditProfileModal = (props) => {

  return (
    <Modal animationType="fade" transparent={true} visible={props.modalVisible}>
      <View style={styles.darkenedBackgroundView} />
      <KeyboardAvoidingView behavior="padding" style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.imageContainer}>
            <Image style={styles.image} source={require('../images/sample_person.jpeg')}/>
            <View style={styles.editTextContainer}>
              <Text style={styles.editButtonText}>Edit</Text>
            </View>
          </TouchableOpacity>
          <View style={{width: '100%'}}>
            <ProfileTextfield
              iconName="person"
              value={props.name}
              setValue={props.setName}
              placeholder="Name"
              width="100%"
            />

            <ProfileTextfield
              iconName="calendar"
              value={props.age}
              setValue={props.setAge}
              placeholder="Age"
              width="100%"
            />

            <ProfileTextfield
              iconName="transgender"
              value={props.gender}
              setValue={props.setGender}
              placeholder="Gender"
              width="100%"
            />

            <ProfileTextfield
              iconName="briefcase"
              value={props.job}
              setValue={props.setJob}
              placeholder="Job"
              width="100%"
            />

            <ProfileTextfield
              iconName="game-controller"
              value={props.hobbies}
              setValue={props.setHobbies}
              placeholder="Hobbies"
              width="100%"
            />
          </View>

          <View style={styles.modalButtonContainer}>
            <TouchableOpacity onPress={() => props.setModalVisible(false)}>
              <View style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  darkenedBackgroundView: {
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 335,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 55,
    margin: 25,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  closeButtonContainer: {
    alignSelf: 'flex-end',
    paddingHorizontal: 5,
  },
  imageContainer: {
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  modalButtonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  modalButton: {
    marginHorizontal: 5,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'pink',
    width: 120,
    height: 42,
  },
  modalButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  editTextContainer: {
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.7,
    width: 100,
    alignItems: 'center',
    padding: 3,
  },
  editButtonText: {
    color: 'white',
    fontWeight: '300',
    fontSize: 14,
  },
});
