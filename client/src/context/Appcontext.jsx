import { useState, createContext } from "react";
import { useAuth , useClerk, useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const [image, setImage] = useState(false);

  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const {openSignIn} = useClerk();

  const [resultImage, SetResultImage] = useState(false)


  const loadCreditData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + '/api/user/credits', {
        headers: { token },
      });

      if (data.success) {
        setCredit(data.credits);
        console.log(data.credits);
        
      }
    } catch (error) {
      console.log("Credit loading failed", error);
      toast.error(error.message);
    }
  };


  const removeBg = async (image)=>{
    try {
      if(!isSignedIn){
        return openSignIn()
    }
    setImage(image);
    SetResultImage(false);

    navigate('/result')

    const token = await getToken();

    const formData = new FormData();
    image && formData.append('image', image)
    
    const {data } = await axios.post(backendUrl+'/api/image/remove-bg', formData, {
      headers:{token}
    })

    if(data.success){
      SetResultImage(data.resultImage);
      data.creditBalance && setCredit(data.creditBalance)
    }
    else {
      toast.error(data.message)
      data.creditBalance && setCredit(data.creditBalance)
    }

    if(data.creditBalance == 0){
      navigate('/buy')
    }
      
    console.log(image);


    } catch (error) {
      console.log("Credit loading failed", error);
      toast.error(error.message);
      
    }
  }

  const value = {
    credit,
    setCredit,
    loadCreditData,
    backendUrl,
    image,
    setImage,
    removeBg,
    resultImage,
    SetResultImage
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
