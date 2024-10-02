import { Link } from "react-router-dom";

function TrackList({ tracks, setSelectedTrack }) {
  return (
    <>
      <button>
        <Link to="/add-track">Add New Track</Link>
      </button>
      <h1>Track List</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track._id}>
            <p>
              {track.title} by {track.artist}
            </p>
            <button onClick={() => setSelectedTrack(track)}>Play</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TrackList;
