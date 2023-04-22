import { SignOutButton, SignUpButton, useUser } from "@clerk/nextjs";

function Index() {
  const user = useUser();

  return (
    <div>
      {!user.isSignedIn && <SignUpButton />}
      {user.isSignedIn && <SignOutButton />}
    </div>
  );
}

export default Index;
