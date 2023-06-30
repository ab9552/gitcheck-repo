import { useState } from 'react'

const Video = props => {
	const { description, title, channelTitle, position, resourceId } = props.props

	const [video, setVideo] = useState({
		id: 'A63UxsQsEbU',
	})

	const embed = `https://www.youtube.com/embed/`
	// const url = `${embed}${video.id}`
	const url = `${embed}${resourceId.videoId}`

	return (
		<>
			<iframe
				width="560"
				height="315"
				src={url}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<h3>Title: {title}</h3>
			<h3>
				Channel Title: <a href={'https://youtube.com/c/' + channelTitle}>{channelTitle}</a>
			</h3>
			<p>Description:{description}</p>
		</>
	)
}

export default Video

// TODO
// Get the videos collection as props and set it to state
// Then display paginated videos with previous and next
// Remove more and suggested videos from iframe
