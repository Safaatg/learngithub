import React, { useState } from "react";
import "../Form/Form.css";
import * as Yup from 'yup';
import SuccessMessage from "../SuccessMessage/SuccessMessage";

const userSchema = Yup.object().shape({
    firstname: Yup.string().required('This field is required'),
    lastname: Yup.string().required('This field is required'),
    email: Yup.string().email('Invalid email').required('Please enter a valid email address'),
    querytype: Yup.string().required('Please select a query type'),
    message: Yup.string().required('This field is required'),
});

function Form() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        querytype: "",
        message: "",
        ruleAccepted: false,
    });
    const [errorObject, setErrorObject] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    async function testValidation() {
        try {
            await userSchema.validate(formData, {
                abortEarly: false,
            });
            setIsSubmitted(true); // تعيين حالة الإرسال إلى صحيحة بمجرد التحقق من البيانات بشكل صحيح
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                querytype: "",
                message: "",
                ruleAccepted: false,
            });
        } catch (err) {
            var errors = {};
            err.inner.forEach((error) => {
                errors[error.path] = error.message;
            });
            setErrorObject(errors);
        }
    }

    function handleOnChange(event) {
        const KeyName = event.target.name;
        let KeyValue = event.target.value;
        const type = event.target.type;
        if (type === 'checkbox') {
            KeyValue = event.target.checked;
        }
        setFormData({
            ...formData,
            [KeyName]: KeyValue,
        });
    }

    function handleOnFormSubmit(event) {
        event.preventDefault();
        testValidation();
        console.log(formData);
    }

    return (
        <div className="contact-form">
            <h1>Contact Us</h1>
            
            <form id="contact-form" onSubmit={handleOnFormSubmit}>
                <div className="first-last">
                    <div className="form-item">
                        <div className="first-name">
                            <label htmlFor="first-name">First Name <span className="required-input">*</span></label>
                            <input type="text" name="firstname" id="first-name" value={formData.firstname} onChange={handleOnChange} />
                            {errorObject.firstname ? <p className="form-alert">{errorObject.firstname}</p> : null}
                        </div>
                    </div>

                    <div className="form-item">
                        <div className="last-name">
                            <label htmlFor="last-name">Last Name <span className="required-input">*</span></label>
                            <input type="text" name="lastname" id="last-name" value={formData.lastname} onChange={handleOnChange} />
                            {errorObject.lastname ? <p className="form-alert">{errorObject.lastname}</p> : null}
                        </div>
                    </div>
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email Address<span className="required-input">*</span></label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleOnChange} />
                    {errorObject.email ? <p className="form-alert">{errorObject.email}</p> : null}
                </div>

                <div className="form-item">
                    <label htmlFor="query-type">Query Type<span className="required-input">*</span></label>
                    <div className="radio-inputs">
                        <div className="radio-option squre">
                            <input type="radio" id="general-enquiry" name="querytype" value="General Enquiry" onChange={handleOnChange} />
                            <label htmlFor="general-enquiry">General Enquiry</label>
                        </div>
                        <div className="radio-option squre">
                            <input type="radio" id="support-request" name="querytype" value="Support Request" onChange={handleOnChange} />
                            <label htmlFor="support-request">Support Request</label>
                        </div>
                    </div>
                    {errorObject.querytype ? <p className="form-alert">{errorObject.querytype}</p> : null}
                </div>

                <div className="form-item">
                    <label htmlFor="message">Message<span className="required-input">*</span></label>
                    <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleOnChange}></textarea>
                    {errorObject.message ? <p className="form-alert">{errorObject.message}</p> : null}
                </div>

                <div className="form-item checkbox">
                    <input type="checkbox" name='ruleAccepted' id='ruleAccepted' onChange={handleOnChange} checked={formData.ruleAccepted} />
                    <label htmlFor="consent">I consent to being contacted by the team<span className="required-input">*</span></label>
                    {errorObject.ruleAccepted ? <p className="form-alert">{errorObject.ruleAccepted}</p> : null}
                </div>
                
                <button type="submit" disabled={!formData.ruleAccepted}>Submit</button>
            </form>
            {isSubmitted && <SuccessMessage />} {/* عرض رسالة النجاح عند تعيين حالة الإرسال إلى صحيحة */}
        </div>
    );
}

export default Form;