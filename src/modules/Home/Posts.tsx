import { Post } from '@/modules/Home/Post';

import { getPosts } from '@/actions/home';

export const Posts = async () => {
  const data = await getPosts();

  if (data.posts) {
    const posts = data.posts.map((post) => {
      return <Post key={post.id} post={post} />;
    });

    return (
      <div className="rounded-lg bg-zinc-50 p-4 shadow-md">
        <h1 className="mb-4 text-center text-2xl">Posts</h1>
        <div className="space-y-2">{posts}</div>
      </div>
    );
  }

  return <>{data.error.message}</>;
};
