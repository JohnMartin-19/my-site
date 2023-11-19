import  {FaMailBulk, FaPhone} from 'react-icons/fa';
import './contact.css';



function Contact( {heading, text}){
    function HandleSubmit(e){
        e.preventDefault()
       let formData = {
            name: document.getElementById('name').value,
            email:document.getElementById('email').value,
            text:document.getElementById('text').value
        }
            fetch('http://localhost:8000/api/users/',{
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
                <br />
                <br />
                <h4><FaPhone size={20} style={{ color:"#fff", marginRight:"2rem" }} />+254768171426</h4>
                <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem" }} />johnnkonge2020@gmail.com</h4>

            </div>
            </div>
            <div className='form'>
                <form action="submit">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" id="name" required />
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Email" id="email" required />
                    <label htmlFor="Message">Subject</label>
                    <textarea name="subject"  rows="6"placeholder="Write your message here " id="text" />
                    <button onClick={HandleSubmit} className="btn">Submit</button>
                </form>
            </div>

        </div>
     
    )
   
}

export default Contact