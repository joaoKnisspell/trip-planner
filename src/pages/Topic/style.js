import styled from "styled-components";

export const TopicContainer = styled.article`
    width: 100%;
    max-width: 800px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    padding: 2em;
    margin: 2em auto;
    background-color: var(--branco);
    border-radius: 10px;
    .topic-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;
        .header-btns{
            display: flex;
            gap: 10px;
            button{
                font-weight: 600;
                font-size: 16px;
                color: var(--branco);
            }
            .btn1{
                color: var(--laranja);
            }
            .btn2{
                color: var(--verde-escuro);
            }
        }
    }

    h2{
        font-size: 20px;
        /* margin: 1em 0 2px 0; */
        font-weight: 600;
    }

    p{
        line-height: 25px;
        text-align: justify;
        font-weight: 14px;
    }
    
    @media screen and (max-width: 500px){
        padding: 1em;
        p{
            font-size: 14px;
        }
    }
`