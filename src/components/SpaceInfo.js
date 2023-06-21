import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Navbar from './Navbar';
import { StyledSpaceInfo } from '../styled/SpaceInfo.styled';
import { Link } from 'react-router-dom';
const SpaceInfo = () => {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    const [space,setspace] = useState({});
    useEffect(()=>{
       axios.post('http://localhost:4000/SpaceById',{id}).
       then((space)=>{
        console.log(space);
       setspace(space.data)
       }).catch(err=>{
        console.log(err);
       })
    },[])
  return (
    <>
    <Navbar />
    <StyledSpaceInfo>
      <div >
        <Link className='button' to="/quiz" style={{"text-decoration": "none"}}>Create Quiz</Link>
      </div>
    </StyledSpaceInfo>
    </>
  )
}

export default SpaceInfo
