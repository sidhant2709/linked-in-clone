import React, { useState, useEffect } from "react";
import "./styles/Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";

import { db } from "../firebase";
import firebase from "firebase";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Sidhant Kumar Sahoo",
      description: "Testing",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#7FC15E"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#E7A33E" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#FC9295"
          />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })}
    </div>
  );
}

export default Feed;
