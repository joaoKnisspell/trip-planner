//React
import { useContext, useEffect, useState } from 'react';

//Router
import { useNavigate, useParams } from 'react-router-dom';

//Context
import { UserContext } from '../../context/UserContext';

//Components
import Header from '../../components/Header';

//Style
import { PageContainer } from "../../components/PageContainer";
import { ProfileContainer } from '../Profile/style';

//Firebase
import { db } from '../../services/FirebaseConnection';
import { getDocs, collection, addDoc, doc, getDoc, updateDoc, query, where } from 'firebase/firestore';

//Toastify
import { toast } from 'react-toastify';

const NewTopic = () => {

    const { user } = useContext(UserContext);
    const [pais, setPais] = useState();
    const [assunto, setAssunto] = useState();
    const [paises, setPaises] = useState([]);
    const [texto, setTexto] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    const [ topic, setTopic ] = useState();

    useEffect(() => {

        if(id){
            getTopic()
        }else{
            getAllPaises()
        }

    }, [])

    //Pegando todos paises:
    async function getAllPaises() {
        const docsRef = collection(db, "destinations")
        const q = query(docsRef, where("uid", "==", user.uid))
        await getDocs(q)
            .then((snapshot) => {
                let lista = [];
                snapshot.forEach((doc) => {
                    lista.push({
                        pais: doc.data().pais
                    })
                })
                setPaises(lista)
                setLoading(false)
            })
    }
    getAllPaises()

    //Criando tópico
    async function createTopic() {
        const docsRef = collection(db, "topics")
        await addDoc(docsRef, {
            uid: user.uid,
            pais: pais,
            assunto: assunto,
            texto: texto
        })
            .then(() => {
                toast.success("Tópico criado com sucesso!");
                navigate("/destinations")
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pais !== '' && assunto !== '' && texto !== '' && id === undefined) {
            createTopic()
        }else if(pais !== '' && assunto !== '' && texto !== ''){
            updateTopic();
        }
    }

    //Pegando tópico do Db:
    async function getTopic() {
        const docRef = doc(db, "topics", id);
        await getDoc(docRef)
            .then((value) => {
                    setPais(value.data().pais);
                    setAssunto(value.data().assunto);
                    setTexto(value.data().texto);
                    setTopic(value.data());
                    setLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }

    //Atualizando tópico:
    async function updateTopic(){
        const docRef = doc(db, "topics", id);
        await updateDoc(docRef, {
            texto: texto,
        })
        .then(() => {
            toast.success("Tópico editado com sucesso!")
            navigate(`/topics/${id}`)
        })
        .catch(error => console.log(error))
    }


    return (
        <>
            <Header />
            <PageContainer>
                <ProfileContainer>
                    {!loading ?
                        <>
                            <h1>{id ? "Editar Tópico:" : "Novo Tópico:"}</h1>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    <span>País:</span>
                                    <select type="text" value={pais || ''} onChange={(e) => setPais(e.target.value)}>
                                        <option value=''></option>
                                        {paises.map((pais) => {
                                            return (
                                                <option key={pais.pais} value={pais.pais}>{pais.pais}</option>
                                            )
                                        })}
                                    </select>
                                </label>


                                <label>
                                    <span>Assunto:</span>
                                    <input type="text" value={assunto || ''} onChange={(e) => setAssunto(e.target.value)} />
                                </label>

                                <label>
                                    <span>Digite sobre o assunto escolhido:</span>
                                    <textarea type="text" value={texto || ''} onChange={(e) => setTexto(e.target.value)} />
                                </label>

                                {id ? <button type='submit'>Editar</button> : <button type='submit'>Adicionar</button>}
                            </form>
                        </>
                    : <span>Carregando informações...</span>}
                </ProfileContainer>
            </PageContainer>
        </>
    )
}

export default NewTopic