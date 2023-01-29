interface thumbnails {
    url: String,
    height: Number,
    width: Number
}

export interface youtubeItems {
    kind: String,
    etag: String,
    id: {
        kind: String,
        videoId: String
    },
    snippet: {
        title: String,
        channelId: String,
        channelTitle: String,
        description: String,
        liveBroadcastContent: String,
        publishTime: String,
        publishedAt: String,
        thumbnails: {
            default: thumbnails,
            medium: thumbnails,
            high: thumbnails
        }
    }
}

export interface youtubeData {
    kind: String,
    etag: String,
    nextPageToken: String,
    prevPageToken: String,
    pageInfo: {
      totalResults: Number,
      resultsPerPage: Number
    },
    items: youtubeItems[]
}