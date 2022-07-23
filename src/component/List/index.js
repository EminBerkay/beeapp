import { View, Text, FlatList, RefreshControl, TouchableOpacity, ActivityIndicator } from 'react-native'
import React,{Fragment, useState, useCallback, useEffect} from 'react'
import ListItem from './listitem'
import { connect } from 'react-redux'
import { apiData } from '../api/redux/actions'

const index = (props) => {

     const [refreshing, setRefreshing] = useState(false)
     const [process, setProcess] = useState(true)
     const [loading, setLoading] = useState(false)
     const [loadCount, setLoadCount] = useState(20)

     useEffect(() => {
          
          if(process){
              props.apiData()
              setProcess(false)
           }
      
     }, [])

     const wait = (timeout) => {
          return new Promise(resolve => setTimeout(resolve, timeout));
     }
      
     const onRefresh = useCallback(() => {
         try {
          setRefreshing(true);
          props.apiData()
          wait(1000).then(() => {setRefreshing(false)})
         } catch (error) {
             
         }
     }, [])


     const footer = () => {
        return(
          <TouchableOpacity
            onPress={() => {setLoading(true), setTimeout(() => {setLoadCount(loadCount+20), setLoading(false)},1000)}} 
            style={{alignSelf:"center", margin:20, marginBottom:100}}>
             {
               loading 
               ? <ActivityIndicator size={"small"} color={"grey"}/>
               : <Text style={{color:"grey", fontWeight:"600"}}>Daha fazla yükle..</Text>
             }
          </TouchableOpacity>
        )
     }

  return (
    <Fragment>
       <FlatList
            style={{  height: "100%", backgroundColor:"#f8f8f8"}}
               refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}  
              />
            }
            data={props?.data?.slice(0,loadCount)}
            extraData={props?.data}
            keyExtractor={({ login }) => login.uuid}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={(footer())}
            renderItem={({ item, index }) => <ListItem post={item} index={index}/>}>
          </FlatList>
     </Fragment>
 
  )
}


const mapStateToProps = state => {

     return {
   
        data: state?.data
     }
   
   }
export default connect(mapStateToProps, { apiData })(index);
   