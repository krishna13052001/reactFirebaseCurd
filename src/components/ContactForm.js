import React, { useState, useEffect } from "react";

function ContactForm(props) {
    const initialisedValues = {
        fullName: "",
        mobile: "",
        email: "",
        address: "",
    };
    const [values, setValues] = useState(initialisedValues);
    const handleInputChange = (e) => {
        console.log("Entered")
        setValues({
            ...values, 
            [ e.target.name ] : e.target.value
        })
        console.log("exit")
    }

    useEffect(() => {
        if(props.currentid === ""){
            setValues({
                ...initialisedValues,
            })
        } else {
            setValues({
                ...props.contactObjects[props.currentId]
            })
        }

    },[props.currentId, props.contactObjects])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addEdit(values);
        setValues(initialisedValues);
    }
    // this.props.
    return (
        <div>
            Display Form
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                        // onChange={(e) => {setValues(...values, values.fullName = e.target.value)}}
                        // onChange={(e) => {setValues(...values, values.fullName = e.target.value)}}
                    />
                </div>
                <div className="row">
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            placeholder="Phone Number"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Address" name="address"
                        value={values.address}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value={props.currentId===""?"Add":"update"} className="btn btn-primary btn-block"></input>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
