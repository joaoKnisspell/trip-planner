//React
import { useContext, useEffect, useState } from "react";

//Context
import { UserContext } from "../../context/UserContext";

//Style
import { PageContainer } from "../../components/PageContainer";
import { DashboardStyle } from "./style";

//Components
import Header from "../../components/Header";
import CardContainer from "../../components/Card/index";
import ModalMeta from "../../components/ModalMeta";

//Assets
import avatar from './avatar.png'

//Icons
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
import { Link } from "react-router-dom";

//Firebase
import { db } from '../../services/FirebaseConnection';
import { collection, onSnapshot, where, query, orderBy, addDoc, deleteDoc, doc } from 'firebase/firestore';

const Dashboard = () => {

  const { user, atualizaDoc, loadUserFromLs, getUser, isLoading, setIsLoading, toggleMeta, UpdtateUserGoal } = useContext(UserContext);
  const [goal, setGoal] = useState(user.goal);
  const [aviso, setAviso] = useState(true);
  const [modal, setModal] = useState(false);
  const [meta, setMeta] = useState();
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    //Pegando todas as metas do User:
    async function getAllMetas() {
      const queryRef = collection(db, "metas");
      const q = query(queryRef, orderBy("created", "desc"), where("uid", "==", user.uid))
      const unsub = onSnapshot(q, (snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            meta: doc.data().meta,
            isDone: doc.data().isDone,
            created: doc.data().created
          })
          setMetas(lista)
        })
      })
    }

    getAllMetas()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    UpdtateUserGoal(user.uid, goal)
  }

  //Removendo meta do user:
  async function removeMeta(id) {
    const docRef = doc(db, "metas", id)
    await deleteDoc(docRef)
    .then(() => {
      setMetas(metas.filter((meta) => meta.id !== id))
    })
    .catch(error => console.log(error))
  }

  //Adicionando meta do User:
  async function handleOnSubmitMeta(e) {
    e.preventDefault();

    const docRef = collection(db, "metas");
    await addDoc(docRef, {
      meta: meta,
      isDone: false,
      created: new Date(),
      uid: user.uid
    })
      .then(() => {
        setMeta('');
        setModal(false)
      })
      .catch(error => console.log(error))
  }



  return (
    <>
      <Header />
      <PageContainer>
        <DashboardStyle aviso={aviso}>
          <div className="page-header">
            <form onSubmit={handleSubmit}>
              <input type="text" value={goal || ''} placeholder={user.goal || 'Seu objetivo...'} onChange={(e) => setGoal(e.target.value)} />
              {user.goal === null ? <button type="submit">Enviar</button> : <button type="submit">Atualizar Objetivo</button>}
            </form>
          </div>
          {user.goal === null ?
            <div className="welcome-container">
              <img className="avatar" src={avatar} alt="avatar" />
              <div className="welcome">
                <h2>Olá, {user.name}, seja bem vindo ao Trip Planner!</h2>
                <p>Você está um passo mais próximo de realizar a viagem que tanto sonhou. Para começar a planejar sua viagem escreva o seu objetivo e clique no botão <strong>"Enviar"</strong>. Após adicionar o seu objetivo será importante que você crie metas que o ajudarão a alcançar esse objetivo. <strong>Exemplo:</strong> Conhecer a Irlanda em 2025.</p>
                <button onClick={() => setAviso(false)}><AiFillCloseCircle size={18} /></button>
              </div>
            </div>
            : <div className="metas">
              <div className="metas-header">
                <h1>Minhas metas:</h1><br />
                <button onClick={() => setModal(true)} className="add-meta"><BsPlus size={20} /><span>Nova Meta</span></button>
              </div>
              <ul>
                {metas.map((meta) => {
                  return (
                    <li key={meta.id}>
                      <CardContainer id={meta.id} meta={meta.meta} isDone={meta.isDone} toggleMeta={toggleMeta} removeMeta={removeMeta} />
                    </li>
                  )
                })}
              </ul>
            </div>}
          {modal &&
            <ModalMeta handleOnSubmitMeta={handleOnSubmitMeta} meta={meta} setMeta={setMeta} setModal={setModal} />
          }
        </DashboardStyle>
      </PageContainer>
    </>
  )
}

export default Dashboard