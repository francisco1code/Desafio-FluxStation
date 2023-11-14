"use client";

import Link from "next/link";

import Styled from './styles';

const Button = ({ children, redirect } :{children: React.ReactNode, redirect: string }) => {
  return (
    <Link href={redirect}>
        <Styled.Button>{children}</Styled.Button>
    </Link>
  )
}

export default Button;
