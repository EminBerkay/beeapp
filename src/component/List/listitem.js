import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Dimensions, Platform } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaskGroup26c from '../../images/svg/MaskGroup26C'
import MaskGroup26g from '../../images/svg/MaskGroup26G'
import Component51 from '../../images/svg/Component5–1'
import Component61 from '../../images/svg/Component6–1'
import Component71 from '../../images/svg/Component7–1'

 const listitem = ({post, index}) => {

     const [information, setInformation] = useState(false)
     
  return (
    <TouchableOpacity 
        onPress={() => setInformation(true)}
        style={style.informationButon}>
       <View style={{ position:"absolute", borderWidth:0.5, borderColor:"#e5e5e5", borderRadius:14, marginBottom:10}}>
     { index+1 == 1
          ?  <View style={{backgroundColor:"#feebc3", borderRadius:14, widht:10, opacity:1}}>
             <MaskGroup26c/>
             </View>
          : index+1 == 2
           ? <View style={{ borderRadius:14, widht:10, opacity:1}}>
              <MaskGroup26g/>
             </View>
          : index+1 == 3
           ? <View style={{backgroundColor:"#ecdedeba", borderRadius:14, widht:10, opacity:0.7}}>
              <MaskGroup26c/>
             </View>
          : null}
      </View>
      <View style={{
           borderColor:"#f0f0f0",
           backgroundColor:
                    index+1 == 1 ? null : 
                    index+1 == 2 ? null :
                    index+1 == 3 ? null : "white",
           borderWidth:
                    index+1 == 1 ? 0.1 : 
                    index+1 == 2 ? 0.1 :
                    index+1 == 3 ? 0.1 : 2.8, 
           height:100,
           borderRadius:14,
           alignContent:"center",
           justifyContent:"space-around",
           flexDirection:"row", 
           alignItems:"center"}}>
          <View style={{
                margin:10,
                backgroundColor:
                     index+1 == 1 ? "#F6BB4A"     
                    :index+1 == 2 ? "#F6BB4A"
                    :index+1 == 3 ? "#F6BB4A"
                    :"#d5d5d5",
                paddingVertical:Platform.OS == "android" ? 7.2 : 9,
                borderRadius:50,
                padding:6, 
                paddingHorizontal:14}}>
                    <Text style={{fontSize:17, fontWeight:"800"}}>
                      {index+1}
                    </Text>
          </View>
          <View style={{alignContent:"center", alignSelf:"center", 
                         backgroundColor: 
                         index+1 == 1 ? "#F6BB4A"
                         :index+1 == 2 ? "#F6BB4A"
                         :index+1 == 3 ? "#F6BB4A"
                         :"#e5e5e5", borderRadius:50, padding:4, paddingHorizontal:4}}>
                    <Image key={post?.id} style={{borderRadius:50, width: 55, height:55}} source={{uri:post?.picture?.large}} />
               </View>
              <View>
                <Text numberOfLines={1} style={{ width:120, fontWeight:"400"}}>{post?.login?.username}</Text>
                <Text numberOfLines={1} style={{ width:120, fontWeight:"400", color:"#6a6a6a"}}>{post?.location?.city}</Text>
              </View>
                   {index+1 == 1           
                    ? <Component51/>
                    : index+1 == 2
                     ? <Component61/>
                     : index+1 == 3
                     ? <Component71/>
                     : null
                    }
               <View style={{flex:index >= 3 ? 0.45: 0}}/>
           </View> 
           {information && post
                ? <Modal
                    animationType="fade"
                    visible={information}
                    onRequestClose={() => setInformation(false)}
                    presentationStyle={"formSheet"}
                    statusBarTranslucent>
                      <TouchableOpacity
                       style={{padding:20,paddingTop:30}}
                        onPress={() => {
                         setInformation(false)
                          }}>
                          <Icon style={{alignSelf:"flex-end"}} size={30} name="close"/>
                        </TouchableOpacity>
                          <View style={{alignSelf:"center", padding:10, margin:20, width:Dimensions.get("screen").width}}>
                               <Text>
                                    {JSON.stringify(post)}
                               </Text>
                          </View>
                  </Modal>
                : null
                }    
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
     informationButon:{
          margin:15,
          shadowColor:"#c3c3c3",
          shadowOffset:{width:0, height:3}, 
          shadowOpacity:0.7, shadowRadius:4,
          marginBottom:20, height:75, marginTop:20,
          borderRadius:14, alignContent:"center",
          justifyContent:"center"
     }
})

export default listitem