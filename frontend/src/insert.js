import React, { useState } from 'react';
import axios from 'axios';
export const Insert=()=>
{
    const [name,sname]=useState([]);
    const [email,semail]=useState([]);
    const Submit=async()=>
    {
        try
        {
            const response = await axios.post('/insert',{name,email});
        if(response.data)
        {
            console.log(response.data)
        }
        }
        catch(e)
        {
            console.log(e);
        }
    }
    return(
        <>
        Name::<input type='text' placeholder='Enter name' onChange={(e)=>sname(e.target.value)}></input>
        Gmail::<input type='gmail' placeholder='Enter mail' onChange={(e)=>semail(e.target.value)}></input>
        <button onClick={Submit}>insert</button>
        </>
    )
}