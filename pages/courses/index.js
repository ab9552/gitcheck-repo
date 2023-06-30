import { useState, useEffect } from 'react'
import Course from '../../components/video/Course'
import Image from 'next/image'
import Link from 'next/link'

const dataApi = 'http://localhost:8000/items/'

export const getStaticProps = async () => {
	const res = await fetch(dataApi)
	const data = await res.json()
	// console.log(JSON.stringify(data))

	return {
		props: { data },
	}
}

const Courses = props => {
	const [courses, setCourses] = useState({})

	return (
		<>
			<h2>Courses</h2>
			<h2>Data is below </h2>

			{props.data.map(video => {
				{
					/* console.log(`	ID:${JSON.stringify(video.id)}`) */
				}

				return (
					<section>
						<Link href={`/courses/${video.id}`}>
							<a>
								<img src={video.snippet.thumbnails.medium.url} />
								<h3>Title: {video.snippet.title}</h3>
								<h3>ID: {video.snippet.position}</h3>
							</a>
						</Link>

						<span>Channel Title: {video.snippet.channelTitle}</span>

						<hr />
					</section>
				)
			})}
		</>
	)
}

export default Courses

// TODO
// Get the collection of courses
// Display thumbnail, channel/author, level
// Link it to the respective videos list page
// Add Enrollment feature
