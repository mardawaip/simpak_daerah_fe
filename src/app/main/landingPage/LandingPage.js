import { useTranslation } from 'react-i18next';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Grid, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import appConfig from 'app/fuse-configs/appConfig';
import { motion } from 'framer-motion';
import _ from '@lodash';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const data = {
  id: 'widget5',
  series: {
    today: [
      {
        name: 'Visitors',
        data: [1210, 1380, 1520, 1290, 490, 1390, 1050, 680, 1300, 2140, 1520, 1890]
      },
      {
        name: 'Page Views',
        data: [3000, 3400, 4100, 3800, 2200, 3200, 2900, 1900, 2900, 3900, 2500, 3800]
      }
    ],
    yesterday: [
      {
        name: 'Visitors',
        data: [1190, 1300, 2340, 1220, 1590, 1990, 1250, 1080, 2000, 2380, 2420, 2190]
      },
      {
        name: 'Page views',
        data: [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800]
      }
    ]
  },
  options: {
    chart: {
      type: 'area',
      height: '100%',
      stacked: true,
      foreColor: '#999',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
      strokeColor: '#fff',
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6
      }
    },
    xaxis: {
      categories: [
        '12am',
        '2am',
        '4am',
        '6am',
        '8am',
        '10am',
        '12pm',
        '2pm',
        '4pm',
        '6pm',
        '8pm',
        '10pm'
      ],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    },
    grid: {
      position: 'back'
    },
    legend: {
      show: false
    },
    fill: {
      type: 'solid',
      opacity: 0.7
    },
    tooltip: {
      followCursor: true,
      theme       : 'dark',
      fixed: {
        enabled: false,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0,
      },
    }
  }
};

function LandingPage(props) {
  const { t } = useTranslation('examplePage');
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const series = data.series[Object.keys(data.series)[tabValue]];

  _.setWith(data, 'options.colors', [theme.palette.secondary.main, theme.palette.primary.main]);

  return (
    <div>
        <>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
          <Grid container>
            <Grid item xs={1} sm={3}/>
            <Grid item xs={9} sm={6}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              { appConfig.app.judul_apikasi }
            </Typography>
            </Grid>
            <Grid item xs={3}/>
          </Grid>
            <Button color="primary" variant="contained" href="/login">Login</Button>
          </Toolbar>
        </AppBar>
        <div className="w-full">
          <div className="PricingStyle1Page-header flex" style={{ backgroundImage: "url('/assets/images/backgrounds/bg-demo.jpg')", backgroundSize: "cover" }}>
            <div className="p-24 w-full max-w-2xl mx-auto">
              <div className="text-center my-128 mx-24">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
                >
                  <Typography color="inherit" className="font-bold text-32 md:text-52">
                    { appConfig.app.judul_apikasi }
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.3 } }}
                >
                  <Typography color="inherit" className="text-16 opacity-75 mt-16 mx-auto max-w-512">
                    { appConfig.app.sub_judul_aplikasi }<br/>
                    { appConfig.app.nama_wilayah }
                  </Typography>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
              <div className="flex flex-wrap w-full py-20">
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Card>
                        <Carousel showArrows={true} showStatus={false} showIndicators={true} showThumbs={false} autoPlay={true} interval={3000} infiniteLoop transitionTime={1000}>
                          <div>
                              <img src="/assets/images/backgrounds/1.jpg" />
                              <p className="legend">Legend 1</p>
                          </div>
                          <div>
                              <img src="/assets/images/backgrounds/2.jpg" />
                              <p className="legend">Legend 1</p>
                          </div>
                          <div>
                              <img src="/assets/images/backgrounds/3.jpg" />
                              <p className="legend">Legend 1</p>
                          </div>
                      </Carousel>
                    </Card>
                  </Grid>
                  <Grid item xs={8}>
                    <Carousel showArrows={true} showStatus={false} showIndicators={true} showThumbs={false} autoPlay={true} interval={5000} infiniteLoop transitionTime={3000} onSwipeMove>
                        <div>
                          <Card className="mr-5 ml-5">
                            <CardMedia
                              component="img"
                              height="194"
                              image="/assets/images/backgrounds/1.jpg"
                              alt="Paella dish"
                            />
                            <CardContent>
                              <Typography variant="inherit">Judul Berita 1</Typography>
                            </CardContent>
                            <CardActions>
                              <Typography variant="caption" color="text.secondary">sub berita</Typography>
                            </CardActions>
                          </Card>
                        </div>
                        <div>
                          <Card className="mr-5 ml-5">
                            <CardMedia
                              component="img"
                              height="194"
                              image="/assets/images/backgrounds/2.jpg"
                              alt="Paella dish"
                            />
                            <CardContent>
                              Judul Berita 2
                            </CardContent>
                            <CardActions>
                            sub berita
                            </CardActions>
                          </Card>
                        </div>
                        <div>
                          <Card className="mr-5 ml-5">
                            <CardMedia
                              component="img"
                              height="194"
                              image="/assets/images/backgrounds/3.jpg"
                              alt="Paella dish"
                            />
                            <CardContent>
                              Judul Berita
                            </CardContent>
                            <CardActions>
                            sub berita
                            </CardActions>
                          </Card>
                        </div>
                      </Carousel>
                  </Grid>
                  <Grid item xs={12}>
                  <Card className="w-full rounded-20 shadow">
                    <div className="relative p-20 flex flex-row items-center justify-between">
                      <div className="flex flex-col">
                        <Typography className="h3 sm:h2 font-medium">Visitors & Page views</Typography>
                      </div>

                      <div className="flex flex-row items-center">
                        <Tabs
                          value={tabValue}
                          onChange={(event, value) => setTabValue(value)}
                          indicatorColor="secondary"
                          textColor="inherit"
                          variant="scrollable"
                          scrollButtons={false}
                          className="w-full px-24 -mx-4 min-h-40"
                          classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
                          TabIndicatorProps={{
                            children: (
                              <Box
                                sx={{ bgcolor: 'text.disabled' }}
                                className="w-full h-full rounded-full opacity-20"
                              />
                            ),
                          }}
                        >
                          {Object.keys(data.series).map((key) => (
                            <Tab
                              key={key}
                              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 capitalize"
                              disableRipple
                              label={key}
                            />
                          ))}
                        </Tabs>
                      </div>
                    </div>

                    <div className="relative h-200 sm:h-320 sm:pb-16">
                      <ReactApexChart
                        options={data.options}
                        series={series}
                        type={data.options.chart.type}
                        height={data.options.chart.height}
                      />
                    </div>
                  </Card>
                  </Grid>
                </Grid>
              </div>
              <Typography variant="h4" className="pb-32 font-medium">
                Frequently Asked Questions
              </Typography>

              <div className="flex flex-wrap w-full">
                <div className="w-full sm:w-1/2 p-24">
                  <Typography className="text-20 mb-8">How does free trial work?</Typography>
                  <Typography className="text-16" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec
                    augue tincidunt accumsan. In dignissim laoreet ipsum eu interdum.
                  </Typography>
                </div>

                <div className="w-full sm:w-1/2 p-24">
                  <Typography className="text-20 mb-8">Can I cancel any time?</Typography>
                  <Typography className="text-16" color="textSecondary">
                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed
                    quis neque tellus. Donec maximus ipsum in malesuada hendrerit.
                  </Typography>
                </div>

                <div className="w-full sm:w-1/2 p-24">
                  <Typography className="text-20 mb-8">What happens after my trial ended?</Typography>
                  <Typography className="text-16" color="textSecondary">
                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed
                    quis neque tellus. Donec maximus ipsum in malesuada hendrerit.
                  </Typography>
                </div>

                <div className="w-full sm:w-1/2 p-24">
                  <Typography className="text-20 mb-8">Can I have a discount?</Typography>
                  <Typography className="text-16" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec
                    augue tincidunt accumsan. In dignissim laoreet ipsum eu interdum.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      </div>    
  );
}

export default LandingPage;
