import { Niyam } from '../../../config/niyams';
import { Box, Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface AddNiyamProgressInfoPanelProps {
  niyam: Niyam | null;
}

function AddNiyamProgressInfoPanel(props: AddNiyamProgressInfoPanelProps): JSX.Element | null {
  // function getNiyamInfoText(niyam: Niyam) {
  //   switch (niyam) {
  //     case Niyam.BhaktachintamaniVachanamrut:
  //       return 'Once you have finished the <b>entire</b> granth from start to finish, add a count to this niyam.';
  //     case Niyam.JanmangalNamavaliStotram:
  //       return 'Once you have finished either the Janmangal Namavali <b>or</b> the Janmangal Stotram, add a count to this niyam.';
  //     case Niyam.OradaNaPads:
  //       return 'Once you have finished <b>all 4 pads</b>, add a count to this niyam.';
  //     case Niyam.ShantiPaath:
  //       return 'Once you have finished reading <b>all 5 prakarans</b> of the Shanti Paath, add a count to this niyam.';
  //     default:
  //       return '';
  //   }
  // }

  if (!props.niyam) {
    return null;
  } else {
    return (
      <Grid item>
        <Box bgcolor='#febf1a' p='8px' borderRadius='4px'>
          <Grid container>
            <Grid item xs={1}>
              <InfoIcon htmlColor='#042139' />
            </Grid>
            <Grid item xs={11}>
              {/* <div dangerouslySetInnerHTML={{ __html: getNiyamInfoText(props.niyam) }} /> */}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    );
  }
}

export default AddNiyamProgressInfoPanel;
