import { View, Text, SafeAreaView, Appearance, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import Arrow from '../../images/svg/Arrowİcon'

 const theme = Appearance.getColorScheme()

 export default function Header () {

        
          return(
             <SafeAreaView
                style={style.header}>   
              <TouchableOpacity
                hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
                style={{padding:15, paddingLeft:25}}
                onPress={() => null}>
               <View 
                  style={style.headerItem}>
                   <View >
                    <Arrow/>
                   </View>
               </View>
              </TouchableOpacity>
                   <Text 
                      style={style.headerText}>
                      Sıralama
                    </Text> 
              </SafeAreaView>
          )     
      }
const style = StyleSheet.create({

     header:{
          flexDirection:"row",
          borderBottomColor:(theme == "dark" ? "#2a2a2a" : "#dedede"),
          borderBottomWidth:0.18,
          shadowColor:"#dddddd",
          shadowRadius:3,
          shadowOpacity:0.2,
          shadowOffset:{height:5},
          backgroundColor:(theme == "dark" ? "black" : "white")

     },
     headerItem:{
          padding:10, 
          paddingHorizontal:10, 
          borderRadius:8, 
          borderWidth:Platform.OS == "android" ? 0.3 : 0.19, 
          borderColor:"#e5e5e5", 
          shadowOpacity:1.8, 
          backgroundColor:"white", 
          shadowColor:"#e5e5e5", 
          shadowRadius:2, 
          shadowOffset:{width:0, height:2}
     },
     headerText:{
          alignSelf:"center",
          marginLeft:20,
          color:"black",
          fontSize:15
     }
})

