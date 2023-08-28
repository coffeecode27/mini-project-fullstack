import {Nav} from "./navbar"
import { CardProfile } from "./cardProfile"
import CardSkill from "./cardSkill"
import {FooterComponent} from './footer'
import { CardProfileRightSide } from "./cardProfileRightSide"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';
import { getCookie } from 'cookies-next';
import { useSelector } from "react-redux"

const ProfilePage = () => {
const [dataProfile, setDataProfile] = useState({})

  const router = useRouter(); 
// useEffect(()=>{
//   const userToken = getCookie('access_token');
//   if (typeof userToken === 'string') {
//     const fetchData = async () => {
//       const decodedData: any = jwt_decode(userToken);
//       setDataProfile(decodedData);
//     };
//    console.log(fetchData());
//   } else {
//     router.push('/signin');
//   }
// },[router])

useEffect(() => {
  const userToken = getCookie('access_token');
  if (typeof userToken === 'string') {
    const fetchData = async () => {
      try {
        const decodedData: any = jwt_decode(userToken);
        setDataProfile(decodedData);
      } catch (error:any) {
        console.error("Error decoding token:", error.message);
        console.log("Error decoding token:", error.message);
        router.push('/signin');
      }
    };
    fetchData();
  } else {
    router.push('/signin');
  }
}, [router]);

  return (
    <>
        <Nav dataProfile={dataProfile}/>
        <div className="flex mt-4">
        <CardProfile dataProfile={dataProfile}/>
        <CardProfileRightSide/>
        </div>
        <FooterComponent/>
    </>
  )
}

export default ProfilePage