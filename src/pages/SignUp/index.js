//React
import { useState, useContext, useEffect } from "react";

//Context
import { UserContext } from "../../context/UserContext";

//Router
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Style
import { LoginContainer } from "../../components/LoginContainer";

//Assets
import logo from "../SignIn/logo5.png";

//Components
import Footer from "../../components/Footer";
import { toast } from "react-toastify";

const SignUp = () => {

  const { user, signUpUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name !== '' && email !== '' && password !== ''){
      signUpUser(name, email, password)
    }else{
      toast.warn("Preencha todos os campos!")
    }
    

  }

  return (
    <LoginContainer>
      <main>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome" value={name || ''} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email || ''} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={password || ''} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit"><span>Cadastrar</span></button>
        </form>
        <p>Já possui conta? <Link to="/">Entre agora!</Link></p>
      </main>
      <Footer />
    </LoginContainer>
  )
}

export default SignUp