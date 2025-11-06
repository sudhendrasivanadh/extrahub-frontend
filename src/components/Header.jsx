import React from 'react'
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} width="48" height="48" alt="ExtraHub logo" />
      <h1>ExtraHub Starter</h1>
    </header>
  )
}
