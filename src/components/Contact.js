import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from '../firebase'
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Contact = () => {

    var [contactObjects, setContactObjects ] = useState({});
    var [currentId, setCurrentId] = useState("")
    useEffect(() =>{
        firebaseDb.child('contacts').on('value', objs => {
            if(objs.val()!== null){
                setContactObjects({
                    ...objs.val()
                })
            }
        })
    })




    const addEdit = (object) => {
        if(currentId===""){
            firebaseDb.child('contacts').push(
                object,
                err => {
                    if(err){
                        console.log(err);
                    } else {
                        setCurrentId("")
                    }
                }    
            )
        } else {
            firebaseDb.child(`contacts/${currentId}`).set(
                object,
                err => {
                    if(err){
                        console.log(err);
                    } else{
                        setCurrentId("")
                    }
                }    
            )
        }
        
    }
    return (
        <div>
            <div className="jumbotron p-4 m-4 bg-light">
                <div className="container ">
                    <h1 className="display-4 text-center">Contact Registration</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    {/* <ContactForm addEdit={addEdit} /> */}
                    <ContactForm {...({addEdit, currentId, contactObjects})} />
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-ligth">
                            <tr>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="border-grey">
                            {
                                Object.keys(contactObjects).map(id=>{
                                    return (
                                        <tr>
                                            <td>{contactObjects[id].fullName}</td>
                                            <td>{contactObjects[id].email}</td>
                                            <td>{contactObjects[id].mobile}</td>
                                            <td>{contactObjects[id].address}</td>
                                            <td  >
                                                <a className="btn text-primary" onClick={()=>{ setCurrentId(id)}}>
                                                    <i className="fas fa-pencil-alt"></i>
                                                </a>
                                                <a className="btn text-danger">
                                                    <i className="fas fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Contact;
