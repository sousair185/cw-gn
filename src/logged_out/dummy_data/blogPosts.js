import React, { Fragment } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WifiIcon from "@mui/icons-material/Wifi";
import DownloadIcon from "@mui/icons-material/Download";
import TvIcon from "@mui/icons-material/Tv";

const content = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Internet + Tv + Telefone
    </Typography>
    <Typography paragraph>Encontre o plano que melhor te atende</Typography>
    <Typography paragraph>Aproveite e contrate agora mesmo!</Typography>
  </Fragment>
);

const falafacil = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Internet + Tv + Telefone
    </Typography>
    <Typography paragraph>Nesse plano você possui:</Typography>
    <List>
      <ListItem>
        <ListItemText>
          <Typography>
            <SpeedIcon sx={{ marginRight: 1 }} /> 100 Mega de velocidade
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <PhoneInTalkIcon sx={{ marginRight: 1 }} /> 100 Minutos em ligações
            para telefone fixo
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <WifiIcon sx={{ marginRight: 1 }} />
            Wi-fi grátis para utilizar em toda sua residência
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <DownloadIcon sx={{ marginRight: 1 }} /> Downloads ilimitados, sem
            restrição de cota
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <TvIcon sx={{ marginRight: 1 }} />
            TV com programação variada com mais de 50 canais
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  </Fragment>
);

const standard = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Internet + Tv + Telefone
    </Typography>
    <Typography paragraph>Nesse plano você possui:</Typography>
    <List>
      <ListItem>
        <ListItemText>
          <SpeedIcon sx={{ marginRight: 1 }} />
          <Typography>200 Mega para navegar com mais velocidade</Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <PhoneInTalkIcon sx={{ marginRight: 1 }} />
            100 Minutos em ligações para telefone fixo + 30 minutos para
            ligações para telefone celula
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <WifiIcon sx={{ marginRight: 1 }} />
            Wi-fi grátis para utilizar em toda sua residência
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <DownloadIcon sx={{ marginRight: 1 }} />
            Downloads ilimitados, sem restrição de cota
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <TvIcon sx={{ marginRight: 1 }} />
            TV com programação variada com mais de 50 canais
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  </Fragment>
);

const premium = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Internet + Tv + Telefone
    </Typography>
    <Typography paragraph>Nesse plano você possui:</Typography>
    <List>
      <ListItem>
        <ListItemText>
          <SpeedIcon sx={{ marginRight: 1 }} />
          <Typography>300 Mega para navegar com muita velocidade</Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <PhoneInTalkIcon sx={{ marginRight: 1 }} />
            250 Minutos em ligações para telefone fixo + 50 minutos para
            ligações para telefone celula
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <WifiIcon sx={{ marginRight: 1 }} />
            Wi-fi grátis para utilizar em toda sua residência
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <DownloadIcon sx={{ marginRight: 1 }} />
            Downloads ilimitados, sem restrição de cota
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <TvIcon sx={{ marginRight: 1 }} />
            TV com programação variada com mais de 50 canais
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  </Fragment>
);

const gold = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Internet + Tv + Telefone
    </Typography>
    <Typography paragraph>Nesse plano você possui:</Typography>
    <List>
      <ListItem>
        <ListItemText>
          <SpeedIcon sx={{ marginRight: 1 }} />
          <Typography>500 Mega para navegar com a ultravelocidade</Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <PhoneInTalkIcon sx={{ marginRight: 1 }} />
            500 Minutos em ligações para telefone fixo + 100 minutos para
            ligações para telefone celula
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <WifiIcon sx={{ marginRight: 1 }} />
            Wi-fi grátis para utilizar em toda sua residência
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <DownloadIcon sx={{ marginRight: 1 }} />
            Downloads ilimitados, sem restrição de cota
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography>
            <TvIcon sx={{ marginRight: 1 }} />
            TV com programação variada com mais de 50 canais
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  </Fragment>
);

const posts = [
  {
    title: "Fala Fácil",
    id: 1,
    // date: "17/07/1986",
    // src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost1.jpg`,
    snippet: content,
    content: falafacil,
  },
  {
    title: "Standard",
    id: 2,
    // date: 1576391600,
    // src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost2.jpg`,
    snippet: content,
    content: standard,
  },
  {
    title: "Premium",
    id: 3,
    // date: 1577391600,
    // src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost3.jpg`,
    snippet: content,
    content: premium,
  },
  {
    title: "Gold",
    id: 4,
    // date: 1572281600,
    // src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost4.jpg`,
    snippet: content,
    content: gold,
  },
];

export default posts;
