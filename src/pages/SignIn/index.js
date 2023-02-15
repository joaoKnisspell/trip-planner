//React
import { useState, useContext, useEffect } from "react";

//Context
import { UserContext } from "../../context/UserContext";

//Router
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Components
import { LoginContainer } from "../../components/LoginContainer";
import Footer from "../../components/Footer";

//Assets
import logo from "./logo5.png";

const SignIn = () => {

  const { user, signInUser } = useContext(UserContext);
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();

    signInUser(email, password)
  }

  return (
    <LoginContainer>
      <main>
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email || ''} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={password || ''} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit"><span>Entrar</span></button>

        </form>
        <p>Ainda não possui conta? <Link to="/register">Crie agora mesmo!</Link></p>
      </main>
      <Footer/>
    </LoginContainer>
  )
}

export default SignIn;


