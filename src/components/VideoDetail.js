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
          backgroundColor: '#686d76',
        }}
      >
        <h4 className='ui header '>{video.snippet.title}</h4>
        <p></p>
      </div>
    </div>
  )
}

export default VideoDetail
