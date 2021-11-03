import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Namespace, useTranslation } from 'react-i18next';
import { isSupportedNiyam } from '../../config/niyams';
import NotFoundPage from '../404';
import { H1, PageContainer } from '../common/components';
import TabsContainer from './TabsContainer';
import { RouteParams } from '../../App/types';
import Navbar from '../common/Navbar';
import { useRecoilValue } from 'recoil';
import { currentLanguageAtom, Language } from '../common/atoms';
import { getCustomPage, isCustomPage } from './config';

function NiyamPage(): JSX.Element | null {
  const { niyamId } = useParams<RouteParams>();
  const currentLanguage = useRecoilValue(currentLanguageAtom);

  const { t, i18n } = useTranslation(niyamId as Namespace | undefined);

  useEffect(() => {
    const language = currentLanguage === Language.english ? 'en' : 'gu';
    i18n.changeLanguage(language);
  }, [currentLanguage, i18n]);

  if (isSupportedNiyam(niyamId)) {
    return (
      <div>
        <Navbar showLanguageToggle />
        <PageContainer data-testid={niyamId}>
          <H1>{t('name')}</H1>
          <TabsContainer tabs={t('tabs')} />
        </PageContainer>
      </div>
    );
  } else if (isCustomPage(niyamId)) {
    return getCustomPage(niyamId);
  } else {
    return <NotFoundPage />;
  }
}

export default NiyamPage;
