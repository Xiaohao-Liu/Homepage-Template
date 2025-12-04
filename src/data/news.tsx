export type NewsConfig = typeof newsData;
import { Image } from "@nextui-org/image";

import NUS from "@/assets/img/nus.svg";
import NExT from "@/assets/img/next.png";
import { GithubIcon } from "@/components/icons";

export const newsData = [
  {
    type: "",
    date: "18-Sep-2025",
    event: <>Three papers are accepted by NeurIPS 2025!</>,
  },
  {
    type: "",
    date: "01-Aug-2025",
    event: <>One paper is accepted by MM 2025!</>,
  },
  {
    type: "",
    date: "15-May-2025",
    event: <>One paper is accepted by KDD 2025!</>,
  },
  {
    type: "",
    date: "25-Dec-2024",
    event: (
      <>
        A benchmark for modality generalization is released:{" "}
        <GithubIcon size={18} /> <strong>ModalBed</strong>!
      </>
    ),
  },
  {
    type: "",
    date: "17-Nov-2024",
    event: <>One paper is accepted by KDD 2025!</>,
  },
  {
    type: "",
    date: "23-Jul-2024",
    event: (
      <>
        I joined <strong style={{ display: "contents" }}>NUS</strong>{" "}
        <Image
          alt="NUS"
          height={16}
          radius="none"
          src={NUS}
          style={{ padding: "0 3px" }}
          width={22}
        />{" "}
        as a Ph.D. student!
      </>
    ),
  },
  {
    type: "image",
    date: "17-May-2024",
    event: <>One paper is accepted by KDD 2024!</>,
  },
  {
    type: "",
    date: "20-Oct-2023",
    event: <>One paper is accepted by WSDM 2024!</>,
  },
  {
    type: "",
    date: "05-Apr-2023",
    event: <>One paper is accepted by SIGIR 2023!</>,
  },
  {
    type: "",
    date: "01-Apr-2023",
    event: (
      <>
        I joined{" "}
        <Image
          alt="NExT"
          height={16}
          radius="none"
          src={NExT}
          style={{ padding: "0 3px" }}
          width={64}
        />{" "}
        as a research assistant!
      </>
    ),
  },
  {
    type: "",
    date: "30-Jun-2022",
    event: <>One paper is accepted by MM 2022!</>,
  },
  {
    type: "",
    date: "15-Jun-2022",
    event: <>One paper is accepted by TMM 2022!</>,
  },
];
