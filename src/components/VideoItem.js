import './VideoItem.css'
import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='div-video-item'>
      <img
        className='img-video-item'
        alt={video.snippet.thumbnails.high.url}
        src={video.snippet.thumbnails.high.url}
      />{' '}
      <div className='div-video-snippet'>
        {' '}
        <div className='div-video-snippet-text'>{video.snippet.title} </div>
      </div>
    </div>
  )
}
export default VideoItem
