import { Link } from "react-router-dom";
import styled from "styled-components";
import vector from "./vector.png";

export const Container = styled.article`
    width: 200px;
    height: 120px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    .info-container{
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 1em;
    }

    .vector{
        position: absolute;
        right: -50px;
        bottom: -50px;
        img{
            width: 150px;
        }
    }

    .topic-img{
        width: 130px;
    }

    .topic-link{
        color: var(--azul);
        font-size: 14px;
        position: absolute;
        bottom: 1em;
        font-weight: 600;
    }
`

const CountryCard = ({ id, pais, cidade, data }) => {
    return (
        <Container>
            <div className="info-container">
                <h3>{pais}</h3>
                <span className="city">{cidade}</span>
                <span>{data}</span>
            </div>
            <div className="vector">
                <img src={vector} alt="vector" /> 
            </div>
        </Container>
    )
}

export default CountryCard;