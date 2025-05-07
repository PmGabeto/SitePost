import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { parseISO } from "date-fns";

import { Boneco } from "./Avatar";
import { Comentarios } from "./comment";
import styles from "./Post.module.css";
import { useState } from "react";
//alterando a quantidade de comentarios no Post

export function Post(props) {
  const publishedDate = parseISO(props.publishedAt);

  const publishedDateFormat = format(
    publishedDate,
    "dd 'de' LLLL 'as' HH:mm'h'",
    { locale: ptBR }
  );
  const publishedDistance = formatDistanceToNow(publishedDate, {
    locale: ptBR,
    addSuffix: true,
  });

  const [qtdComentarios, setComments] = useState([1, 2]);

  const [newCommentsText, setnewCommentsText] = useState("");

  function handleNewCommnetChange(event) {
    setnewCommentsText(event.target.value);
  }

  //criando uma func para enviar um novo comentario ou formulario
  function handleCreateNewComment(event) {
    event.preventDefault(); // previne o comportamento para do html de redirecionar para uma nova pagina
    console.log("Comentário enviado");
    //adicionando um novo comentario ao array de comentarios

    setComments([...qtdComentarios, newCommentsText]);
    setnewCommentsText("");
  }

  return (
    <div>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Boneco hasBorder={true} src={props.author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{props.author.name}</strong>
              <span>{props.author.role}</span>
            </div>
          </div>
          <time title={publishedDateFormat} dateTime={publishedDate}>
            {publishedDistance}
          </time>
        </header>
        <div className={styles.content}>
          {props.content.map((line) => {
            if (line.type === "paragraph") {
              return <p>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p>
                  <a href={line.content}>{line.content}</a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu Feedback</strong>
          <textarea
            name="comment"
            placeholder="Deixe um comentetário"
            value={newCommentsText}
            onChange={handleNewCommnetChange}
          />
          <footer>
            <button type="submit">Comentar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {qtdComentarios.map((qtdComentarios) => {
            return <Comentarios content={qtdComentarios} />;
          })}
        </div>
      </article>
    </div>
  );
}
