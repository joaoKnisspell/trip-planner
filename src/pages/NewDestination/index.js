//React
import { useState, useContext, useEffect } from 'react';

//Router
import { useNavigate } from 'react-router-dom';

//Firebase
import { db } from '../../services/FirebaseConnection';
import { addDoc, collection } from 'firebase/firestore';

//Context
import { UserContext } from '../../context/UserContext';

//Style
import { PageContainer } from '../../components/PageContainer';
import { ProfileContainer } from '../Profile/style';

//Components
import Header from '../../components/Header';

//Toastify
import { toast } from 'react-toastify';

const NewDestination = () => {

  const { user } = useContext(UserContext);
  const [pais, setPais] = useState('');
  const [cidade, setCidade] = useState('');
  const [data, setData] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pais !== '') {
      newDestiny()
    } else {
      toast.warn('O campo "país" é obrigatório');
    }
  }

  //Criando novo destino:
  async function newDestiny() {
    const docRef = collection(db, "destinations")
    await addDoc(docRef, {
      uid: user.uid,
      pais: pais,
      cidade: cidade,
      data: data,
    })
      .then(() => {
        toast.success("Destino adicionado com sucesso!")
        navigate("/destinations")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <Header />
      <PageContainer>
        <ProfileContainer>
          <h1>Novo Destino:</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <span>País:</span>
              <input type="text" value={pais || ''} onChange={(e) => setPais(e.target.value)} />
            </label>

            <label>
              <span>Cidade:</span>
              <input type="text" value={cidade || ''} onChange={(e) => setCidade(e.target.value)} />
            </label>

            <label>
              <span>Data estimada:</span>
              <input type="date" value={data || ''} onChange={(e) => setData(e.target.value)} />
            </label>

            <button>Adicionar</button>
          </form>
        </ProfileContainer>
      </PageContainer>
    </div>
  )
}

export default NewDestination;