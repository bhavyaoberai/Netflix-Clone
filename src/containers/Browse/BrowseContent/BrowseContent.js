// //Working 
// import React, { useState } from 'react'
// import './BrowseContent.css'

// import TopTrailerComponent from 'components/Video/TopTrailerComponent/TopTrailerComponent'
// import Button from 'components/UI/Button/Button'
// import VideoCarousel from 'components/Video/VideoCarousel/VideoCarousel'
// import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
// import { buildVideoModal } from 'utils/transformations'
// import useVideoInfoHandlers from 'hooks/useVideoInfoHandlers'
// import ErrorPage from 'components/StaticPages/ErrorPage/ErrorPage'
// import useHoverStyleButton from 'hooks/useHoverStyleButton'
// import CircularSoundButton from 'components/UI/CircularSoundButton/CircularSoundButton'
// import { VideoPlay } from 'components/Video/VideoShow/VideoPlay';

// const BrowseContent = props => {
//     const [
//         videoInfo, videoInfoError, detailModal, cardClickHandler,
//         cardHoverHandler, closeModalHandler
//     ] = useVideoInfoHandlers()

//     const [buttonHovered, onButtonHoverHandler] = useHoverStyleButton({
//         'playButton': true,
//         'infoButton': true
//     })
   

//     const [topTrailerSoundOn, setTopTrailerSoundOn] = useState(true)

//     const { videoSections } = props
//     const [firstVideo, ...remainingVideos] = videoSections[0].videos
//     const imageUrl = firstVideo ? `https://image.tmdb.org/t/p/original/${firstVideo.poster_path}` : null

//     const detailModalComponent = buildVideoModal(detailModal, videoInfo, { closeModalHandler })

//     const carousels = videoSections.map((videoSection, index) => (
//         <VideoCarousel key={videoSection.title}
//             carouselName={videoSection.title}
//             carouselVideo={index === 0 ? remainingVideos : videoSection.videos}
//             carouselClickHandler={cardClickHandler}
//             carouselHoverHandler={cardHoverHandler}
//             videoInfo={videoInfo}
//             videoDetailModal={detailModal}
//         />
//     ))

//     const topTrailerSoundButtonClickHandler = () => setTopTrailerSoundOn(prevState => !prevState)

//     // open video show modal
//     const [videoShowModal, setVideoShowModal] = useState(false);
//     const openVideoShowModal = () => {
//         setVideoShowModal(true);
//     }

//     return (!videoInfoError ? (
//         <div className="BrowseContent">
//             <TopTrailerComponent image={imageUrl} >
//                 <div className="TextsAndButtons">
//                     <div className="verticalItem" >
//                         <h3 > {firstVideo ? (firstVideo.name || firstVideo.title) : null} </h3>
//                         <span > {firstVideo ? firstVideo.overview : null} </span>
//                         <div className="horizontalButtonsHolder">
//                             <div
//                                 onClick={openVideoShowModal}
//                             >
//                                 <Button backgroundColor="#fff"
//                                     textColor="rgb(24, 24, 24)"
//                                     playButton
//                                     height="38px"
//                                     width="138px"
//                                     image icon={faPlay}
//                                     onButtonHover={
//                                         () => onButtonHoverHandler('playButton')}
//                                     hoverStatus={buttonHovered['playButton']} >
//                                     Play
//                                 </Button>
//                             </div>
//                             {videoShowModal ? (
//                                 <VideoPlay
//                                     openVideoShowModal={openVideoShowModal}
//                                     videoShowModal={videoShowModal}
//                                     name={firstVideo.name || firstVideo.title}
//                                 />
//                             ) : null}

//                             <Button backgroundColor="rgba(133, 133, 133, 0.6)"
//                                 textColor="white"
//                                 playButton
//                                 height="38px"
//                                 width="138px"
//                                 image icon={faInfoCircle}
//                                 onButtonHover={
//                                     () => onButtonHoverHandler('infoButton')}
//                                 hoverStatus={buttonHovered['infoButton']} >
//                                 More Info </Button>
//                         </div>
//                     </div>
//                     <div className="verticalItem" >
//                         <CircularSoundButton
//                             topTrailerSoundButtonClickHandler={topTrailerSoundButtonClickHandler}
//                             topTrailerSoundOn={topTrailerSoundOn} />
//                     </div>
//                 </div>
//             </TopTrailerComponent>
//             <div className="Carousels">
//                 {carousels}
//             </div>
//             {detailModalComponent}

//         </div>) :
//         <ErrorPage errors={videoInfoError} />
//     )
// }

// export default BrowseContent


//New 
// BrowseContent.js

import React, { useState } from 'react';
import './BrowseContent.css';
import TopTrailerComponent from 'components/Video/TopTrailerComponent/TopTrailerComponent';
import Button from 'components/UI/Button/Button';
import VideoCarousel from 'components/Video/VideoCarousel/VideoCarousel';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { buildVideoModal } from 'utils/transformations';
import useVideoInfoHandlers from 'hooks/useVideoInfoHandlers';
import ErrorPage from 'components/StaticPages/ErrorPage/ErrorPage';
import useHoverStyleButton from 'hooks/useHoverStyleButton';
import CircularSoundButton from 'components/UI/CircularSoundButton/CircularSoundButton';
import { VideoPlay } from 'components/Video/VideoShow/VideoPlay';
import ReusableVideoModal from 'components/Modals/VideoModal/ReusableVideoModal';

const BrowseContent = (props) => {
    const [
        videoInfo, videoInfoError, detailModal, cardClickHandler,
        cardHoverHandler, closeModalHandler
    ] = useVideoInfoHandlers();

    const [buttonHovered, onButtonHoverHandler] = useHoverStyleButton({
        'playButton': true,
        'infoButton': true
    });

    const [topTrailerSoundOn, setTopTrailerSoundOn] = useState(true);

    const { videoSections } = props;
    const [firstVideo, ...remainingVideos] = videoSections[0].videos;
    const imageUrl = firstVideo ? `https://image.tmdb.org/t/p/original/${firstVideo.poster_path}` : null;

    const detailModalComponent = buildVideoModal(detailModal, videoInfo, { closeModalHandler });

    const [videoShowModal, setVideoShowModal] = useState(false);

    const openVideoShowModal = () => {
        setVideoShowModal(true);
    }

    const closeVideoShowModal = () => {
        setVideoShowModal(false);
    }

    const topTrailerSoundButtonClickHandler = () => setTopTrailerSoundOn(prevState => !prevState);

    return (!videoInfoError ? (
        <div className="BrowseContent">
            <TopTrailerComponent image={imageUrl} >
                <div className="TextsAndButtons">
                    <div className="verticalItem">
                        <h3>{firstVideo ? (firstVideo.name || firstVideo.title) : null}</h3>
                        <span>{firstVideo ? firstVideo.overview : null}</span>
                        <div className="horizontalButtonsHolder">
                            <div onClick={openVideoShowModal}>
                                <Button
                                    backgroundColor="#fff"
                                    textColor="rgb(24, 24, 24)"
                                    playButton
                                    height="38px"
                                    width="138px"
                                    image icon={faPlay}
                                    onButtonHover={() => onButtonHoverHandler('playButton')}
                                    hoverStatus={buttonHovered['playButton']}
                                >
                                    Play
                                </Button>
                            </div>
                            {videoShowModal ? (
                                <ReusableVideoModal
                                    isOpen={videoShowModal}
                                    closeModalHandler={closeVideoShowModal}
                                    videoInfo={firstVideo}
                                />
                            ) : null}
                            <Button
                                backgroundColor="rgba(133, 133, 133, 0.6)"
                                textColor="white"
                                playButton
                                height="38px"
                                width="138px"
                                image icon={faInfoCircle}
                                onButtonHover={() => onButtonHoverHandler('infoButton')}
                                hoverStatus={buttonHovered['infoButton']}
                            >
                                More Info
                            </Button>
                        </div>
                    </div>
                    <div className="verticalItem">
                        <CircularSoundButton
                            topTrailerSoundButtonClickHandler={topTrailerSoundButtonClickHandler}
                            topTrailerSoundOn={topTrailerSoundOn}
                        />
                    </div>
                </div>
            </TopTrailerComponent>
            <div className="Carousels">
                {videoSections.map((videoSection, index) => (
                    <VideoCarousel key={videoSection.title}
                        carouselName={videoSection.title}
                        carouselVideo={index === 0 ? remainingVideos : videoSection.videos}
                        carouselClickHandler={cardClickHandler}
                        carouselHoverHandler={cardHoverHandler}
                        videoInfo={videoInfo}
                        videoDetailModal={detailModal}
                    />
                ))}
            </div>
            {detailModalComponent}
        </div>
    ) : (
        <ErrorPage errors={videoInfoError} />
    ));
}

export default BrowseContent;




