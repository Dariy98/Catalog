import React from 'react';
import Main from './components/MainUpdate';
import Header from './../page-add/components/HeaderBack';
import { useParams } from "react-router-dom";

export default function PageUpdate() {

  const { id } = useParams();

  return (
    <div>
      <Header/>
      <Main id={id}/>
    </div>
  );
}