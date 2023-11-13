"use client"

import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { HistoryInput } from "./historyInput"
import { HeaderButton } from "./headerButton"
import { useRouter } from "next/navigation"

interface HeaderProps {

}

const sairaLogo = Saira_Stencil_One({
    weight:['400'],
    subsets: ['latin']
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
`

const Logo = styled.button`
    display: flex;
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    border: none;
`


export function Header( props: HeaderProps){

    const { push } = useRouter()

    const handleRegisterClick = () => {
      push("/")
    };

    return (
        <TagHeader>
            <Logo className={sairaLogo.className} onClick={handleRegisterClick}> FluxSupply </Logo>
            <div>
                <HeaderButton/>
            </div>
        </TagHeader>
    )
}