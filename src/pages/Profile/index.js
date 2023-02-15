//React
import { useState, useContext } from 'react';

//Styles 
import { PageContainer } from '../../components/PageContainer';
import { ProfileContainer } from './style';

//Components
import Header from '../../components/Header';

//Context
import { UserContext } from '../../context/UserContext';

//Toastify
import { toast } from 'react-toastify';

const Profile = () => {

  const { user, editProfile } = useContext(UserContext)
  const [ name, setName ] = useState(user.name);
  const [ email ] = useState(user.email);
  const [ goal, setGoal ] = useState(user.goal);

  const handleSubmit = (e) => {
    e.preventDefault()

    if(name !== '' && goal !== ''){
      editProfile(user.uid, name, goal)
    }else{
      toast.error("Nenhum campo pode estar em branco!")
    }

  }

  return (
    <div>
      <Header />
      <PageContainer>
        <ProfileContainer>
          <h1>Meu Perfil:</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={name || ''} onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={goal || ''} onChange={(e) => setGoal(e.target.value)} />
            <input className='input-nao-editavel' type="email" placeholder={email} disabled='disabled'/>
            <button>Salvar</button>
          </form>
        </ProfileContainer>
      </PageContainer>
    </div>
  )
}

export default Profile