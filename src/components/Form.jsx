import React, { Component } from 'react'
import './Form.css'

export class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      logo: '',
      background: '',
      logoColor: '',
      URL: '',
      TAG: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = (event) => {
    event.preventDefault()
    const name = this.state.name
    const logo = this.state.logo.toLocaleLowerCase()
    const bg = this.state.background.split('#')[1]
    const logoColor = this.state.logoColor.split('#')[1]
    const URL = `https://img.shields.io/badge/-${name}-${bg}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`
    const TAG = `<img src="${URL}" alt="${name}"/>`
    this.setState({URL, TAG})
  }

  render() {
    const URL = this.state.URL
    const TAG = this.state.TAG
    return (
      <>
        { console.log(URL) }
        <div className="container">
          <div className='box'>
            <img src="https://img.shields.io/badge/-crie seu badge-21262d?style=for-the-badge&logo=crie seu badge&logoColor=yellow" alt="crie seu badge" className='input'/>
            <label htmlFor="name-text" className='labelAlign'>
              <img src="https://img.shields.io/badge/-Nome: -666e78?style=for-the-badge" alt="Nome: " />
              <input
                type="text"
                name="name"
                id="name-text"
                className='input'
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="logo-text" className='labelAlign'>
              <img src="https://img.shields.io/badge/-Logo: -666e78?style=for-the-badge" alt="Nome: " />
              <input
                type="text"
                name="logo"
                id="logo-text"
                className='input'
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="bg-color" className='labelAlign'>
              <img src="https://img.shields.io/badge/-Background: -666e78?style=for-the-badge" alt="Nome: " />
              <input
                type="color"
                name="background"
                id="bg-color"
                className='input'
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="logo-color" className='labelAlign'>
              <img src="https://img.shields.io/badge/-Logo color: -666e78?style=for-the-badge" alt="Nome: " />
              <input
                type="color"
                name="logoColor"
                id="logo-color"
                className='input'
                onChange={this.handleChange}
              />
            </label>
            <button
              className="image-button input"
              onClick={this.handleClick}
            >
              <img src="https://img.shields.io/badge/-Criar-2fc18c?style=for-the-badge" alt="Criar" />
            </button>
            {
              URL.length
              ? (
              <div className='input '>
                <a href={URL} rel='noreferrer' target='_blank'><img src={URL} alt='badge' className='input'/></a><br/>
                <span className='input labelAlign'><img src="https://img.shields.io/badge/-HTML-0d1117?style=for-the-badge&logo=html5&logoColor=ff8800" alt="HTML"/> <strong>{TAG}</strong></span>
              </div>
              )
              : 'Seu badge aparecerá aqui junto com uma tag HTML!'
            }
          </div>
        </div>
      </>
    )
  }
}

export default Form