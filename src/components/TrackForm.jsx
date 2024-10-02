import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  artist: "",
};

function TrackForm({ handleAddTrack }) {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleAddTrack(formData);

    setFormData(initialState);

    navigate("/");
  }

  return (
    <>
      <h1>Add New Track</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          name="artist"
          id="artist"
          value={formData.artist}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </>
  );
}

export default TrackForm;
