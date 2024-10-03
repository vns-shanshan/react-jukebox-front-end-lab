import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as trackService from "../services/trackService.js";

const initialState = {
  title: "",
  artist: "",
};

function TrackForm({ handleAddTrack, handleUpdateTrack }) {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  let { trackId } = useParams();
  const isAdding = !trackId;

  useEffect(() => {
    async function fetchData(trackId) {
      const data = await trackService.show(trackId);
      //   console.log(data);
      setFormData(data);
    }

    if (!isAdding) fetchData(trackId);
  }, [trackId, isAdding]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isAdding) {
      handleAddTrack(formData);
      setFormData(initialState);
    } else {
      handleUpdateTrack(formData, trackId);
    }

    navigate("/");
  }

  const formTitle = isAdding ? "Add New Track" : "Update Track";

  return (
    <>
      <h1>{formTitle}</h1>

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
