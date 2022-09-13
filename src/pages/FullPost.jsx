import React from "react";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";

export const FullPost = () => {
  return (
    <>
      <Post
        id={1}
        title="Test Post"
        imageUrl="https://herebydesign.net/wp-content/uploads/2014/11/cropped-blog.header-photo.jpg"
        user={{
          avatarUrl:
            "https://i1.rgstatic.net/ii/profile.image/1153589770760192-1652048642360_Q512/Michal-Ruprecht.jpg",
          fullName: "Ruprecht",
        }}
        createdAt={"22 August 2022"}
        viewsCount={150}
        commentsCount={3}
        tags={["test", "post", "tag"]}
        isFullPost
      >
        <p>
          Hey there! This is a test post
        </p>
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Abaddon",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "This is a test comment",
          },
          {
            user: {
              fullName: "JJ",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "Somebody help me please",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};