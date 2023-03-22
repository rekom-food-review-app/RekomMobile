import { Button } from "../../components"
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { resetAuthSlice } from "../../global-states";
// import { v4 as uuidv4 } from 'uuid';

interface MyProfileMenuProps
{
  modalVisible: boolean
  setModalVisible: (status: boolean) => void
}

function MyProfileMenu(props: MyProfileMenuProps)
{
  // const [modalVisible, setModalVisible] = useState();
  const nav = useNavigation<any>()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(resetAuthSlice())
    nav.replace("LoginScreen")
  }

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
          <Button type="secondary" onPress={() => handleLogout()} label="Logout"></Button>
          <Button onPress={() => props.setModalVisible(!props.modalVisible)} label="Cancel"></Button>
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

export {MyProfileMenu}