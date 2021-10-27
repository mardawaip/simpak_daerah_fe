import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTranslation } from 'react-i18next';
import { Card, Grid } from '@mui/material';
import { Box } from '@mui/system';

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
        <div className="p-24">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card>xs=8</Card>
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
      }
    />
  );
}

export default LandingPage;
