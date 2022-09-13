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
    const pictureList = posts.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {posts.map((picture) => {
          return <AnimePost posts={posts} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <AnimePost posts={posts} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;