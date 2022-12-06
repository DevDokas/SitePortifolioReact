import React from "react";

import Nav from "../components/Nav/Nav";

import './styles/styleRegister.css'
import CodingImage from '../../assets/pcside.png'

export default function Register(){
    return(
        <>
        <Nav />
        <div className="container">
        <div className="imgDivReg">
            <img className="imgReg" src={CodingImage} alt="" />
        </div>
        <div>
            <form className="FormRegister" action="#">
                <div className="DivNome">
                    <label  htmlFor="nome">Nome:</label> <br/>
                    <input  name="nome" id="nome" type="text"/>
                </div>
                <div>
                    <label htmlFor="">Sobrenome: </label> <br />
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="sexo">Sexo: </label> <br />
                    <select name="sexo" id="sexo">
                        <option value={true} data-default="" disabled={true} selected={true} />
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Data de Nascimento: </label> <br />
                    <input type="date" name="nascdata" id="nascdata" />
                </div>
                <div>
                    <label htmlFor="">Email: </label> <br />
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="cep">CEP: </label> <br />
                    <input type="number" name="cep" id="cep" maxLength={8}/>
                </div>
                <div>
                    <label htmlFor="">Estado: </label> <br />
                    <select id="estado" name="estado">
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        <option value="EX">Estrangeiro</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Cidade: </label> <br />
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="endereço">Endereço: </label> <br />
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="complemento">Complemento: </label> <br />
                    <input type="text" />
                </div>
                <button className="Button ButtonReg">Enviar</button>
            </form>
        </div>
        </div>
        </>
    )
}