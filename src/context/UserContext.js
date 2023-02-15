//React
import { createContext, useEffect, useState } from 'react';

//Firebase
import { db, auth } from '../services/FirebaseConnection';

//Auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

//Firestore
import { doc, setDoc, collection, getDoc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';

//Router
import { useNavigate } from 'react-router-dom';

//Toastify
import { toast } from 'react-toastify';

export const UserContext = createContext({});

function UserContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    //Persistindo login do user:
    useEffect(() => {
        async function checkLogin() {
            const storageData = localStorage.getItem("@userData");
            if (storageData) {
                setUser(JSON.parse(storageData))
                setLoading(false)
            }

            setLoading(false)
        }
        checkLogin()
    }, [])

    //Registrando User:
    async function signUpUser(name, email, password) {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                const docRef = doc(db, "users", uid)
                await setDoc(docRef, {
                    name: name,
                    email: email,
                    goal: null,
                    created: new Date(),
                    uid: uid
                })
                    .then(() => {
                        let userData = {
                            name: name,
                            email: value.user.email,
                            goal: null,
                            uid: uid
                        };

                        setUser(userData)
                        saveUserDataOnLs(userData)
                        toast.success("Cadastro realizado com sucesso!")
                        navigate("/dashboard")
                    })
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                   toast.warn("Email já cadastrado!")
                } else if (error.code === 'auth/weak-password') {
                    toast.warn("Senha muito fraca!")
                }
            })
    }

    //Logando User
    async function signInUser(email, password) {
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                const docRef = doc(db, "users", uid)
                const docData = await getDoc(docRef)

                let userData = {
                    name: docData.data().name,
                    email: value.user.email,
                    goal: docData.data().goal,
                    uid: uid
                }

                setUser(userData)
                saveUserDataOnLs(userData)
                navigate("/dashboard")
            })
            .catch((error) => {
                if(error.code === "auth/wrong-password"){
                    toast.error("Senha incorreta!")
                    
                }else if(error.code === "auth/user-not-found"){
                    toast.warn("Email não cadastrado!")
                }
            })
    }

    //Deslogando User:
    async function signOutUser() {
        await signOut(auth)
        localStorage.removeItem("@userData");
        setUser(null)
        toast.success("Até Breve!");
        navigate("/")
    }

    //Salvando userData no Local Storage:
    function saveUserDataOnLs(data) {
        localStorage.setItem("@userData", JSON.stringify(data))
    }

    //Atualizando Objetivo de User:
    async function UpdtateUserGoal(uid, goal) {
        const docRef = doc(db, "users", uid);
        await updateDoc(docRef, {
            goal: goal
        })
            .then(() => {
                toast.sucess('Objetivo atualizado com sucesso!')
            })
            .catch((error) => console.log(error))
        setUser({
            ...user,
            goal: goal
        })
        saveUserDataOnLs({
            ...user,
            goal: goal
        })
    }

    //Alterando Informações Profile:
    async function editProfile(uid, name, goal) {
        const docRef = doc(db, "users", uid)
        await updateDoc(docRef, {
            name: name,
            goal: goal
        })
            .then(() => {
                setUser({
                    ...user,
                    name: name,
                    goal: goal
                })
                saveUserDataOnLs({
                    ...user,
                    name: name,
                    goal: goal
                })
                toast.success("Informações editadas com sucesso!")
            })
            .catch((error) => console.log(error))
    }

    //Função toggleMeta:
    async function toggleMeta(id, isDone) {
        const docRef = doc(db, "metas", id)
        await updateDoc(docRef, {
            isDone: !isDone
        })
            .catch(error => console.log(error))
    }

    return (
        <UserContext.Provider value={{ signed: !!user, user, loading, signUpUser, signInUser, signOutUser, UpdtateUserGoal, toggleMeta, editProfile }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;