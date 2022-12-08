import { Avatar } from './Avatar';
import { Comments } from './Comments';
import style from './Post.module.css';

export function Post() {
    return (
        <article className={style.post}>
            <header className={style.profileHeader}>
                <div className={style.profile}>
                    <Avatar src="https://github.com/maykbrito.png"/>
                    <div className={style.profileInfo}>
                        <strong>Maycon Silva</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time tittle="07 de Dezembro às 7:33" dateTime="2022-12-07  07:33:38">Publicado 1h atrás</time>
            </header>

            <div className={style.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a> {' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={style.form}>
                <strong>Deixe o seu feedback</strong>

                <textarea placeholder="Deixe um comentário"/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                <Comments />
                <Comments />
            </div>
        </article>
    )
}