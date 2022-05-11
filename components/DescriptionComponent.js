import { View, Text, Image, StyleSheet } from "react-native"


function Component(props) { //pour training destructuring. peut mettre la variable direct (data)
  return (
    <View style = {style.exerciceContainer}> 
       <Image style = {style.mainViewImage} source ={{uri: 
        props.data.img
        }}></Image>
          <View style = {style.mainViewDescContainer}>
                 <Text style = {style.title}>{props.data.title}</Text>
                 <Text  style = {style.descriptor}>{props.data.desc}</Text>
          </View>
     </View>)
  
}

const style = StyleSheet.create({

exerciceContainer:{

    marginLeft : 15,
    marginRight : 15,
    flexDirection : "row",
    marginBottom : 15,
    borderWidth : 2,
    borderColor :"black" ,
    borderRadius : 10,

    },

mainViewImage:{
    
     flex : 0.5,
    },

mainViewDescContainer:{
    
      padding : 10,
      flex : 0.5,
    },

  descriptor : {

    marginTop : 10

  },

  descriptor : {

    marginTop : 10

  },

  title :{

   textDecorationLine : "underline",
   fontSize : 16,
   fontWeight : "bold"

  }

})

export default Component