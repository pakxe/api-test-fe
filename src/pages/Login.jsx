import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const REST_API_KEY = '78027d557383fd98a14b91384e0fbaf0';
  const REDIRECT_URI = 'http://localhost:3000/kakao/callback';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <button type='button' onClick={loginHandler}>
      로그인 하기
    </button>
  );
};

export default Login;

// import React, { useState } from 'react';

// const Login = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = async () => {
//     setIsLoading(true);

//     // Kakao API endpoint for getting the authorization code
//     const kakaoAuthEndpoint = 'https://kauth.kakao.com/oauth/authorize';

//     // Your application's client ID
//     const clientId = 'YOUR_APP_CLIENT_ID';

//     // The redirect URI registered with your application
//     const redirectUri = encodeURIComponent('YOUR_APP_REDIRECT_URI');

//     // The scope of the access request
//     const scope = encodeURIComponent('auth_type');

//     // Construct the full URL for the authorization request
//     const authUrl = `${kakaoAuthEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

//     // Redirect the user to the Kakao authorization page
//     window.location.href = authUrl;
//   };

//   return <div>{isLoading ? <p>Loading...</p> : <button onClick={handleLogin}>Login with Kakao</button>}</div>;
// };

// export default Login;
