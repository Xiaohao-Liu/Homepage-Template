export type ProfileConfig = typeof profileData;

import profilePhoto from "@/assets/sea.jpg";

export const profileData = {
  name: "Xiaohao Liu",
  name_zh: "刘晓豪",
  note: "Ph.D. student at National University of Singapore",
  photo: profilePhoto,
  description: (
    <>
      Hey, I am{" "}
      <span style={{
        fontFamily: "Oleo Script",
        fontSize: "1.1rem",
        color: "#0c58ac"
      }}>
        Xiaohao Liu
      </span>
      , a second-year Ph.D. student at{" "}
      <strong>National University of Singapore</strong>, advised by <a href="https://www.comp.nus.edu.sg/~ngsk/" style={{ fontWeight: "bold" }} target="_blank">Prof. Ng See-Kiong</a> and <a href="https://www.chuatatseng.com/" style={{ fontWeight: "bold" }} target="_blank">Prof. Chua Tat-Seng</a>. Before that, I obtained
      the M.S. degree in Cyberscurity at{" "}
      <strong>University of Chinese Academy of Sciences</strong>, and obtained
      the B.E. degree in Computer Science at{" "}
      <strong>Communication University of China</strong>.
      <br />
      <br />I am broadly interested in{" "}
      <span
        style={{
          fontFamily: "Oleo Script",
          fontSize: "1.1rem",
          color: "#0c58ac",
        }}
      >
        trustworthy multimodal learning
      </span>
      .
      <br />
      <br />
      I&apos;m open to collaboration and discussions! <br />
      Please feel free to contact me and explore possibilities together!
    </>
  ),
  institute: ["School of Computing", "National University of Singapore"],
  email: "xiaohao.liu@u.nus.edu",
  location: "Singapore",
};
