import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionsButtons from './ReactionsButtons'

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  //slice is going to create a copy of the posts array
  //localCompare will return -1 or 1 based on if one is greater than the other
  //a.date.localCompare(b.date) ascending order (10 minutes, 5 minutes ...)
  //b.date.localCompare(a.date) discending order (5 minutes, 10 minutes ...)

  const renderPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} /> 
      </p>
      <ReactionsButtons post={post} />
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  )
}

export default PostsList
