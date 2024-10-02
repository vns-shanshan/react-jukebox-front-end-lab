import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import * as trackService from "./services/trackService.js";

import Home from "./components/Home";
import TrackForm from "./components/TrackForm";

const App = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function fetchDefault() {
      const tracks = await trackService.index();
      console.log(tracks.length);

      setTracks(tracks);
    }

    fetchDefault();
  }, []);

  async function handleAddTrack(formData) {
    try {
      const newTrack = await trackService.create(formData);
      console.log(newTrack);

      setTracks([...tracks, newTrack]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home tracks={tracks} />} />
      <Route
        path="/add-track"
        element={<TrackForm handleAddTrack={handleAddTrack} />}
      />
    </Routes>
  );
};

export default App;
