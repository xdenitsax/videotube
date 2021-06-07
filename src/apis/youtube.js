import axios from 'axios'

// const KEY = 'AIzaSyAANFZaTn_yvyC-saA5Cr9P5SrjMv9UOa0'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 20,
    key: KEY,
  },
})
