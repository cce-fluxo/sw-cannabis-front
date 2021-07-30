import React from 'react';
import Header from '../../../Components/Header';
import { Link } from 'react-router-dom';
import { InnerContainerBg,ContainerBg,InnerTitle, Table, InfoIcon } from './styles';
import {Title} from '../../../Utils/styles';
import Info from '../../../Assets/info.svg';

export default function Cadastros(){
    const testList=[
        {name:'Alberto Fernandes',
        job:'Psicólogo'},
        {name:'Isadora Almeida',
        job:'Responsável'},
        {name:'Isadora Almeida',
        job:'Responsável'},
        {name:'Isadora Almeida',
        job:'Responsável'}
    ]
    const renderList = testList.map((item,index)=>{
        return(
          <>
            <Table key={index}>
                <p>{item.name} - {item.job}</p>
                <Link to='/cadastros/aprovar'><InfoIcon src={Info}/></Link>
            </Table>
          
          </>
        )
      })

    return(
        <>
        <Header/>
        <ContainerBg>
            <Title underline={true}>CADASTROS</Title>
            <InnerContainerBg>
                <InnerTitle>Clique no ícone ao lado do nome para visualizar as informações do usuário e
aprovar o cadastro.</InnerTitle>
            {renderList}
            </InnerContainerBg>
        </ContainerBg>
        </>
    )
}