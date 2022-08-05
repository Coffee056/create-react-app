import logo from './logo.svg';
import styles from './App.module.scss';
import {useState} from 'react'

function App() {
  const [block, setBlock] = useState([]);
  const addBlock = () => {
    setBlock([...block, block.length])
  }

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        Header
      </header>
      <div className={styles.content}>
      <img src={logo} alt="logo" className={styles.logo}></img>
        新增内容：
        <button onClick={addBlock}>ADD BLOCK</button>
        {block.map((value) => {
          return (
            <div className={styles.newContent} key={value}>
               {value}
           </div> 
          )
        })}
      </div>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default App;
