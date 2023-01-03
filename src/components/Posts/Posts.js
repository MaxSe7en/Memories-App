import { CircularProgress, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post'
import useStyles from './styles';

const Posts = ({ setCurrentId}) =>{
    const classes = useStyles();

	/**fetching the post data */
    const posts = useSelector((state) => state.posts)//post coming from the reducers
    
    console.log('this are posts' + posts)


    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post._id } item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
        // <>
        //     <h1>
        //         POSTS
        //     </h1>

        //     <Post/>
        //     <Post/>
        // </>
    )
}

export default Posts;