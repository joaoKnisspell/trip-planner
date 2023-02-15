import styled, { css } from "styled-components";

export const DashboardStyle = styled.main`

    .page-header, form{
        display: flex;
        justify-content: center;
        gap: 1em;
    }

    .page-header{
        form{
            width: 100%;
            align-items: center;
            input{
                width: 100%;
                max-width:500px;
                font-size: 16px;
                background: #EEEEEE;
                border-radius: 100px;
                color: #1E1E1E;
                padding: 15px 25px;
            }
            button{
                font-weight: 500;
                background-color: var(--laranja);
                color: var(--branco);
                border-radius: 100px;
                padding: 14px 20px;
            }
        }
    }

    .welcome-container, .welcome{
        position: relative;
        width: 100%;
    }

    .welcome-container{
        max-width:600px;
        height: 400px;
        margin: 0 auto;
        .avatar{
            position: absolute;
            width: 200px;
            bottom:0px;
            right: -80px;
            z-index: 100;
        }
    }

    .welcome{
        padding: 2em;
        margin: 4em auto 0 auto;
        max-width: 500px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        h2{
            text-align: center;
        }
        p{
            text-align: justify;
            margin: 1em 0 0 0;
            line-height: 23px;
        }
        button{
            position: absolute;
            top: -6px;
            right: -6px;
        }
    }

    .metas, ul, .add-meta, .metas-header{
        display: flex;
    }

    .metas{
        flex-direction: column;
        margin-top: 2em;
        width: 100%;
        .metas-header{
            justify-content: space-between;
            margin-bottom: 1.5em;
            .add-meta{
                align-items: center;
                gap: 5px;
            }
            button{
                padding: 8px 16px;
                background-color: var(--amarelo);
                color: var(--branco);
            }
        }
        ul{
            gap: 2em;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
    }

    ${({ aviso }) => !aviso && css`
        .welcome-container, welcome{
            display: none;
        }
    `}

    @media screen and (max-width: 500px){
        .page-header{
            form{
                flex-direction:column;
                input{
                    text-align:center;
                }
                input, button{
                    padding:10px;
                }
                button{
                    width:80%;
                }
            }
        }

        .welcome-container{
            .avatar{
                display:none;
            }
        }

        .metas{
            .metas-header{
                flex-direction:column;
                justify-content:center;
            }
            ul{
                gap:1em;
                justify-content:center;
            }
        }
    }

`