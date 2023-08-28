import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className="container">
      <header>
        <div className="header-left">
          <h2 className="logo">Y</h2>
          <h1 className="hacker-news">Hacker News</h1>
          <ul>
          <a href=""><li>new</li></a>
          <a href=""><li>past</li></a>
          <a href=""><li>comments</li></a>
          <a href=""><li>ask</li></a>
          <a href=""><li>show</li></a>
          <a href=""><li>jobs</li></a>
          <a href=""><li>submit</li></a>
          </ul>
        </div>
        <div className="header-right">
          <a href=""><li>login</li></a>
        </div>
      </header>
      <main></main>
      <footer>
        <div className="footer-links">
        <ul>
          <a href=""><li>Guidelines</li></a>
          <a href=""><li>Faq</li></a>
          <a href=""><li>Lists</li></a>
          <a href=""><li>API</li></a>
          <a href=""><li>Security</li></a>
          <a href=""><li>Legal</li></a>
          <a href=""><li>Apply to YC</li></a>
          <a href=""><li>Contact</li></a>
          </ul>
        </div>
        <div className="search-bar">
          <label>Search:</label>
          <input type="text" />
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
