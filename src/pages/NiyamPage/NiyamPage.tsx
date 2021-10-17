import React from 'react';
import { useParams } from 'react-router-dom';
import { Namespace, useTranslation } from 'react-i18next';
import { isSupportedNiyam } from '../../config/niyams';
import NotFoundPage from '../404';

function NiyamPage(): JSX.Element {
  const { niyamId } = useParams<RouteParams>();
  const { t } = useTranslation(niyamId as Namespace | undefined);

  console.log('Content = ', t('tabs'));

  if (isSupportedNiyam(niyamId)) {
    return <div data-testid={niyamId}></div>;
  } else {
    return <NotFoundPage />;
  }
}

export default NiyamPage;
