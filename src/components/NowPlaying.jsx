function NowPlaying({ selectedTrack }) {
  if (!selectedTrack) return;

  const { title, artist } = selectedTrack;

  return (
    <>
      <h2>Now Playing</h2>
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
    </>
  );
}

export default NowPlaying;
