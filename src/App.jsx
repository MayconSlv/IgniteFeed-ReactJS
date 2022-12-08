import { Header } from './components/Header.jsx'
import { Aside } from './components/Aside.jsx';
import { Post } from './components/Post.jsx';

import styles from './App.module.css';
import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Aside />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}