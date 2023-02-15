import styled from "styled-components";

export const DestinationsContainer = styled.div`

    .page-header{
        margin-bottom: 2em;
        justify-content: space-between;
    }

    .page-header, .add-destination{
        display: flex;
        align-items: center;
    }

    .add-destination{
        padding: 8px ;
        width: 150px;
        background-color: var(--laranja);
        color: var(--branco);
        gap: 5px;
        font-size: 14px;
        justify-content: center;
    }

    .cards{
        width: 100%;
        display: flex;
        gap: 2em;
        flex-wrap: wrap;
        margin-bottom: 2em;
    }

    @media screen and (max-width: 500px){
        .page-header{
            flex-direction: column;
            gap: 5px;
        }
        .cards{
            gap: 1em;
            justify-content: center;
        }
    }

`