import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = (theme) => ({
  dialogActions: {
    justifyContent: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  dialog: {
    zIndex: 1400,
  },
  backIcon: {
    marginRight: theme.spacing(1),
  },
});

function CookieRulesDialog(props) {
  const { classes, onClose, open, theme } = props;
  return (
    <Dialog
      open={open}
      scroll="paper"
      onClose={onClose}
      className={classes.dialog}
    >
      <DialogTitle>Nossa Política de Privacidade</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
          Sobre esta política de cookies
        </Typography>
        <Typography paragraph>
          Esta Política de Cookies explica o que são cookies e como os usamos,
          os tipos de cookies que usamos, ou seja, as informações que coletamos
          usando cookies e como essas informações são usadas e como controlar as
          preferências de cookies. Para obter mais informações sobre como
          usamos, armazenamos e mantemos seus dados pessoais seguros, consulte
          nossa Política de Privacidade.Você pode a qualquer momento alterar ou
          retirar seu consentimento da Declaração de Cookies em nosso siteSaiba
          mais sobre quem somos, como você pode entrar em contato conosco e como
          processamos dados pessoais em nossa Política de Privacidade. Seu
          consentimento se aplica aos seguintes domínios: geracaonet.com.br Seu
          estado atual: Não foi dado consentimento.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          O que são cookies?
        </Typography>
        <Typography paragraph>
          Cookies são pequenos arquivos de texto que são usados ​​para armazenar
          pequenas informações. Eles são armazenados no seu dispositivo quando o
          site é carregado no seu navegador. Esses cookies nos ajudam a fazer o
          site funcionar corretamente, torná-lo mais seguro, fornecer uma melhor
          experiência ao usuário e entender como o site funciona e analisar o
          que funciona e onde precisa ser melhorado.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Como usamos cookies?
        </Typography>
        <Typography paragraph>
          Como a maioria dos serviços online, nosso site usa cookies próprios e
          de terceiros para diversos fins. Os cookies primários são
          principalmente necessários para que o site funcione da maneira correta
          e não coletam nenhum dos seus dados de identificação pessoal. Os
          cookies de terceiros usados ​​em nosso site são principalmente para
          entender como o site funciona, como você interage com nosso site,
          manter nossos serviços seguros, fornecer anúncios relevantes para você
          e, em suma, fornecer a você um usuário melhor e aprimorado experiência
          e ajudar a acelerar suas futuras interações com nosso site.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Que tipos de cookies usamos?
        </Typography>
        <Typography paragraph>Essencial:</Typography>
        <Typography paragraph>
          Alguns cookies são essenciais para que você possa experimentar todas
          as funcionalidades do nosso site. Eles nos permitem manter as sessões
          do usuário e evitar quaisquer ameaças de segurança. Eles não coletam
          ou armazenam nenhuma informação pessoal. Por exemplo, esses cookies
          permitem que você faça login em sua conta e adicione produtos à sua
          cesta e faça o checkout com segurança.
        </Typography>
        <Typography paragraph>Estatísticas:</Typography>
        <Typography paragraph>
          Esses cookies armazenam informações como o número de visitantes do
          site, o número de visitantes únicos, quais páginas do site foram
          visitadas, a fonte da visita etc. Esses dados nos ajudam a entender e
          analisar o desempenho do site e onde precisa de melhorias. Marketing:
          Nosso site exibe anúncios. Esses cookies são usados ​​para
          personalizar os anúncios que mostramos a você para que sejam
          significativos para você. Esses cookies também nos ajudam a acompanhar
          a eficiência dessas campanhas publicitárias. As informações
          armazenadas nesses cookies também podem ser usadas pelos provedores de
          anúncios terceirizados para exibir anúncios em outros sites também no
          navegador.
        </Typography>
        <Typography paragraph>Funcionais:</Typography>
        <Typography paragraph>
          São os cookies que auxiliam algumas funcionalidades não essenciais em
          nosso site. Essas funcionalidades incluem incorporar conteúdo como
          vídeos ou compartilhar conteúdo do site em plataformas de mídia
          social.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Preferências:
        </Typography>
        <Typography paragraph>
          Esses cookies nos ajudam a armazenar suas configurações e preferências
          de navegação, como preferências de idioma, para que você tenha uma
          experiência melhor e eficiente em futuras visitas ao site. A lista
          abaixo detalha os cookies usados em nosso site.
        </Typography>
        <List>
          <ListItem>
            <Typography sx={{marginRight: 2}} paragraph>cookielawinfo-checkbox-analytics</Typography>
            <Typography>
              Este cookie é definido pelo plug-in GDPR Cookie Consent. O cookie
              é usado para armazenar o consentimento do usuário para os cookies
              na categoria "Analytics".
            </Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{marginRight: 2}} paragraph>cookielawinfo-checkbox-functional</Typography>
            <Typography>
              O cookie é definido pelo consentimento do cookie GDPR para
              registrar o consentimento do usuário para os cookies na categoria
              "Funcional".
            </Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{marginRight: 2}} paragraph>cookielawinfo-checkbox-necessary</Typography>
            <Typography>
              Este cookie é definido pelo plug-in GDPR Cookie Consent. Os
              cookies são usados para armazenar o consentimento do usuário para
              os cookies na categoria "Necessário".
            </Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{marginRight: 2}} paragraph>cookielawinfo-checkbox-others</Typography>
            <Typography>
              O cookie é definido pelo plug-in GDPR Cookie Consent e é usado
              para armazenar se o usuário consentiu ou não com o uso de cookies.
              <strong> Ele não armazena nenhum dado pessoal.</strong>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{marginRight: 2}} paragraph>
              cookielawinfo-checkbox-performance
            </Typography>
            <Typography>
              Este cookie é definido pelo plug-in GDPR Cookie Consent. O cookie
              é usado para armazenar o consentimento do usuário para os cookies
              na categoria "Desempenho".
            </Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{marginRight: 2}} paragraph>viewed_cookie_policy</Typography>
            <Typography>
              O cookie é definido pelo plug-in GDPR Cookie Consent e é usado
              para armazenar se o usuário consentiu ou não com o uso de cookies.
              <strong> Ele não armazena nenhum dado pessoal.</strong>
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h6" color="primary" paragraph>
          Como posso controlar as preferências de cookies?
        </Typography>
        <Typography paragraph>
          Caso decida alterar suas preferências posteriormente durante sua
          sessão de navegação, você pode clicar na guia “Política de Privacidade
          e Cookies” na tela. Isso exibirá o aviso de consentimento novamente,
          permitindo que você altere suas preferências ou retire totalmente seu
          consentimento. Além disso, diferentes navegadores fornecem métodos
          diferentes para bloquear e excluir cookies usados ​​por sites. Você
          pode alterar as configurações do seu navegador para bloquear/excluir
          os cookies. Para saber mais sobre como gerenciar e excluir cookies,
          visite wikipedia.org, www.allaboutcookies.org.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <ColoredButton
          onClick={onClose}
          variant="contained"
          color={theme.palette.common.black}
        >
          <ArrowBackIcon className={classes.backIcon} />
          Voltar
        </ColoredButton>
      </DialogActions>
    </Dialog>
  );
}

CookieRulesDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CookieRulesDialog);
