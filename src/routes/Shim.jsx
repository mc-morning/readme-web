// import React, { useState } from "react";
// import { Wrapper } from "./Answer/Check/AnswerCheck.styles";

// function WriteAnswer() {
//   const [idx, setIdx] = useState(0);
//   const label = ["탐정", "함정", "인정"];
//   return (
//     <Wrapper>
//       <h1>답변을확인해보아요.</h1>
//       <span>전 경원입니다</span>

//       <div
//         onClick={() => setIdx((prev) => (prev >= 2 ? prev - 2 : prev + 1))}
//         style={{ padding: "10px", backgroundColor: "gray", cursor: "pointer" }}
//       >
//         <span>{label[idx]}이죠</span>
//       </div>
//     </Wrapper>
//   );
// }

// export default WriteAnswer;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Auth = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const url = new URL(window.location.href);
//     const code = url.searchParams.get("code");

//     if (code) {
//       axios
//         .get(
//           `https://homeless-sheela-mc-morning-2364610f.koyeb.app/auth/kakao/callback?code=${code}`
//         )
//         .then((response) => {
//           console.log("1");
//           const { accessToken } = response.data;

//           if (accessToken) {
//             localStorage.setItem("accessToken", accessToken);
//             navigate("/");
//           }
//         })
//         .catch((error) => {
//           console.error("로그인 실패:", error);
//         });
//     }
//   }, [navigate]);

//   return <div>로그인 중입니다...</div>;
// };

// export default Auth;
