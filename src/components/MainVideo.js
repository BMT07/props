function MainVideo({mainVideo}) {
    return (
      <div>
       
        <iframe width="974" height="323" src={mainVideo.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {mainVideo.title}
      </div>
    );
  }
  
  export default MainVideo;