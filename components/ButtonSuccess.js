import { Text,Pressable, View, StyleSheet } from 'react-native'


function ButtonSuccess() {
  return (
     
        <Pressable style={styles.btnAlone}>
          <Text style={styles.text} >FELICITATIONS</Text>
        </Pressable>
 
  )
}

const styles = StyleSheet.create({

btnAlone:{
 
 borderWidth : 2,
 borderColor : "black",
 backgroundColor : "lightgreen",
 marginTop : 70,
 width : '60%',
 alignSelf : 'center',
 height : 50,
 shadowColor: "#000",
 shadowOffset: {
 width: 0,
 height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,
elevation: 24,

},

text:{

 alignSelf : 'center',
 marginTop : 12

}


})


export default ButtonSuccess