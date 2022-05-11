import { StyleSheet, View } from "react-native"
import { ScrollView } from "react-native"
import data from '../db/tp.json'
import DescriptionComponent from "./DescriptionComponent"


function DescriptionFrame() {

return (

   <ScrollView style = {style.descriptionFrame}>
      { data.map((data, i) =>                          
      <DescriptionComponent data = {data} key = {i}/>  //pour eviter message d'erreur "Each prop need to have a unique ID"
      )}
  </ScrollView>
  
)}

const style = StyleSheet.create({

descriptionFrame : {

   marginTop : 15,

}
})

export default DescriptionFrame