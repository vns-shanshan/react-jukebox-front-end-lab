import { useState } from "react";

import TrackList from "./TrackList";
import NowPlaying from "./NowPlaying";

function Home({ tracks, handleDeleteTrack }) {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <>
      <TrackList
        tracks={tracks}
        setSelectedTrack={setSelectedTrack}
        handleDeleteTrack={handleDeleteTrack}
      />
      <NowPlaying selectedTrack={selectedTrack} />
    </>
  );
}

export default Home;
