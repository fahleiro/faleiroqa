import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useMetaTags = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Atualizar lang do documento
    document.documentElement.setAttribute('lang', i18n.language);
    
    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    }
    
    // Atualizar og:description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t('meta.ogDescription'));
    }
  }, [i18n.language, t]);
};

export default useMetaTags;
