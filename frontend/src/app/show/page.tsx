"use client"

import styled from "styled-components"


const Container = styled.div`

    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh; /* Define a altura para ocupar a altura total da viewport */
    margin-top: 200px;

`

export default function Show(){
    return(
       <Container> Cadastro concluido </Container>
    )
}