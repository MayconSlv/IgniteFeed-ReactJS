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

    const [newCommentText, setNewCommentText] = useState('');

    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function createNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
          return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne)
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

              <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
              </time>
          </header>

          <div className={style.content}>
              {content.map(line => {
                  if(line.type === 'paragraph') {
                      return <p key={line.content}>{line.content}</p>;
                  } else if (line.type === 'link') {
                      return <p key={line.content}><a href="#">{line.content}</a></p>
                  }
              })}
          </div>

          <form onSubmit={createNewComment} className={style.form}>
              <strong>Deixe o seu feedback</strong>

              <textarea 
                  placeholder="Deixe um comentário"
                  onChange={handleNewCommentChange}
                  value={newCommentText}
              />

              <footer>
                  <button type="submit">Publicar</button>
              </footer>
          </form>

          <div className={style.commentList}>
              {comments.map(comment => {
                  return (
                    <Comments 
                        key={comment} 
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                  )
              })}
          </div>
      </article>
  )
}