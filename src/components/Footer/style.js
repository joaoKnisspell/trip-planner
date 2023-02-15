import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    width: 100%;
    color: var(--azul);
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    position: absolute;
    bottom: 0;

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type:none;
        gap: 12px;
        margin-top: 6px;
    }
    a{
        text-decoration: none;
        color: var(--branco);
        font-size: 30px;
        opacity: 0.7;
        transition: .4s;
    }

    p{
        color: var(--branco);
    }

    a:hover{
        opacity: 1;
    }
`
