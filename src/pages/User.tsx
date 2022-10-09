import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

class UserClass {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export const loader = async ({
  params,
}: LoaderFunctionArgs): Promise<UserClass | null> => {
  const userIdParam = params.userId;
  if (!userIdParam) return null;
  const userId = Number.parseInt(userIdParam);
  if (userId === 1) {
    return new UserClass(userId, "Usuario 1");
  }
  return null;
};

const User = (): JSX.Element => {
  const user = useLoaderData() as UserClass;

  return (
    <>
      {user ? (
        <>
          <h2>User {user.id}</h2>
          <p>User name: {user.name}</p>
        </>
      ) : (
        <h2>User not found</h2>
      )}
    </>
  );
};

export default User;
