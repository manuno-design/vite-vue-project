interface thumbnails {
    url: string,
    height: number,
    width: number
}

export interface youtubeItems {
    kind: string,
    etag: string,
    id: {
        kind: string,
        videoId: string
    },
    snippet: {
        title: string,
        channelId: string,
        channelTitle: string,
        description: string,
        liveBroadcastContent: string,
        publishTime: string,
        publishedAt: string,
        thumbnails: {
            default: thumbnails,
            medium: thumbnails,
            high: thumbnails
        }
    }
}

export interface youtubeData {
    kind: string,
    etag: string,
    nextPageToken: string,
    prevPageToken: string,
    pageInfo: {
      totalResults: number,
      resultsPerPage: number
    },
    items: youtubeItems[]
}