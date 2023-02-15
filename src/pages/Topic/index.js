//React
import { useEffect, useState } from "react";

//Router
import { useParams, useNavigate, Link } from "react-router-dom";

//Components
import Header from "../../components/Header";

//Style
import { PageContainer } from "../../components/PageContainer";
import { TopicContainer } from "../Topic/style";

//Firebase
import { db } from "../../services/FirebaseConnection";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Topic = () => {

    const { id } = useParams();
    const [topic, setTopic] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        //Buscando Tópico:
        async function getTopic() {
            const docRef = doc(db, "topics", id);
            await getDoc(docRef)
                .then((value) => {
                    setTopic(value.data())
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error)
                    setLoading(false)
                })
        }
        getTopic()
    }, [])

    //Deletando tópico
    async function handleDelete(){
        const docRef = doc(db, "topics", id);
        await deleteDoc(docRef)
        .then(() => {
            toast.success("Tópico excluído com sucesso!")
            navigate("/destinations")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <Header />
            <PageContainer style={{background: 'var(--verde-claro)'}}>
                {!loading ?
                <>
                <h1 className="topic-title">{topic.pais}</h1>
                    <TopicContainer>
                        <div className="topic-header">
                            {/* <h1>{topic.pais}</h1> */}
                            <h2>{topic.assunto}:</h2>
                            <div className="header-btns">
                            <Link to={`/topics/edit/${id}`}><button className="btn1">Editar</button></Link>
                                <button onClick={handleDelete} className="btn2">Excluir</button>
                            </div>
                        </div>
                        <p>{topic.texto}</p>
                    </TopicContainer>
                </>
                    :
                    <h3>Carregando informações do Tópico...</h3>
                }
            </PageContainer>
        </>
    )
}

export default Topic