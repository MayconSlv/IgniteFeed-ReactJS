import styles from './Comments.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comments () {
    return (
        <div className={styles.comment}>
            <Avatar hasborder={false} src="https://github.com/Diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Maycon Silva</strong>
                            <time tittle="07 de Dezembro às 7:33" dateTime="2022-12-07  07:33:38">Cerca de 1h atrás</time>
                        </div>

                        <button tittle="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Maycon, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}