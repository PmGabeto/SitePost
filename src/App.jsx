import { useState } from "react"; //! importando o useState do react.
import "./global.css";
import Styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/BarraLateral";
import { Post } from "./components/Post";
//simulando um backend para o Post
const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Pmgabeto.png",
      name: "Pedro Gabeto",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: "2025-03-17T14:40:00",
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "mayk brito",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: "2025-03-17T13:40:00",
  },
];

function App() {
  return (
    <div>
      <Header /> {/* chamando o componente Header. */}
      <div className={Styles.wraper}>
        <Sidebar /> {/* chamando o componente Sidebar. */}
        <main>
          {post.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
