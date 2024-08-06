import axios from "axios";
import React, { useState } from "react";
function FormComponent() {
  const [data, setData] = useState<any>(null);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          let formData = new FormData(e.currentTarget);
          formData.append("profileImage", JSON.stringify(data));
          console.log(formData, data);
          console.log(formData.get("profileImage"));
          axios
            .request({
              method: "POST",
              url: "http://localhost:3000/upload",
              data: formData,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((e) => console.log(Buffer))
            .catch((e) => console.log(e));
        }}
      >
        <input
          type="file"
          name="profileImage"
          id=""
          onChange={(e: any) => setData(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
