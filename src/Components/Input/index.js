import React from 'react';
import InputMask from "react-input-mask";
import {Input} from './styles';

const NumberInput = (props) =>(
  <>
  
  <InputMask mask={props.mask} value={props.value} onChange={props.onChange}/>
  </>
)
  



export default NumberInput;