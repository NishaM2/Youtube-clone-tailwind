import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.png",
    thumb: "thumb.png",
    author: "Nisha M",
    views: "2.2M",
    timestamp: "45 min ago"
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.png",
    thumb: "thumb.png",
    author: "Nisha M",
    views: "2.2M",
    timestamp: "45 min ago"
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.png",
    thumb: "thumb.png",
    author: "Nisha M",
    views: "2.2M",
    timestamp: "45 min ago"
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.png",
    thumb: "thumb.png",
    author: "Nisha M",
    views: "2.2M",
    timestamp: "45 min ago"
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.png",
    thumb: "thumb.png",
    author: "Nisha M",
    views: "2.2M",
    timestamp: "45 min ago"
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.png",
    thumb: "thumb.png",
    author: "Nisha M",
    views: "2.2M",
    timestamp: "45 min ago"
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.png",
    thumb: "thumb.png",
    author: "Nisha M",
    views: "2.2M",
    timestamp: "45 min ago"
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.png",
    thumb: "thumb.png",
    author: "Nisha M",
    views: "2.2M",
    timestamp: "45 min ago"
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.png",
    thumb: "thumb.png",
    author: "Nisha M",
    views: "2.2M",
    timestamp: "45 min ago"
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.png",
    thumb: "thumb.png",
    author: "Nisha M",
    views: "2.2M",
    timestamp: "45 min ago"
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                image={video.image}
                thumb={video.thumb}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}>
           </VideoCard> 
        </div>)}
    </div>
}