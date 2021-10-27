import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTranslation } from 'react-i18next';
import { AppBar, Button, Card, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MenuIcon from '@mui/icons-material/Menu';
import appConfig from 'app/fuse-configs/appConfig';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function LandingPage(props) {
  const { t } = useTranslation('examplePage');

  return (
    <Root
      content={
        <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              { appConfig.app.judul_apikasi }
            </Typography>
            <Button color="inherit" href="/login">Login</Button>
          </Toolbar>
        </AppBar>
        <Carousel showArrows={true} showStatus={false} showIndicators={true} showThumbs={false} autoPlay={true} interval={3000} infiniteLoop transitionTime={1000}>
            <div>
                <img src="/assets/images/backgrounds/1.jpg" />
            </div>
            <div>
                <img src="/assets/images/backgrounds/2.jpg" />
            </div>
            <div>
                <img src="/assets/images/backgrounds/3.jpg" />
            </div>
        </Carousel>
        <div className="p-24">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                  Item
              </Grid>
              <Grid item xs={4}>
                <Card>xs=4</Card>
              </Grid>
              <Grid item xs={4}>
                <Card>xs=4</Card>
              </Grid>
              <Grid item xs={8}>
                <Card>xs=8</Card>
              </Grid>
            </Grid>
          </Box>
        </div>
        </>
      }
    />
  );
}

export default LandingPage;
