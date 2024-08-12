import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Set timer started");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Author Created this Profile component </h1>
    </div>
  );
};

export default Profile;
