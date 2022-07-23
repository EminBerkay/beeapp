import { View, Text, Image, TouchableOpacity, Modal, Dimensions, Platform } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'


 const listitem = ({post, index}) => {

     const [information, setInformation] = useState(false)
     
  return (
     <TouchableOpacity 
          onPress={() => setInformation(true)}
          style={{ marginTop:35, margin:20, marginBottom:20, shadowOpacity:0.5, shadowRadius:2, shadowColor:"#bebebe", shadowOffset:{width:2, height:3}}}>
      <View style={{flexDirection:"row",  alignContent:"space-around", justifyContent:"space-between", alignItems:"center", borderRadius:10}}>
          {index+1 == 1 || index+1 == 2 || index+1 == 3
          ? <Image style={{borderColor:"#dedede", borderWidth:0.18, borderRadius:14, position:"absolute", width:"100%", height:100}} source={require("../../images/userbackgroud.jpg")}/>
          : null
          }
         <View style={{
              borderColor:"#e6e6e6",
                    opacity:
                    index+1 == 1 ? 0.32 : 
                    index+1 == 2 ? 0.5 :
                    index+1 == 3 ? 0.05 : 0.5,
               backgroundColor:
                    index+1 == 1 ? "#F6BB4A" : 
                    index+1 == 2 ? "#F8F5F5" :
                    index+1 == 3 ? "red" : "white",
               borderWidth:
                    index+1 == 1 ? 0.35 : 
                    index+1 == 2 ? 0.5 :
                    index+1 == 3 ? 0.05 : 4.4, 
               borderRadius:14, 
               position:"absolute", 
               width:"100%", 
               height:100}}/>
           <View style={{
                marginLeft:10,
                backgroundColor:
                     index+1 == 1 ? "#F6BB4A"
                    :index+1 == 2 ? "#F6BB4A"
                    :index+1 == 3 ? "#F6BB4A"
                    :"#d5d5d5",
                paddingVertical:Platform.OS == "android" ? 7.2 : 9,
                borderRadius:50,
                padding:6, 
                paddingHorizontal:13}}>
          <Text style={{fontSize:15, fontWeight:"700"}}>
          {index+1}
          </Text>
          </View>
          <View style={{alignContent:"center", alignSelf:"center", 
                    backgroundColor: 
                     index+1 == 1 ? "#F6BB4A"
                    :index+1 == 2 ? "#F6BB4A"
                    :index+1 == 3 ? "#F6BB4A"
                    :"#d5d5d5", borderRadius:50, padding:6, paddingHorizontal:6}}>
               <Image key={post?.id} style={{borderRadius:50, width: 50, height:50}} source={{uri:post?.picture?.large}} />
          </View>
          <View>
          <Text numberOfLines={1} style={{marginLeft:-8, width:120, fontWeight:"400"}}>{post?.login?.username}</Text>
          <Text numberOfLines={1} style={{marginLeft:-8, width:120, fontWeight:"400", color:"grey"}}>{post?.location?.city}</Text>
          </View>
          <View style={{flex:0.3, marginRight:10}}>
          {index+1 == 1 || index+1 == 2 || index+1 == 3
          ? <Icon name="person" size={30} color={
                     index+1 == 1 ? "#F6BB4A"
                    :index+1 == 2 ? "grey"
                    :index+1 == 3 ? "#d3d3d3"
                    :"#d5d5d5"
          } />
          : null
          }
         
          </View>
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

export default listitem