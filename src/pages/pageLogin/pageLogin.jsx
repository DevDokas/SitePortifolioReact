//React & Etc
import React from "react";
// eslint-disable-next-line no-unused-vars
import {useState} from "react";
import * as yup from 'yup';
import { ErrorMessage, Formik, Form, Field } from "formik";

//Componentes
import Nav from "../components/Nav/Nav.jsx"

//Estilização
import Coding from '../../assets/pcside.png'
import './styles/styleLogin.css'

export default function Login() {

    const handleClickLogin = (values) => console.log(values)

    const validationLogin = yup.object().shape({
        email:yup.string().email("Digite seu email corretamente.").required("Digite seu email para realizar o acesso."),
        password: yup.string().required("Digite sua senha")
    });


    return (
        <>
        <Nav />
        <div className="container">
        <div className="imgDiv">
            <img className="imgLogin" src={Coding} alt="" />
        </div>
        <Formik
            initialValues={{}}
            onSubmit={handleClickLogin}
            validationSchema={validationLogin}>
            <Form className="login-form">
                <div className="login-form-group form-email">
                    <Field name="email" placeHolder="Email" className="form-field"/>
                    <ErrorMessage
                    component="span"
                    name="email"
                    className="form-error"
                    />
                </div>
                <div className="login-form-group">
                    <Field name="password" placeHolder="Senha" className="form-field"/>
                    <ErrorMessage
                    component="span"
                    name="password"
                    className="form-error"
                    />
                </div>
                <div className="DivButton">
                    <button className="Button LoginButton" type="submit">Login</button>
                    <div className="DivText">
                        <p>Ainda não se registrou? </p>
                        <a href="/register" className="RegisterButton"> Registrar agora!</a>
                    </div>
                </div>
            </Form>
        </Formik>
        </div>
        </>
    )
}