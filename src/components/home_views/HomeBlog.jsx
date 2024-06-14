import React, { useEffect, useState } from 'react';
import ProfileContainer from '../blog/ProfileContainer';
import BlogPhoto from '../blog/BlogPhoto';

const HomeBlog = () => {
  const loadingArr = [
    {
      userId: 10000001,
      profilePic: "",
      youserName: "loading",
      accountName: "loading",
      userBio: "loading"
    },
    {
      userId: 10000002,
      profilePic: "",
      youserName: "loading",
      accountName: "loading",
      userBio: "loading "
    }
  ];

  const [yousersDataArr, setUsersDataArray] = useState([...loadingArr]);

  useEffect(() => {
    const fetchData = async () => {
      const getYousersData = async () => {
        const response = await fetch('../data/data.json')
        const data = await response.json()
        return data
      }
      try {
        const yousersData = await getYousersData();
        setUsersDataArray(yousersData);
      } catch (error) {
        console.error('Error fetching yousers data:', error);
      }
    };

    fetchData(); // Call the fetchData function when component mounts
  }, []);

  const homeDisplay = yousersDataArr.map(youser => (
    <div className="blog" key={youser.userId}>
      <ProfileContainer 
        profilePic={youser.profilePic} 
        accountName={youser.accountName}
        youserName={youser.youserName}
      />
      {/* <BlogPhoto /> */}
      <hr className='blog-mb'/>
    </div>
  ));

  return (
    <>
      {homeDisplay}
    </>
  );
};

export default HomeBlog;
