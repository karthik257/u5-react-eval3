import React, { useEffect, useState } from "react";

export const Post = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/posts`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        setValue(json);
      })
      .catch((err) => {
        setValue("err", err);
      });
  }, []);

  return (
    <div>
      <h1>post</h1>

      {value.map((elem) => {
        return (
          <div>
            <div>{elem.post_title}</div>
            <div>{elem.post_body}</div>
          </div>
        );
      })}
    </div>
  );
};
