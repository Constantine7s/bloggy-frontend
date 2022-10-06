import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import Grid from '@mui/material/Grid';
import axios from '../axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPosts } from '../redux/slices/posts';

export const Home = () => {

  const dispatch = useDispatch();
  const {posts, tags} = useSelector(state => state.posts)

  const isPostsLoading = posts.status === 'loading';

  console.log(posts)

  React.useEffect(() => {
    dispatch(fetchPosts());
  },[]);



  return (
    <>
      <Tabs
        style={{ marginBottom: 15 }}
        value={0}
        aria-label="basic tabs example"
      >
        <Tab label="New" />
        <Tab label="Popular" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) => (
            isPostsLoading ? (<Post key={index} isLoading={true} />) : (
              <Post
              id={obj._id}
              title={obj.title}
              imageUrl="https://herebydesign.net/wp-content/uploads/2014/11/cropped-blog.header-photo.jpg"
              user={obj.user}
              createdAt={obj.createdAt}
              viewsCount={obj.viewsCount}
              commentsCount={3}
              tags={obj.tags}
              isEditable
            />
            )
            
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock
            items={['react', 'typescript', 'заметки']}
            isLoading={false}
          />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'JJ',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'This is nice',
              },
              {
                user: {
                  fullName: 'Abaddon the Despoiler',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: 'Today I had chicken',
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};
