import React, { useState } from "react";
import AnimePost from "./AnimePost";
import { useDrop } from "react-dnd";
import "../App.css";

function DragDrop({posts}) {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = posts.filter((post) => id === post.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {posts.map((post) => {
          return <AnimePost posts={posts} id={post.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((post) => {
          return <AnimePost posts={posts} id={post.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;