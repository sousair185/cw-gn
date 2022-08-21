import React from "react";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import useWidth from "../../../shared/functions/useWidth";
import PublicIcon from "@mui/icons-material/Public";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  tr: {
    background: "#f1f1f1",
    "&:hover": {
      background: "#f00",
      transform: "scale(0.8)",
    },
  },
  cardWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },

  cardWrapperHighlighted: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 350,
    },
  },
});

function PricingSection(props) {
  const { classes, theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    // <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
    //   <Typography variant="h3" align="center" className="lg-mg-bottom">
    //     PARA VOCÊ
    //   </Typography>
    //   <Typography variant="h4" align="center" className="lg-mg-bottom">
    //     A ULTRAVELOCIDADE DA GERAÇÃO NET IRÁ TE SURPREENDER
    //   </Typography>
    //   <div className={classNames("container-fluid", classes.containerFix)}>
    //     <Grid
    //       container
    //       spacing={calculateSpacing(width, theme)}
    //       className={classes.gridContainer}
    //     >
    //       <Grid
    //         item
    //         xs={12}
    //         sm={6}
    //         lg={4}
    //         className={classNames(classes.cardWrapper, "box")}
    //         data-aos="zoom-in-up"
    //       >
    //         <PriceCard
    //           title="Para Toda Família"
    //           pricing={
    //             <span>
    //               <PublicIcon /> <LiveTvIcon />
    //               <Typography display="" variant="h5">
    //                 Internet + TV
    //               </Typography>
    //             </span>
    //           }
    //           features={["Filmes", "Vídeos", "Séries"]}
    //         />
    //       </Grid>
    //       <Grid
    //         item
    //         className={classNames(classes.cardWrapper, "box")}
    //         xs={12}
    //         sm={6}
    //         lg={4}
    //         data-aos="zoom-in-up"
    //         data-aos-delay="200"
    //       >
    //         <PriceCard
    //           // highlighted
    //           title="Para você"
    //           pricing={
    //             <span>
    //               <PublicIcon /> <SportsEsportsIcon />
    //               <Typography display="" variant="h5">
    //                 + Internet + Jogos
    //               </Typography>
    //             </span>
    //           }
    //           features={["Jogar Online", "Estudar", "Navegar à vontade"]}
    //         />
    //       </Grid>
    //       <Grid
    //         item
    //         className={classNames(classes.cardWrapper, "box")}
    //         xs={12}
    //         sm={6}
    //         lg={4}
    //         data-aos="zoom-in-up"
    //         data-aos-delay={isWidthUpMd ? "400" : "0"}
    //       >
    //         <PriceCard
    //           title="Para sua Empresa"
    //           pricing={
    //             <span>
    //               <BusinessCenterIcon />
    //               <Typography display="" variant="h5">
    //                 Conexão confiável
    //               </Typography>
    //             </span>
    //           }
    //           features={["IP fixo", "Link dedicado", "Suporte 24/horas"]}
    //         />
    //       </Grid>
    //       <Grid
    //         item
    //         className={classes.cardWrapper}
    //         xs={12}
    //         sm={6}
    //         lg={3}
    //         data-aos="zoom-in-up"
    //         data-aos-delay={isWidthUpMd ? "600" : "200"}
    //       ></Grid>
    //     </Grid>
    //   </div>
    // </div>
    <div class="container-box">
      <div class="box">
        <span></span>
        <div class="content">
          <h2>Para Toda Família</h2>
          <PublicIcon /> <LiveTvIcon />
          <p>Filmes, Vídeos e Séries</p>
          <a href="whatsapp://send?">Saiba Mais</a>
        </div>
      </div>
      <div class="box">
        <span></span>
        <div class="content">
          <h2>Para Você</h2>
          <PublicIcon /> <SportsEsportsIcon />
          <p>Jogar Online, Estudar e Navegar à vontade</p>
          <a href="whatsapp://send?">Saiba Mais</a>
        </div>
      </div>
      <div class="box">
        <span></span>
        <div class="content">
          <h2>Para Sua Empresa</h2>
          <p>Texto</p>
          <a href="whatsapp://send?">Saiba Mais</a>
        </div>
      </div>
    </div>
  );
}

PricingSection.propTypes = {};

export default withStyles(styles, { withTheme: true })(PricingSection);
