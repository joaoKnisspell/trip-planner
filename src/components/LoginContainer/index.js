//React
import styled from "styled-components";

//Assets
import fundo from "./fundo-login.jpg"

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
    .logo {
        width: 100%;
        display: flex;
        justify-content: center;
        img{
            width: 230px;
        }
    }
    main{
        width: 100%;
        max-width: 530px;
        background-color: var(--branco);
        padding: 2em 3em;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        h1{
            color: #FFF;
        }
        form{
            display: flex;
            flex-direction: column;
            gap: 2em;
            input, button, h1, span{
                width: 100%;
                font-size: 20px;
            }
            input, select{
                background-color: transparent;
                padding-bottom: 8px ;
                border-bottom: 3px solid var(--branco);
                color: var(--branco);
                ::placeholder{
                    color: var(--branco);
                }
            }
            button{
                padding: 10px 0;
                color: var(--branco);
                background-color:var(--azul);
            }
            h1{
                font-weight: 500;
            }
        }
        p{
            text-align: center;
            margin-top: 1em;
            color: var(--branco);
            a{
                color: var(--amarelo);
                text-decoration: underline;
            }
        }
    }
    footer{
        position:absolute;
        bottom: 0;
    }
    
    @media screen and (max-width: 500px){
        justify-content: flex-start;
        main{
            margin-top:2em;
        }
    }
`
