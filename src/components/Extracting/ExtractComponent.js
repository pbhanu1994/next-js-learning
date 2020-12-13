import React, {useState, useEffect} from 'react';
import { Comment } from './Comment';

const ExtractComponent = () => {
  const [author, setAuthor] = useState({name: "Profile Name", avatarUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"})
  const [text, setText] = useState("Hello Comment");
  const [date, setDate] = useState();

  useEffect(() => {
    setText("Hello Comment 2");
    setDate(setTheDate);
  })

  const setTheDate = new Date().getDate() + " / " + (new Date().getMonth() + 1) + " / " + new Date().getFullYear();

    return (
        <>
            <h1>Extract Component</h1>
            <div className="Comment">
                <Comment user={author} text={text} date={date} />
            </div>
        </>
    );
}

export default ExtractComponent;