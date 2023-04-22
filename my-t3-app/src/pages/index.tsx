import { SignOutButton, SignUpButton, useUser } from "@clerk/nextjs";
import { NextPage } from 'next'

import { api } from '../utils/api'

const Home: NextPage = () => {
  const user = useUser();


  const { data, isLoading } = api.posts.getAll.useQuery();
  if (isLoading) return <div>Loading...</div>
  if (!data) return <div>Something went wrong</div>

  return (
    <>
      <main className="flex justify-center h-screen">
        <div className="border border-x border-slate-400 w-full md:max-w-2xl">
          <div className="flex border-b border-slate-200 p-4">
            {!user.isSignedIn && <div className="flex justify-center"><SignUpButton /></div>}
            {user.isSignedIn && <SignOutButton />}
          </div>
          <div className="flex flex-col">
            {[...data, ...data]?.map((post) => (<div key={post.id} className="p-8 border-b border-slate-400">{post.content}</div>))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
