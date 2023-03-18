import { Button, CsText } from "../../components"
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface NotiModalProps
{
  modalVisible: boolean
  setModalVisible: (status: boolean) => void
}

function NotiModal(props: NotiModalProps)
{
  const nav = useNavigation<any>()

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CsText size="md" weight={"bold"}>Hi, You Login Too Much Today, Please Try Another Day</CsText>
          <Button size="sm" onPress={() => props.setModalVisible(!props.modalVisible)} label="Ok"></Button>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'white'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    gap: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export {NotiModal}