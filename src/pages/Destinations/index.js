//React
import { useContext, useState, useEffect } from "react";

//Context
import { UserContext } from "../../context/UserContext";

//Firebase
import { db } from '../../services/FirebaseConnection';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';

//Style
import { DestinationsContainer } from "./style";
import { PageContainer } from "../../components/PageContainer";

//Components
import Header from "../../components/Header";
import CountryCard from "../../components/CountryCard";
import TopicCard from "../../components/TopicCard";

//Icon
import { BsPlus } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Destinations = () => {

    const { user } = useContext(UserContext)
    const [destinations, setDestinations] = useState([]);
    const [topics, setTopics] = useState([]);
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //Pegando todos destinos do user:
        async function getDestinations() {
            const queryRef = collection(db, "destinations");
            const q = query(queryRef, where("uid", "==", user.uid));
            await getDocs(q)
                .then((snapshot) => {
                    let lista = [];
                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            pais: doc.data().pais,
                            cidade: doc.data().cidade,
                            data: doc.data().data,
                            uid: doc.data().uid
                        })
                        setDestinations(lista)
                        setLoading(false)
                    })
                })
        }

        //Pegando todos topicos do user:
        async function getTopics() {
            const queryRef = collection(db, "topics");
            const q = query(queryRef, where("uid", "==", user.uid));
            await getDocs(q)
                .then((snapshot) => {
                    let lista = [];
                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            pais: doc.data().pais,
                            assunto: doc.data().assunto,
                            texto: doc.data().texto,
                            uid: doc.data().uid
                        })
                        setTopics(lista)
                        setLoading(false)
                    })
                })
        }

        getDestinations()
        getTopics()
    }, [])

    return (
        <>
            <Header />
            <PageContainer>
                <DestinationsContainer>
                    <div className="page-header">
                        <h1>Destinos:</h1>
                        <Link to="new" className="add-destination" onClick={() => setModal(true)}><BsPlus size={20} /><span>Novo Destino</span></Link>
                    </div>

                    <section className="cards">
                        {!loading &&
                            destinations.map((destiny) => {
                                return (
                                    <CountryCard
                                        key={destiny.id}
                                        id={destiny.id}
                                        pais={destiny.pais}
                                        cidade={destiny.cidade}
                                        data={destiny.data}
                                    />
                                )
                            })
                        }
                    </section>

                    {destinations.length > 0 &&
                        <div className="page-header topicos">
                            <h1>Tópicos:</h1>
                            <Link to="/topics/new" className="add-destination" onClick={() => setModal(true)}><BsPlus size={20} /><span>Novo Tópico</span></Link>
                        </div>
                    }

                    <section className="cards">
                        {!loading &&
                            topics.map((topic) => {
                                return (
                                    <TopicCard
                                        key={topic.id}
                                        id={topic.id}
                                        pais={topic.pais}
                                        assunto={topic.assunto}
                                    />
                                )
                            })
                        }
                    </section>
                </DestinationsContainer>
            </PageContainer>
        </>
    )
}

export default Destinations;