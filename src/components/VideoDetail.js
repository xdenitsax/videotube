import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className='ui embed'>
        <iframe title='video player' src={videoSrc} />
      </div>
      <div
        className='ui segment'
        style={{
          backgroundColor: 'rgba(255, 255, 249, 0.678)',
          borderRadius: '15px',
          border: 'hidden',
        }}
      >
        <h4 className='ui header '>{video.snippet.title}</h4>
        <p></p>
      </div>
    </div>
  )
}

export default VideoDetail
