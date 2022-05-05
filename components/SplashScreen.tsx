import React, { useEffect, useState } from "react";
import {} from "react-native-elements"
import { StyleSheet } from "react-native";
import ViewWithLoading from "./ViewWithLoading";

export default function SplashScreen() {

  const [visible, setVisible] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);


 

  
  return (
    <ViewWithLoading loading={loading}>
      
</ViewWithLoading>

      
    
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#84a98c',
      justifyContent: 'center',
      alignItems: 'center',               
      paddingHorizontal: 0,
      paddingTop: 40
    },
  
    textStyle: {
      fontFamily: 'poppins-regular',
      fontSize: 15,
      color: 'white'
    },

    input: {
      height: 50,
      width: 400, 
    }
})