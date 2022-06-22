import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const name = "Sudarshan070";

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <div className="one">
      <div className="two">
        <img src={data && data.avatar_url} alt="avatar" />
        <div className="three">
          <h2> {data && data.login}</h2>

          <p className="full1">{data && data.login}</p>
          <br />
          <button>Follow </button>
          {/* <p>{data.followers} followers {data.following} following</p> */}
          <p className="full">Full stack Web Developer</p>
          <br />
          <p>{data && data.campany}</p>
          <p>{data && data.location}</p>
          <p>{data && data.email}</p>
          <p>{ data && data.id}</p>
          <p>{data && data.twitter_username}</p>
        </div>
    </div>
   </div>
    
  );
}


export default App;
