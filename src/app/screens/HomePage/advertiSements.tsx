export function Advertisements() {
    return (
      <div className="ads_interior_frame">
        <video
          className={"ads_video"}
          autoPlay={true}
          loop
          muted
          playsInline
          data-video-media=""
        >
          <source
            data-src="https://pixabay.com/videos/skincare-products-glow-210846/
  "
            type="video/mp4"
            src="https://www.pexels.com/download/video/8447344/"
          />
        </video>
      </div>
    );
  }
