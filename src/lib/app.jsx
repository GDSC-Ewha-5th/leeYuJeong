import React, { useState, useEffect } from 'react';

const App = () => {
  const [userState, setUserState] = useState({
    status: "idle",
    data: null,
  });

  const getUser = async (name) => {
    setUserState({ ...userState, status: "pending" }); 
    try {
      const data = await getUserData(name);
      if (data === null) throw Error; 
      setUserState({ status: "resolved", data: data });
    } catch (e) {
      setUserState({ status: "rejected", data: null });
      console.log(e);
    }
  };

  useEffect(() => {
    getUser("yujeongit"); 
  }, []);

  return (
    <>
      <SearchBar getUser={getUser} />
      <ResultCard data={userState.data} />
    </>
  );
}

export default App;