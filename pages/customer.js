import styles from "../styles/Trial.module.scss";
import axios from "axios";
import { useUser, user_id, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

export default withPageAuthRequired(function Customer() {
  const { user } = useUser();
  const [Loading, SetLoading] = useState(false);
  const options = {
    headers: { "Content-Type": "application/json" },
  };

  const checking = async () => {
    try {
      console.log("starting");
      console.log(user_id);
      await axios.post(
        "/api/customers/register",
        {
          name: user.name,
        },
        options
      );
      console.log("Finished");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    checking();
  }, []);
  if (Loading) {
    return <h1>Still loading...</h1>;
  }
  return (
    <div>
      <nav className={styles.navbar}>
        <h1>{user.name}</h1>
        <div>
          {/* Searching for new products */}
          <h2>Search</h2>
          {/* List new items in the favorite companeis */}
          <h2>New</h2>
          {/* List all items bought  */}
          <h2>Bought</h2>
        </div>
      </nav>
    </div>
  );
});
