import { useState, useEffect } from 'react'
import './App.css'

function App() {

const [posts, setPosts] = useState({ hits: [] });
const fetchData = async () => {
  try {
    const res = await fetch("https://hn.algolia.com/api/v1/search");
    const data = await res.json();
    setPosts(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  fetchData();
  console.log(posts);
}, []);

  return (
    <>
    <div className="container">
      <header>
        <div className="header-left">
          <h2 className="logo">Y</h2>
          <h1 className="hacker-news">Hacker News</h1>
          <ul>
          <a href=""><li>new |</li></a>
          <a href=""><li>past |</li></a>
          <a href=""><li>comments |</li></a>
          <a href=""><li>ask |</li></a>
          <a href=""><li>show |</li></a>
          <a href=""><li>jobs |</li></a>
          <a href=""><li>submit</li></a>
          </ul>
        </div>
        <div className="header-right">
          <a href=""><li>login</li></a>
        </div>
      </header>
      <main>
      {posts.hits.map((post) => (
            <div key={post.id}>
              <ol>
                <li value={posts.hits.indexOf(post) + 1}>
                <a href={post.url} target="_blank" rel="noreferrer" className="upperPara">
                  <span>
                    {post.story_text ? post.story_text : post.title} </span></a> <a href={post.url} target="_blank" rel="noreferrer" className="urlBrackets"> <span> {post.url ? `(${post.url})` : null}
                  </span>
                </a>
                <br />
                <span className="lowerPara">
                  {post.points} points by {post.author} | created on: {post.created_at.split("T")[0]} | hide | {post.num_comments} comments
                </span>
                </li>
              </ol>
            </div>
          ))}
      </main>
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
      </footer>
      </div>
    </>
  )
}

export default App
