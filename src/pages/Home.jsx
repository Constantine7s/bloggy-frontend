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
import { fetchPosts, fetchTags } from '../redux/slices/posts';

export const Home = () => {

  const dispatch = useDispatch();
  const {posts, tags} = useSelector(state => state.posts)

  const isPostsLoading = posts.status === 'loading';
  const isTagsLoading = tags.status === 'loading';

  console.log(posts, tags)

  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
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
              imageUrl={obj.imageUrl}
              user={obj.user}
              createdAt={obj.createdAt}
              viewsCount={obj.views}
              commentsCount={3}
              tags={obj.tags}
              isEditable
            />
            )
            
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock
            items={tags.items}
            isLoading={isTagsLoading}
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
