import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/global-context/UserContext";
import { GITHUB_PROFILE_INFO_API } from "../utils/constants/constants";

const About = () => {
  const dataFromContext = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    login: "Dummy Use",
    avatar_url: "Default Img",
  });
  useEffect(() => {
    FetchUserInfo();
  }, []);

  const FetchUserInfo = async () => {
    const userData = await fetch(GITHUB_PROFILE_INFO_API);
    const json = await userData.json();
    console.log(json);
    setUserInfo(json);
  };
  return (
    <div className="w-6/12 m-auto my-24 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={userInfo.avatar_url}
          alt="Bonnie image"
        />

        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Name from Global context: {dataFromContext.loggedInUser}
        </h5>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Username from API: {userInfo.login}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {userInfo.type}
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
