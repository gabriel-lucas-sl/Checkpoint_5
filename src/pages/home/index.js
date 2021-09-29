import React, { useState } from 'react';
import { FlatList, SafeAreaViewComponent, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Modal, Select, Slider } from './styles';
import Carousel from 'react-native-snap-carousel';
import CarouselCards from '../CarouselCards';

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
]

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageURL, setImagemURL] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [getData, setData] = useState({});

  const getAll = async () =>{
      try {
        const uriListAll = "https://dog.ceo/api/breeds/list/all";
        const response = await fetch(uriListAll);

        if(response.status != 200){
            console.log(`Erro: ${response.status}`);
            return;
        }

        const json = await response.json();
        setData(json);

        return json.message;

      } catch (error) {
        console.error(error)
      }
  }
  const getByBreed = async (breed)=>{
          try{
      setLoading(true);
      const responde = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`)
          if(response.status != 200){
                        console.log(`Erro: ${response.status}`);
                        return;
              }
                    const json = await response.json();
          } catch (error) {
              console.log(error);
          }finally{
          setLoading(false);
          }
  }

  const renderItem = ({ item }) => {
    console.log("DASD", item);
    return(
      <View>

      </View>
    );
  }

  const renderSlider = () => {
    return(
      <Slider>
        <CarouselCards />
      </Slider>
    );
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          DOG API
        </Text>
      </View>

      <Select onPress={() => {
        setModalVisible(true)
        getAll()
      }}>
        <Text>Selecione uma raça...</Text>
      </Select>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        size="1000"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{
                paddingVertical: 8,
                borderBottomWidth: 1,
                borderBottomColor: 'grey'
              }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Hide Modal</Text>
            </TouchableOpacity>

            <FlatList
              data={getData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>

      {/* {renderSlider()} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: '#B1E693',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },

  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },

  centeredView: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 20,
  },

  modalView: {
    flex: 1,
    marginVertical: 50,
    backgroundColor: "white",
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});