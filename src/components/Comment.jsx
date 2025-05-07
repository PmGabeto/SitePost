import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./comment.module.css";
import { Boneco } from "./Avatar";

export function Comentarios(props) {
  return (
    <div className={styles.comment}>
      <Boneco hasborder={false} src="https://github.com/PmGabeto.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentAuthorAndTime}>
              <strong> Pedro Miguel </strong>
              <time
                title=" 17 de março as 14:40"
                dateTime="2025-03-17 14:40:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="deletar comentário">
              <Trash size={24}></Trash>
            </button>
          </header>
          <p>{props.content}</p>
        </div>
        <footer>
          <button title="Like">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
