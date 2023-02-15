import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    nav{
    width: 60px;
    height: 100vh;
    background-color: var(--verde-escuro);  
    transition: 0.4s ease-in;
    position: relative;
    position: fixed;
    z-index: 1000;
    overflow-x: hidden;
    border-right:0.5px solid #C7CFEC;
    }
    .sidebar-btn{
        border: none;
        background-color: transparent;
        margin: 2em 0 2em 19px;
        padding: 0 ;
    }
    .sidebar-btn div{
        height: 2px;
        width: 20px;
        background-color: var(--branco);
        margin-top: 5px ;
        transition: 0.3s ease;
    }
    .nav-list{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0 0;
        li {
            a, button{
                padding: 16px 14px;
                display: flex;
                align-items: center;
                color: var(--branco);
                font-size: 16px;
                width: 100%;
                height: 100%;
                span{
                    margin-left: 1em;
                }
            }
            .icon{
                font-size: 30px;
                color: var(--branco);
                border-radius: 50%;
                padding: 2px;
                :hover{
                    background-color:var(--branco);
                    transition:0.3s;
                    color: var(--verde-escuro);
                }
            }
        }
    }
    .teste{
        position: absolute;
        bottom: 2em;
    }
    
    ${({ sidebar }) => sidebar && css`
        nav{
            width: 250px;
            li{
                width:100%;
            }
            li:hover{
                background-color:var(--verde-claro);
                transition:0.3s;
                a, .icon, button{
                    color:var(--verde-escuro);
                }
                .icon:hover{
                    background-color: transparent;
                }
            }
        }
        .line1{
            transform: rotate(-45deg) translate(-2px, 4px);
        }
        .line2{
            opacity: 0;
        }
        .line3{
            transform: rotate(45deg) translate(-5px, -8px);
        }
    `}
 
`