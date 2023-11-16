import React,{useEffect} from "react";
import './contact.css';



function Contact( {heading, text}){
    function HandleSubmit(e){
        e.preventDefault()
       let formData = {
            name: document.getElementById('name').value,
            email:document.getElementById('email').value,
            text:document.getElementById('text').value
        }
            fetch('http://localhost:8000/posts/',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({formData}),
            },[])
            console.log(formData)
        return(
            alert('Form Submitted')
        )
    }
    
    return(
        <div className="beast">
            <div className='hero-img-contact'>
            <div className='heading'>
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
            </div>
            <div className='form'>
                <form action="submit">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Email" id="email" />
                    <label htmlFor="Message">Subject</label>
                    <textarea name="subject"  rows="6"placeholder="Write your message here " id="text" />
                    <button onClick={HandleSubmit} className="btn">Submit</button>
                </form>
            </div>

        </div>
     
    )
   
}

export default Contact