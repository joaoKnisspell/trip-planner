//Style
import styled from "styled-components";

//Icon
import { RiCloseCircleFill } from 'react-icons/ri';

const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100000;
    .modal{
        width: 400px;
        height: 200px;
        background-color: var(--branco);
        padding: 1em;
        position: relative;
        form{
            display: flex;
            flex-direction: column;
        }
        .modal-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        textarea{
            margin:1em 0;
            height: 70px;
            width: 100%;
            outline: none;
            border: gray 1px solid;
            resize: none;
            padding: 1em 1em;
            font-family: sans-serif;
        }
        .add-btn{
            width: 100%;
            background-color: var(--azul);
            padding: 10px;
            color: var(--branco);
        }
        .return-btn{
            padding: 5px;
            background-color: var(--laranja);
            color: var(--branco);
            opacity: 0.9;
            transition: 0.3s;
            border: 1;
            :hover{
                opacity: 1;
            }
        }
    }
    
    @media screen and (max-width: 500px){
        .modal{
            width:300px;
        }
    }
`

const ModalMeta = ( { handleOnSubmitMeta, meta, setMeta, setModal } ) => {
  return (
    <ModalContainer>
    <div className="modal">
        <div className="modal-header">
        <h3>Nova meta:</h3>
        <button onClick={() => setModal(false)} className="return-btn">Fechar</button>
        </div>
        <form onSubmit={handleOnSubmitMeta}>
        <textarea type="text" placeholder="Digite aqui a sua meta..." value={meta || ''} onChange={(e) => setMeta(e.target.value)} />
        <button className="add-btn" type="submit">Adicionar</button>
        </form>
    </div>
  </ModalContainer>
  )
}

export default ModalMeta