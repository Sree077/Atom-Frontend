import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CourseAdd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const onFileSelected = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAddCourse = () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }
    const data = {
      title,
      description,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", selectedFile);
    axios
      .post("http://localhost:5555/course", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        navigate("/admin");
        console.log(response);
      })
      .catch((err) => {
        alert("An error occurred");
        console.log("An error" + err);
      });
  };
  return (
    <div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="disc">Description</label>
        <input
          type="text"
          id="disc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Select Image</label>
        <input type="file" id="image" onChange={onFileSelected} />
      </div>
      <button onClick={handleAddCourse}>Add</button>
    </div>
  );
}

export default CourseAdd;
