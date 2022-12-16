import styles from './Comments.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comments ({ content, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeCount() {
      //sempre que for atualizar uma informação e essa informação depende do valor que ela tinha anteriormente(ou seja, dela mesma), sempre bom usar esse tipo de atualização
      setLikeCount((state) => {
        return state + 1
      })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasborder={false} src="https://github.com/Diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Maycon Silva</strong>
                            <time tittle="07 de Dezembro às 7:33" dateTime="2022-12-07 07:33:38">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} tittle="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}