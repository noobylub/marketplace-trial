//import { UseUser } from '@auth0/nextjs-auth0';
import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Trial.module.scss";
import { useRouter } from "next/router";

export default function Home() {
  // const { user, error, isLoading } = useUser();
  // const checking = async() => {
  //   console.log(user);
  //   const fetching = await fetch('/api/hello');
  //   const data = await fetching.json();

  //   console.log(data.name);
  // }
  const router = useRouter(); 
  const customerPage = () => {
      router.push("/customer"); 
  }
  const businessPage = () => {
    router.push("/business")
  }
  return (
    <div className={styles.menu}>
      <h1 onClick={customerPage}>Customer</h1>
      <h1 onClick={businessPage}>Business</h1>
    </div>
  );
}
