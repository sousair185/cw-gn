import React, { Fragment } from "react";
import { Typography } from "@mui/material";

const content = (
  <Fragment>
    <Typography variant="h6" paragraph>
      O melhor plano para você e sua família
    </Typography>
    <Typography paragraph>
      Plano acessível e com muita velocidade, aproveite!
    </Typography>
    <Typography paragraph>Aproveite e contrate agora mesmo!</Typography>
  </Fragment>
);

const posts = [
  {
    title: "Básico",
    id: 1,
    // date: "17/07/1986",
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost1.jpg`,
    snippet: "Internet de alta velocidade, recomendado para uso residencial",
    content: content,
  },
  {
    title: "Intermediário",
    id: 2,
    // date: 1576391600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost2.jpg`,
    snippet: "Internet de alta velocidade, recomendado para toda a família",
    content: content,
  },
  {
    title: "Gamer",
    id: 3,
    // date: 1577391600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost3.jpg`,
    snippet:
      "Internet de alta velocidade, recomendado para jogos online, vídeos e música online a todo momento",
    content: content,
  },
  {
    title: "Empresarial",
    id: 4,
    // date: 1572281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost4.jpg`,
    snippet:
      "Internet de alta velocidade, para toda sua empresa estar sempre conectada",
    content: content,
  },
  // {
  //   title: "Post 5",
  //   id: 5,
  //   // date: 1573281600,
  //   src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost5.jpg`,
  //   snippet:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  //   content: content,
  // },
  // {
  //   title: "Post 6",
  //   id: 6,
  //   // date: 1575281600,
  //   src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost6.jpg`,
  //   snippet:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  //   content: content,
  // },
];

export default posts;
