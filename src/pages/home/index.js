import React, { useState } from 'react';
import { FlatList, SafeAreaViewComponent, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Modal, Select } from './styles';

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

  const getAll = async () =>{
      try {
        const uriListAll = "https://dog.ceo/api/breeds/list/all";
        const response = await fetchuriListAll
          if(response.status != 200){
              console.log(`Erro: ${response.status}`);
              return;
          }
        const json = await response.json();
      } catch (error) {
        console.log(error)
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

  const renderList = ({ item }) => {
    return(
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          DOG API
        </Text>
      </View>

      <Select onPress={() => setModalVisible(true)}>
        <Text>Selecione uma raça...</Text>
      </Select>

      <Container>
        <FlatList
          data={DATA}
          renderItem={renderList}
          keyExtractor={(item, index) => item + index}
        />
      </Container>
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
});