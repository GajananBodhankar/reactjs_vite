import axios from "axios";
import React, { useState } from "react";

function Image() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="file"
        name=""
        id=""
        onChange={(e) => setImage(e.target.files[0])}
      />
      <input
        type="submit"
        value="Submit"
        onClick={async () => {
          try {
            let formData = new FormData();
            formData.append("name", name);
            formData.append("image", image);
            let response = await axios.post("http://localhost:3000/", formData);
            console.log(response);
          } catch (error) {}
        }}
      />
    </div>
  );
}

export default Image;
