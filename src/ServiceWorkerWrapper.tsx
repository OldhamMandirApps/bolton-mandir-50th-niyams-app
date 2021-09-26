import React, { useEffect } from 'react';
import { Button, Snackbar } from '@mui/material';
import * as serviceWorker from './serviceWorkerRegistration';

function ServiceWorkerWrapper(): JSX.Element {
  const [showReload, setShowReload] = React.useState(false);
  const [waitingWorker, setWaitingWorker] = React.useState<ServiceWorker | null>(null);

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
    setShowReload(false);
    window.location.reload();
  };

  return (
    <Snackbar
      open={showReload}
      message='A new version is available!'
      onClick={reloadPage}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      action={
        <Button color='inherit' size='small' onClick={reloadPage}>
          Reload
        </Button>
      }
    />
  );
}

export default ServiceWorkerWrapper;
