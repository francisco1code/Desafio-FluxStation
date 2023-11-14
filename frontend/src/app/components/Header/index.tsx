"use client";

import { useRouter } from "next/navigation"

import Button from "@/components/Button"

import Styled, { sairaLogo } from "./styles";

export function Header() {
    const { push } = useRouter()

    const handleRegisterClick = () => {
      push("/")
    };

    return (
        <Styled.WrapHeader>
            <Styled.Logo className={sairaLogo.className} onClick={handleRegisterClick}> FluxSupply </Styled.Logo>
            <Button redirect="https://fluxstation.com/fluxstation">Outros Produtos</Button>
        </Styled.WrapHeader>
    )
}