'use server';

export type PostType = {
  id: number;
  title: string;
  completed: boolean;
};

export const getPosts = async () => {
  // mimic api call
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5',
    );
    const data = await response.json();

    return { posts: data as PostType[] };
  } catch (error) {
    return {
      error: {
        message: 'Something went wrong',
      },
    };
  }
};
