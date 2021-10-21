import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Namespace, useTranslation } from 'react-i18next';
import { isSupportedNiyam } from '../../config/niyams';
import NotFoundPage from '../404';
import { H1, PageContainer } from '../common/components';
import TabsContainer from './TabsContainer';
import { RouteParams } from '../../App/types';
import Navbar from '../common/Navbar';
import { useRecoilValue } from 'recoil';
import { currentLanguageAtom, Language } from '../common/atoms';

interface LocationState {
  tabIndex?: number;
}

function NiyamPage(): JSX.Element {
  const { niyamId } = useParams<RouteParams>();
  const history = useHistory<LocationState>();
  const currentLanguage = useRecoilValue(currentLanguageAtom);

  const { t, i18n } = useTranslation(niyamId as Namespace | undefined);

  useEffect(() => {
    const language = currentLanguage === Language.english ? 'en' : 'gu';
    i18n.changeLanguage(language);
  }, [currentLanguage, i18n]);

  if (isSupportedNiyam(niyamId)) {
    return (
      <div>
        <Navbar />
        <PageContainer data-testid={niyamId}>
          <H1>{t('name')}</H1>
          <TabsContainer tabs={t('tabs')} tabIndex={history.location.state?.tabIndex ?? 0} />
        </PageContainer>
      </div>
    );
  } else {
    return <NotFoundPage />;
  }
}

export default NiyamPage;
