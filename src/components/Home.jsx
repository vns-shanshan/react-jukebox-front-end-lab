import { useState } from "react";

import TrackList from "./TrackList";
import NowPlaying from "./NowPlaying";

function Home({ tracks }) {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <>
      <TrackList tracks={tracks} setSelectedTrack={setSelectedTrack} />
      <NowPlaying selectedTrack={selectedTrack} />
    </>
  );
}

export default Home;
