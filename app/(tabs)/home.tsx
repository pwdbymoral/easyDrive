import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "@/components/Button";
import Input from "@/components/Input";
import SelectDropdown from "react-native-select-dropdown";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Car } from "../../types/types";

const cars: Car[] = [
  { name: "Corolla", consumption: 12 }, // km/l
  { name: "Corsa", consumption: 10 }, // km/l
];

const globeImages: Record<string, any> = {
  white: require("@/assets/images/globeWhite.png"),
  green: require("@/assets/images/globeGreen.png"),
  red: require("@/assets/images/globeRed.png"),
};

const gasPrice = 6; // reais

export default function HomeScreen() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [distance, setDistance] = useState<string>("");
  const [rideValue, setRideValue] = useState<string>("");
  const [gasConsumption, setGasConsumption] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);
  const [message, setMessage] = useState<string>("Esperando dados...");
  const [globeColor, setGlobeColor] = useState<"white" | "green" | "red">(
    "white"
  );

  const handleCarSelect = (car: Car) => {
    setSelectedCar(car);
    setGasConsumption(car.consumption);
  };

  const handleDistanceChange = (text: string) => {
    setDistance(text);
  };

  const handleRideValueChange = (text: string) => {
    setRideValue(text);
  };

  const calculateProfit = () => {
    const gasCost = (parseFloat(distance) / gasConsumption) * gasPrice;
    const profit = parseFloat(rideValue) - gasCost;
    setProfit(profit);
    if (profit >= 5) {
      setMessage("A corrida vale a pena!");
      setGlobeColor("green");
    } else {
      setMessage("A corrida não vale a pena.");
      setGlobeColor("red");
    }
  };

  const handleClear = () => {
    setSelectedCar(null);
    setDistance("");
    setRideValue("");
    setGasConsumption(0);
    setProfit(0);
    setMessage("Esperando dados...");
    setGlobeColor("white");
  };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={styles.messageContainer}>
        <Image source={globeImages[globeColor]} style={styles.logo} />
        <Text style={styles.messageText}>{message}</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>EasyDrive</Text>

        <SelectDropdown
          data={cars.map((car) => car.name)}
          onSelect={(selectedItem) =>
            handleCarSelect(cars.find((car) => car.name === selectedItem)!)
          }
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem) || "Selecione seu carro"}
                </Text>
                <Ionicons
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  size={24}
                  color={"#333"}
                />
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#D2D9DF" }),
                }}
              >
                <Ionicons name={"car"} style={styles.dropdownItemIconStyle} />
                <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />

        <Input
          placeholder="Distância (km)"
          value={distance}
          onChangeText={handleDistanceChange}
          keyboardType="numeric"
        />

        <Input
          placeholder="Valor da corrida (R$)"
          value={rideValue}
          onChangeText={handleRideValueChange}
          keyboardType="numeric"
        />

        <Button onPress={calculateProfit} text={"Calcular"} />

        <Button onPress={handleClear} text={"Limpar"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    backgroundColor: "#1056B3",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  messageText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    backgroundColor: "#99DCFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1056B3",
  },
  dropdownButtonStyle: {
    width: 200,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dropdownButtonTxtStyle: {
    fontSize: 16,
    color: "#333",
  },
  dropdownButtonArrowStyle: {
    fontSize: 16,
    color: "#333",
  },
  dropdownItemStyle: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    gap: 4,
  },
  dropdownItemIconStyle: {
    fontSize: 16,
    color: "#333",
    marginRight: 10,
  },
  dropdownItemTxtStyle: {
    fontSize: 16,
    color: "#333",
  },
  dropdownMenuStyle: {
    width: 200,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: -40,
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
  },
});
