import React from 'react';
import { useParams } from 'react-router-dom';
import { Namespace, useTranslation } from 'react-i18next';
import { isSupportedNiyam } from '../../config/niyams';
import NotFoundPage from '../404';
import { PageContainer } from '../common/components';
import TabsContainer from './TabsContainer';

function NiyamPage(): JSX.Element {
  const { niyamId } = useParams<RouteParams>();
  const { t } = useTranslation(niyamId as Namespace | undefined);

  if (isSupportedNiyam(niyamId)) {
    return (
      <PageContainer data-testid={niyamId}>
        <TabsContainer tabs={t('tabs')} />
      </PageContainer>
    );
  } else {
    return <NotFoundPage />;
  }
}

export default NiyamPage;
