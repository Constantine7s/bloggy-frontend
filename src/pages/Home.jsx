import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import Grid from '@mui/material/Grid';


export const Home = () => {
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="New" />
        <Tab label="Popular" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {[...Array(5)].map(() => (
            <Post
              id={1}
              title="Test post"
              imageUrl="https://herebydesign.net/wp-content/uploads/2014/11/cropped-blog.header-photo.jpg"
              user={{
                avatarUrl:
                  'https://i1.rgstatic.net/ii/profile.image/1153589770760192-1652048642360_Q512/Michal-Ruprecht.jpg',
                fullName: 'Ruprecht',
              }}
              createdAt={'13 September 2022 '}
              viewsCount={150}
              commentsCount={3}
              tags={['react', 'fun', 'typescript']}
              isEditable
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={['react', 'typescript', 'заметки']} isLoading={false} />
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
}