"use client";

import Link from "next/link";
import styled from "styled-components";



const StyleRegister = styled.button`
width: 150px;
border-radius: 8px;
padding: 10px 16px;
justify-content: space-between;
color: #ffffff;
background-color: #426B1F;

font-weight. 400;
font-size: 14px;
line-height: 22 px;

&:hover {
  background-color:#32491F;
}
`;


export function HeaderButton() {

  return (
    <Link href="https://fluxstation.com/fluxstation">
        <StyleRegister> Outros produtos </StyleRegister>
    </Link>
    
  )

}
