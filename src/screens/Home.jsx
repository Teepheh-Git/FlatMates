import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5, EvilIcons } from "@expo/vector-icons";

const Home = () => {
  let notificationAvailable = true;

  const [searchText, setSearchText] = useState("");

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const availableFlats = [
    {
      img: "https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-260nw-2154108011.jpg",
      price: 500000,
      type: "Apartment",
      location: "Lagos Island",
    },
    {
      img: "https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1",
      price: 650000,
      type: "Home",
      location: "Lagos Mainland",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKiP_n9gPuCJkFTg7NFbnGLK9Mf1J28o8r7cY8XBGgMQcnHlA_vRB5QJ-iM02QCZkgC4&usqp=CAU",
      price: 200000,
      type: "Roomate",
      location: "Oshodi",
    },
    {
      img: "https://i.pinimg.com/originals/7d/81/4e/7d814eee185496be2b2f5795e7e31fe7.jpg",
      price: 900000,
      type: "Home",
      location: "Ikeja",
    },
    {
      img: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/6/23/2/Nathalie-Milazzo_Master-Retreat_4.jpg.rend.hgtvcom.616.462.suffix/1445968491002.jpeg",
      price: 350000,
      type: "Apartment",
      location: "Ajah",
    },
  ];

  const verticalFlatData = [];

  return (
    <View style={styles.root}>
      <SafeAreaView />

      {/* -------THE VERTICAL FLATLIST SECTION------------------------ */}
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={({ item, index }) => (
          <View>
            <Text>Dummy</Text>
          </View>
        )}
        //  -------HEADE SECTION OF THE APP EMBEDDED IN THE VERTICAL FLATLIST------------------------
        ListHeaderComponent={
          <>
            <View style={styles.topSection}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.headText}>Find Your Best</Text>
                  <Text style={styles.headText}>Apartment, Roomate..</Text>
                </View>
                <View>
                  <FontAwesome5 name="bell" size={30} color="black" />
                  {notificationAvailable && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: "red",
                        position: "absolute",
                        right: 0,
                      }}
                    />
                  )}
                </View>
              </View>
              <View style={styles.searchBox}>
                <EvilIcons name="search" size={24} color="black" />
                <TextInput
                  value={searchText}
                  onChangeText={setSearchText}
                  placeholder="Search home, roomate..."
                  placeholderTextColor={"#8D8D8D"}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                {["Home", "Roomate", "Apartment"].map((item, index) => (
                  <Pressable
                    onPress={() => setActiveTabIndex(index)}
                    style={{
                      marginRight: 20,
                      paddingHorizontal: 13,
                      paddingVertical: 8,
                      borderWidth: 1,
                      borderRadius: 15,
                      backgroundColor:
                        activeTabIndex === index ? "#9D69FC" : "#FFFFFF",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: activeTabIndex === index ? "#FFFFFF" : "#000",
                      }}
                    >
                      {item}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
            <View style={styles.slidingCarouselBox}>
              <Text style={styles.headText}>Recommended for you</Text>
              <FlatList
                data={availableFlats}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment="start"
                snapToInterval={240}
                decelerationRate={"fast"}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: 230,
                      height: 200,
                      marginRight: 10,
                    }}
                  >
                    <Image
                      source={{ uri: item.img }}
                      style={{
                        width: "100%",
                        height: 130,
                        backgroundColor: "grey",
                      }}
                    />
                    <View
                      style={{
                        marginTop: 10,
                        paddingHorizontal: "5%",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "#9D69FC",
                            fontSize: 16,
                            fontWeight: "700",
                          }}
                        >
                          N{item.price.toLocaleString()}
                        </Text>
                        <Text
                          adjustsFontSizeToFit
                          numberOfLines={1}
                          style={{
                            color: "#848484",
                            fontSize: 16,
                            width: 130,
                          }}
                        >
                          / year . {item.type}
                        </Text>
                      </View>
                      <Text
                        adjustsFontSizeToFit
                        numberOfLines={1}
                        style={{
                          color: "#000",
                          fontSize: 16,
                          width: 130,
                        }}
                      >
                        {item.location}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </>
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  topSection: {
    padding: "10%",
  },
  headText: {
    fontSize: 20,
    fontWeight: 600,
  },
  searchBox: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#8D8D8D",
    marginTop: 30,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  slidingCarouselBox: {
    paddingLeft: "10%",
  },
});
