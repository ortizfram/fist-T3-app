import { SignOutButton, SignUpButton, useUser } from "@clerk/nextjs";
import { NextPage } from 'next'

import { api } from '../utils/api'

const Home: NextPage = () => {
  const user = useUser();

  // get posts from backend
  const { data } = api.posts.getAll.useQuery();

  return (
    <>
      <div>
        {!user.isSignedIn && <SignUpButton />}
        {user.isSignedIn && <SignOutButton />}
      </div>
      <div>
        {data?.map((post) => (<div key={post.id}>{post.content}</div>))}
      </div>
    </>
  );
}

export default Home;
