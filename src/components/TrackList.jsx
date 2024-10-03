import { Link } from "react-router-dom";

function TrackList({ tracks, setSelectedTrack, handleDeleteTrack }) {
  function onDeleteClick(trackId) {
    handleDeleteTrack(trackId);
  }

  return (
    <>
      <Link to="/add-track">
        <button>Add New Track</button>
      </Link>

      <h1>Track List</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track._id}>
            <p>
              {track.title} by {track.artist}
            </p>
            <button onClick={() => setSelectedTrack(track)}>Play</button>
            <Link to={`/edit-track/${track._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => onDeleteClick(track._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TrackList;
