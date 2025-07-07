import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { createContext,useState } from "react";
import axios from 'axios'
import {toast} from "react-hot-toast";
import {useNavigate} from 'react-router-dom'
export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const navigate = useNavigate()
    const [credit, setCredit] = useState()
    const [image, setImage] = useState(false)
    const [resultImage, setResultImage] = useState(false)
    const backendUrl = import.meta.env.VITE_BACKEND

    const {getToken} = useAuth()
    const {isSignedIn} = useUser()
    const {openSignIn} = useClerk()
    const loadCreditsData= async ()=>{
        try {
            const token = await getToken()
            const {data} = await axios.get(backendUrl + '/api/user/credits',{headers:{token}})

            if(data.success)
            {
                setCredit(data.credits)
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    }


    const removebg = async (image)=>{
        try {
            if(!isSignedIn){
                return openSignIn()
            }
            setImage(image)
            console.log(image)
            setResultImage(false)
            navigate('/result')
            const token = await getToken()
            const formData = new FormData()
            image && formData.append('image',image)
            const {data} = await axios.post(backendUrl + '/api/image/removeBg',formData,{
                headers:{ token}}
            )
            if(data.success)
            {
                setResultImage(data.resultImage)
                data.creditBalance && setCredit(data.creditBalance)
            }else{
                toast.error(data.message)
                data.creditBalance && setCredit(data.creditBalance)
                if(data.creditBalance===0)
                {
                    navigate('/buy')
                }

            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const value={
        credit, setCredit , loadCreditsData , backendUrl, removebg, resultImage,setResultImage,image
    }
    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider