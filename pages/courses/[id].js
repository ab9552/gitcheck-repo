import Video from '../../components/video/Video'

const url = `http://localhost:8000/items/`

export const getStaticPaths = async () => {
	const res = await fetch(url)
	const data = await res.json()

	const paths = data.map(video => {
		// NOTE Use either position or resourceId.videoId
		return {
			params: { id: video.id },
		}
	}) // id should be string

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async context => {
	const id = context.params.id
	const res = await fetch(url + id)
	const data = await res.json()

	return {
		props: { data },
	}
}

const Tutorial = ({ data }) => {
	return (
		<section>
			<h2>Video Dynamic</h2>
			<Video props={data.snippet} />
		</section>
	)
}

export default Tutorial
