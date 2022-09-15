//import { UseUser } from '@auth0/nextjs-auth0';
import { useUser } from "@auth0/nextjs-auth0";

import styles from "../styles/Trial.module.scss";
import { useRouter } from "next/router";

export default function Home() {
  const { user, error, isLoading } = useUser();
  // const checking = async() => {
  //   console.log(user);
  //   const fetching = await fetch('/api/hello');
  //   const data = await fetching.json();

  //   console.log(data.name);
  // }

  const router = useRouter();
  const customerPage = () => {
    router.push("/customer");
  };
  const businessPage = () => {
    router.push("/business");
  };
  const loggingOut = () => {
    router.push("/api/auth/logout")
  }
  const loggingin = () => {
    router.push("/api/auth/login")
  }

  return (
    <div className={styles.menu}>
      {user ? (
        <div>
          <h1 onClick={customerPage}>Business</h1>
          <h1 onClick={businessPage}>Customer</h1>
          <h1 onClick={loggingOut}>Logout</h1>
        </div>
      ) : (
        <div>
          <h1 onClick={loggingin}>Login</h1>
        </div>
      )}
    </div>
  );
}
