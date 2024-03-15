// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import testImg from "/src/assets/projects-img/testImg.png";

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "t1",
      description: "d1",
      imgUrl: testImg,
      gitHubLink: "g1",
    },
    {
      id: 2,
      title: "t2",
      description: "d2",
      imgUrl: testImg,
      gitHubLink: "g2",
    },
    {
      id: 3,
      title: "t3",
      description: "d3",
      imgUrl: testImg,
      gitHubLink: "g3",
    },
    {
      id: 4,
      title: "t4",
      description: "d4",
      imgUrl: testImg,
      gitHubLink: "g4",
    },
  ]);
}
