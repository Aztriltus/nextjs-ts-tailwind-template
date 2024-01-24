'use client';

import { PostType } from '@/actions/home';

interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps) => {
  return (
    <div
      key={post.id}
      className="flex items-center justify-between gap-8 rounded-lg border border-transparent bg-zinc-100 p-4 transition-all hover:border-neutral-100 hover:bg-stone-50 hover:shadow-sm"
    >
      <h1 className="text-sm capitalize text-zinc-600">{post.title}</h1>
      <p className="text-[9px]">{post.completed ? '✅' : '❌'}</p>
    </div>
  );
};
