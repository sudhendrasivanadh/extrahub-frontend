import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h2>404 – Not Found</h2>
      <p>That page doesn’t exist. Head back <Link to="/">home</Link>.</p>
    </section>
  )
}
