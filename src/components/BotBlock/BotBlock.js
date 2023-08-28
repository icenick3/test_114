import React, {useState} from 'react';
import './BotBlock.css'

const BotBlock = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

    }

    console.log(`name: ${name}`)
    console.log(`email: ${email}`)
    console.log(`message: ${message}`)
    return (
        <div className="botBlock">
            <div className="form">
                <h4>Text review</h4>
                <div className="buss-mobile">
                    <h5>Looking for an excellent business idea?</h5>
                    <p>Give us a call or email anytime, we strive to answer all inquiries within 24 hours on business days.</p>
                </div>
                <form onSubmit={onSubmit}>
                    <p>Name</p>
                    <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                    <p>Email</p>
                    <input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                   <p>Message</p>
                    <textarea className="Message" type="text" placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)}/>
                    <button>Send</button>
                </form>
            </div>
            <div className="buss">
                <h5>Looking for an excellent business idea?</h5>
                <p className="pcHidden">Give us a call or email anytime, we strive to answer all <br/> inquiries within 24 hours on business days.</p>
                <p className="botIpad">Give us a call or email anytime, we strive to answer all inquiries within 24 hours on business days.</p>
                <img className="bot-back" src="https://i.pinimg.com/originals/d1/3c/13/d13c1394eacdbd6b84e34b0d12c9e216.png" alt=""/>
            </div>
        </div>
    );
};

export default BotBlock;