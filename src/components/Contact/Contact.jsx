import React, { useState } from "react";
import './contact.css';

export const Contact = () => {
    const [firstname, setFirstname] = useState("")
    const [email, setEmail] = useState("")
    const [body, setBody] = useState("")
    const remainingCharacters = 200 - body.length;
    
    return (
        <div className=" px-1 py-5 align-middle bg-warning marg">
            <h1 className="text-center text-warning m-5 border border-primary bg-secondary rounded p-3"> Contact Form</h1>
            <form action="https://getform.io/f/4f85f148-ffc9-4d93-8380-c8b799cdddda" method="POST" className="text-center m-5 border rounded p-3 bg-secondary border-primary text-warning">
                <div className="m-3">
                    <label htmlFor="firstName" className="text-center  mx-5 pb-2"><h5>FirstName : </h5></label>
                    {/* <label htmlFor="lastName" className="text-center  mx-5 pb-2"><h5>LastName :</h5> </label><br /> */}
                    <input type="text" name="name" className="text-center p-1 mx-2 bg-warning text-success rounded " id="firstName" value={firstname} placeholder="enter first name" onChange={(e) => setFirstname(e.target.value)} required />
                    {/* <input type="text" id="lastName" name="lastname" value={lastname} placeholder="enter last name" className="text-center rounded p-1 mx-2 bg-warning text-success " onChange={(e) => setLastname(e.target.value)} required /> */}
                </div>
                <div className="m-3">
                    <label htmlFor="email" className="text-center  mx-5 pb-2"><h5>Email Id : </h5></label>
                    <input type="email" id="email" value={email} name="emailsender" placeholder="enter email id" className="text-center rounded p-1 mx-2 bg-warning text-success " onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="m-3">
                    <label htmlFor="Body" className="  mx-5 pb-3 "><h5>Reason : </h5></label>
                    <textarea id="Body" value={body} placeholder="enter reason" name="message" className="text-center align-center rounded p-1 mx-2 bg-warning text-success" max={32} style={{ width: 200, height: 100 }} onChange={(e) => setBody(e.target.value.slice(0, 200))} required />
                    <div className="text-danger">
                        {remainingCharacters <= 10 && (
                            `Warning: ${remainingCharacters} characters remaining`
                        )}
                    </div>
                </div>
                <div className="m-3">
                    <button type="submit" className="rounded text-center px-4 py-2 bg-success text-warning " placeholder="Submit"> <h5>Lets Collobarate</h5> </button>
                </div>
            </form>
        </div>
    )
}