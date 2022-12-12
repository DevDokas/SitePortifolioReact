//React & Etc
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup"

//Componentes
import Nav from "../components/Nav/Nav";

//Estilização
import './styles/styleRegister.css'
import CodingImage from '../../assets/pcside.png'


export default function Register(){
    
    const handleClickRegister = (values) => console.log(values)
    
    const validationRegister = yup.object().shape({
        nome: yup.string().required("Preencha seu nome"),
        sobrenome: yup.string().required("Preencha seu sobrenome"),
        email:yup.string().email("Digite um email valido.").required("email requerido para realizar o cadastro."),
        password: yup.string().min(8, "Mínimo de 8 dígitos").max(50, "Máximo de 50 dígitos").required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas precisam ser iguais").required()
        
    })

    return(
        <>
        <Nav />
        <div className="container">
        <div className="imgDivReg">
            <img className="imgReg" src={CodingImage} alt="" />
        </div>
        <Formik
            initialValues={{}}
            onSubmit={handleClickRegister}
            validationSchema={validationRegister}>
            <div>
            <Form className="register-form">
                <div className="register-form-group">
                    <label htmlFor="name">Nome: </label> <br/>
                    <Field name="name" id="name" className="form-field"/>
                    <br />
                    <ErrorMessage
                        component="span"
                        name="name"
                        className="form-error"
                    />
                </div>
                <div className="register-form-group">
                    <label htmlFor="lastname">Sobrenome: </label> <br />
                    <Field name="lastname" id="lastname" className="form-field"/>

                    <ErrorMessage
                        component="span"
                        name="lastname"
                        className="form-error"
                    />
                </div>
                <div className="register-form-group">
                    <label htmlFor="email">Email: </label> <br />
                    <Field type="email" name="email" id="email" className="form-field"/>
                    <br />
                    <ErrorMessage
                        component="span"
                        name="email"
                        className="form-error"
                    />
                </div>
                <div className="register-form-group">
                    <label htmlFor="password">Senha: </label> <br />
                    <Field name="password" id="password" className="form-field"/>
                    <br />
                    <ErrorMessage
                        component="span"
                        name="password"
                        className="form-error"
                    />
                </div>
                <div className="register-form-group">
                    <label htmlFor="conf-password">Confirmar senha: </label> <br />
                    <Field name="conf-password" id="conf-password" className="form-field"/>
                    <br />
                    <ErrorMessage
                        component="span"
                        name="conf-password"
                        className="form-error"
                    />
                </div>
                <div className="DivButton">
                    <button className="button Button" type="submit">Registrar</button>
                </div>
            </Form>
            </div>
        </Formik>
        </div>
        </>
    )
}