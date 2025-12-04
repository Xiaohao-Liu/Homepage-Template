export type EducationConfig = typeof educationData;

import NUS from "@/assets/img/nus.svg";
import UCAS from "@/assets/img/cas.png";
import CUC from "@/assets/img/cuc.png";

export const educationData = [
  {
    start: "Aug 2024",
    end: "Present",
    institution: "National University of Singapore",
    role: "Ph.D. Student",
    logo: NUS,
    supervisor: { name: "", link: "" },
  },
  {
    start: "Sep 2021",
    end: "Jun 2024",
    institution: "Chinese Academy of Sciences",
    role: "M.S. degree",
    supervisor: { name: "Hualin Zeng", link: "" },
    logo: UCAS,
    remark: [<span key="gpa">GPA: 3.88/4.0</span>],
  },
  {
    start: "Sep 2017",
    end: "June 2021",
    institution: "Communication University of China",
    role: "B.S. degree",
    logo: CUC,
    supervisor: {
      name: "Xianglin Huang",
      link: "https://ccs.cuc.edu.cn/2021/0302/c6238a178399/page.htm",
    },
    remark: [<span key="gpa">GPA: 3.77/4.0, Rank: 1/34</span>],
  },
];
