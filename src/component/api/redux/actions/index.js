export const apiData = () => async dispatch =>{
     
     const url = ("https://randomuser.me/api/?results=100")

     await fetch(url)      
           .then(res => res.json())      
           .then(res => {        
               dispatch({type: 'GET_DATA', payload: res?.results})
             });        
            
  }