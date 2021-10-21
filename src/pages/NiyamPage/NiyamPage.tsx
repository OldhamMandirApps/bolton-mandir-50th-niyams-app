import React from 'react';
import { useParams } from 'react-router-dom';
import { Namespace, useTranslation } from 'react-i18next';
import { isSupportedNiyam } from '../../config/niyams';
import NotFoundPage from '../404';
import { H1, PageContainer } from '../common/components';
import TabsContainer from './TabsContainer';
import { RouteParams } from '../../App/types';

function NiyamPage(): JSX.Element {
  const { niyamId } = useParams<RouteParams>();
  const { t } = useTranslation(niyamId as Namespace | undefined);

  if (isSupportedNiyam(niyamId)) {
    return (
      <PageContainer data-testid={niyamId}>
        <H1>{t('name')}</H1>
        <TabsContainer tabs={t('tabs')} />
      </PageContainer>
    );
  } else {
    return <NotFoundPage />;
  }
}

export default NiyamPage;
