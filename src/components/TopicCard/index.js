import { Link } from "react-router-dom";
import { Container } from "../CountryCard";
import vector from "./vector.png";

const TopicCard = ( { id, pais, assunto } ) => {
        return (
            <Container>
                <div className="info-container">
                    <h3>{pais}</h3>
                    <span className="city">{assunto}</span>
                    <Link className="topic-link" to={`/topics/${id}`}>Visualizar </Link>
                </div>
                <div className="vector topic-img">
                    <img src={vector} alt="vector" /> 
                </div>
            </Container>
        )
}

export default TopicCard