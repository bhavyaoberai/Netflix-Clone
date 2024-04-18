import React,{useState, useEffect} from 'react'

export const VideoPlay = (props) => {
    const {name} = props

    const API = "AIzaSyBr2CR3rcNLf8LI7ugNqbjyZjDlfS0jWcI";
    // fetch youtube video from name
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${name}&key=${API}`;

    const [video, setVideo] = useState([]);

    useEffect(() => {
        getVideo();
    }
    , []);

    const getVideo = async () => {
      try{
        const response = await fetch(url);
        const data = await response.json();
        setVideo(data.items);
      }catch(error)
      {
        console.log('Error fetching video:',error);
      }
    }

  return (
    <div>
        {
            video.map((item) => (
                <iframe
                key={item.id.videoId}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>
            ))
        }
        
    </div>
  );
}
