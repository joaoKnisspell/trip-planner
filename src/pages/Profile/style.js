import styled from "styled-components";

export const ProfileContainer = styled.main`
    form{
        width: 100%;
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        .input-nao-editavel{
            color: gray;
        }
        span{
            display: block;
            margin-bottom: 5px;
        }
        input, button, textarea, select{
            width: 100%;
            padding: 10px 16px;
            height: 100%;
            max-width: 450px;
            font-size: 16px;
        }
        input, textarea, select{
            background-color: #EEEEEE;
            color: #1E1E1E;
        }
        textarea, select{
            outline: none;
            border: none;
        }
        textarea{
            height: 350px;
            resize: none;
        }
        button{
            background-color: var(--laranja);
            color: var(--branco);
        }
    }

    @media screen and (max-width: 500px){
        textarea{
            max-height: 300px;
        }
    }
`