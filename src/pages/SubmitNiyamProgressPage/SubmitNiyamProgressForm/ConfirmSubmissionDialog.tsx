import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { NiyamFormSubmission } from '../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import { getTimeLabel } from '../../ProgressTrackersPage/ProgressTracker/ProgressTracker';

interface ConfirmSubmissionDialogProps {
  open: boolean;
  handleCancel: () => void;
  handleOk: () => void;
  formSubmission: NiyamFormSubmission;
}

function ConfirmSubmissionDialog(props: ConfirmSubmissionDialogProps) {
  const {
    formSubmission: { niyam, progress },
  } = props;

  const progressText = niyam.timeBased ? getTimeLabel(progress / 60) : progress;

  return (
    <Dialog sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }} maxWidth='xs' open={props.open}>
      <DialogTitle>Confirm your submission</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to add <b>{progressText}</b> to the <b>{niyam.label}</b> niyam?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={props.handleCancel} sx={{ minWidth: '75px' }}>
          No
        </Button>
        <Button onClick={props.handleOk} sx={{ minWidth: '75px' }}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmSubmissionDialog;
