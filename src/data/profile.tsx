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
      <span style={{ fontFamily: "Oleo Script", fontSize: "1.2rem" }}>
        Xiaohao Liu
      </span>
      , a second-year Ph.D. student at{" "}
      <strong>National University of Singapore</strong>. Before that, I obtained
      the M.S. degree in Cyberscurity at{" "}
      <strong>University of Chinese Academy of Sciences</strong>, and obtained
      the B.E. degree in Computer Science at{" "}
      <strong>Communication University of China</strong>.
      <br />
      <br />I am broadly interested in{" "}
      <span
        style={{
          fontFamily: "Oleo Script",
          fontSize: "1.2rem",
          color: "#0c58ac",
        }}
      >
        &quot;trustworthy multimodal learning&quot;
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
