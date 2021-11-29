import styled from "styled-components";
import { useAuth } from "../common/useAuth";

const H2 = styled.h2`
  color: hsl(210deg, 15%, 90%);
`;

const Dashboard:React.FC = () => {
  const { user } = useAuth();
  return (
    <div>
      <H2>Dashboard</H2>
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
        </>
      ) : (
        <>
          <p>You are not logged in</p>
        </>
      )}
    </div>
  );
}

export { Dashboard };
