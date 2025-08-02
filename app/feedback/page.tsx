"use client";

import {useState} from "react";
import styles from './feedback.module.css'

export default function FeedBackPage(){
    const [form, setForm] = useState({
        name : "",
        email : "",
        message : ""
    })

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className = {styles.feedback_container}>
            <h1 className = {styles.feedback_title}>Feedback Form</h1>
            {submitted ? (
                <p className = {styles.complition_message}>Thanks for your feedback</p>
            ):(
                <form onSubmit = {handleSubmit} className = {styles.submitForm}>
                    <input 
                        type = "text"
                        name = "name"
                        placeholder = "Your Name"
                        value = {form.name}
                        onChange = {handleChange}
                        required
                        className = {styles.name_input}
                    />

                    <input
                        type = "text"
                        name = "email"
                        placeholder = "Your Email id"
                        value = {form.email}
                        onChange = {handleChange}
                        required
                        className = {styles.email_input}
                    />

                    <textarea 
                        name = {form.message}
                        placeholder = "Your Message"
                        onChange = {handleChange}
                        required
                        className = {styles.message_input}
                    />

                    <button type = "submit" className = {styles.submit_button}>
                        Submit 
                    </button>
                </form>
            )}
        </div>
    );

}