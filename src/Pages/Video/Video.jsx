const Video = ({ isMuck }) => {
  return (
    <>
      <video autoPlay muted={isMuck} loop className="video">
        <source src="videos/main_video.mp4" type="video/mp4"></source>
      </video>
    </>
  );
};

export default Video;
