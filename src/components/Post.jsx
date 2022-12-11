import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comments } from './Comments';
import style from './Post.module.css';


export function Post( {author, publishedAt, content } ) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' hh:mm'h'", {
        locale: ptBr,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    const [comments, setComments] = useState([])

    function createNewComment() {
        event.preventDefault()

        setComments([...comments, comments.length++])
    }

    return (
        <article className={style.post}>
            <header className={style.profileHeader}>
                <div className={style.profile}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={style.profileInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={style.content}>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={createNewComment} className={style.form}>
                <strong>Deixe o seu feedback</strong>

                <textarea placeholder="Deixe um comentário"/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                {comments.map(comment => {
                    return <Comments />
                })}
            </div>
        </article>
    )
}