import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginCall } from '../Redux/Action/loginAction';

export default function Home() {
    const dispatch=useDispatch()
    const response = useSelector((state) => state?.loginReducer);
    useEffect(()=>{
        console.log("login==>",response)
    },[response])
  
    const _loginTrigger=()=>{
        const params={
            
                "name":"10100025.user@codejig.com",
                "password":"10100025.user@codejig.com"
            
        }
        dispatch(loginCall(params))
    }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

 
      <TouchableOpacity onPress={()=>_loginTrigger()}>
        <Text>App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
