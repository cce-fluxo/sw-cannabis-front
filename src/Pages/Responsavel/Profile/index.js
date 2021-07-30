import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import { InnerContainerBg, ProfileBg,Title, TitleContainer } from './styles';

export default function Profile(){

  return(
    <>
    <Head title="Terapeutas Cannábicos - Perfil" description="Descrição do perfil"/>
    <Header/>
    <ProfileBg>
      <TitleContainer>
        <Link to='/perfil/dados'><Title>DADOS</Title></Link>
        <Link to='/perfil/pacientes'><Title>PACIENTES</Title></Link>
      </TitleContainer>
      <InnerContainerBg>

      </InnerContainerBg>
    </ProfileBg>
    </>
  )
}