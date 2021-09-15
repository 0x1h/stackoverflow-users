import React, { useState, useEffect, useRef } from "react";
import Container from "./Container";
import WebComponent from "./Website";
import Badges from "./Badges";
import Loading from "./isLoading";
import Error from "./isError";
import axios from "axios";

const SearchComponent = (): JSX.Element => {
  const [user, setUser] = useState<boolean>(true);
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [badges, setBadges] = useState<any>({});

  const inputRef = useRef<HTMLInputElement>(null);

  const fetchUser = async (username: string) => {    
    setIsLoading(true); 

    await axios
      .get(
        `https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&inname=${username}&site=stackoverflow`
      )
      .then((userStats) => { 
        setData(userStats.data.items[0]);
        inputRef.current!.value = "";
        console.log(data)
        setBadges(userStats.data.items[0].badge_counts)

        if (userStats.data.items === []) {
          setIsError(true);
          setIsLoading(false);
          setUser(false);
        }

        if (userStats.data.items[0].website_url) {
          setIsLoading(false);
          setUser(true);
        } 
        
        else {
          setIsLoading(false);
          setIsError(false);
          setUser(false);
        }
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUser("callmenikk");
  }, []);

  const checkWebsite = (): JSX.Element => {
    if (isError) {
      return <Error />;
    }

    if (isLoading) {
      return <Loading />;
    }

    if (user) {
      return (
        <Container
          username={data.display_name}
          location={data.location}
          reputation={data.reputation}
          image={data.profile_image}
          WebComponent={<WebComponent website={data.website_url} />}
          Badges={
              <Badges bronze={badges.bronze} silver={badges.silver} golden={badges.gold}/>     
          }
        />
      );
    }

    return (
      <Container
        username={data.display_name}
        location={data.location}
        reputation={data.reputation}
        image={data.profile_image}
        Badges={
          <Badges
            bronze={data.badge_counts.bronze}
            silver={data.badge_counts.silver}
            golden={data.badge_counts.gold}
          />
        }
      />
    );
  };

  return (
    <React.Fragment>
      <div className="h-26 w-full flex justify-center items-center sm: ">
        <div className="w-1/2">
          <form
            className="max-w-50 flex justify-center items-center h-20"
            onSubmit={(e) => {
              if (inputRef.current!.value.trim() === "") return;
              fetchUser(inputRef.current!.value);
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className="border-4 border-black-900 rounded-md w-96 h-10 text-center font-black outline-none focus:ring-2 focus:ring-black-900"
              ref={inputRef}
            />
            <button
              type="submit"
              className="bg-black-900 text-white-900 rounded-md h-10 w-36 ml-5 px-2"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {checkWebsite()}
    </React.Fragment>
  );
};

export default SearchComponent;
