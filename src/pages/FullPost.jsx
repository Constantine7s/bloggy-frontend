import React from "react";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";

export const FullPost = () => {
  return (
    <>
      <Post
        id={1}
        title="Testing Post"
        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        user={{
          avatarUrl:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
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