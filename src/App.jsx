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
      // console.log(tracks.length);

      setTracks(tracks);
    }

    fetchDefault();
  }, []);

  async function handleAddTrack(formData) {
    try {
      const newTrack = await trackService.create(formData);
      // console.log(newTrack);

      setTracks([...tracks, newTrack]);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdateTrack(formData, trackId) {
    try {
      const updatedTrack = await trackService.update(formData, trackId);
      // console.log(tracks, updatedTrack);

      const copiedTracks = [...tracks];

      const foundTrack = copiedTracks.find(
        (track) => track._id === updatedTrack._id
      );
      // console.log(foundTrack);

      foundTrack.title = updatedTrack.title;
      foundTrack.artist = updatedTrack.artist;

      setTracks(copiedTracks);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteTrack(trackId) {
    try {
      await trackService.remove(trackId);
    } catch (error) {
      console.log(error);
    }
    const updatedTracks = tracks.filter((track) => track._id !== trackId);

    setTracks(updatedTracks);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Home tracks={tracks} handleDeleteTrack={handleDeleteTrack} />}
      />
      <Route
        path="/add-track"
        element={<TrackForm handleAddTrack={handleAddTrack} />}
      />
      <Route
        path="/edit-track/:trackId"
        element={<TrackForm handleUpdateTrack={handleUpdateTrack} />}
      />
    </Routes>
  );
};

export default App;
