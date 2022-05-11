import ButtonSuccess from "./components/ButtonSuccess";
import { StyleSheet, View } from "react-native";
import DescriptionFrame from "./components/DescriptionFrame";

export default function App() {
  return (
  
    <View style={styles.allContainer}>
        <ButtonSuccess/>
        <DescriptionFrame/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  allContainer : {
      flex : 1,
      
  },
})

