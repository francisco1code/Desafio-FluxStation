
import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'

export const sairaLogo = Saira_Stencil_One({
    weight:['400'],
    subsets: ['latin']
})

const WrapHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
`;

const Logo = styled.button`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    border: none;
    background-color: white;
    cursor: pointer;
`;

const styles = {
    WrapHeader,
    Logo
}

export default styles;