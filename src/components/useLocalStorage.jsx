import {useState, useEffect} from "react";


 export function useLocalStorage(objName, initialState) {
    const [error, setError] =useState(false)
    const [loading, setLoading] =useState(true)
    const [obj,setObj]= useState(initialState)
  
    useEffect(
      ()=>{setTimeout(()=>{
        try{
        const localStorageObj= localStorage.getItem(objName)
  
        let parseObj;
      
        if (!localStorageObj) {localStorage.setItem(objName, JSON.stringify(initialState))
      parseObj=initialState}
        else {parseObj = JSON.parse(localStorageObj)}
  
        setObj(parseObj)
        setLoading(false)
      
        } catch(error){setError(error)}
      },1000)}
    );
  
    
  
    
  
    const saveObj = (newObj)=>{
      try{
        const stringifiedItems=JSON.stringify(newObj)
        localStorage.setItem(objName,stringifiedItems)
        setObj(newObj);}
      catch(error){setError(error)}
    }
  
   return {obj,saveObj,loading,error};
  }
  