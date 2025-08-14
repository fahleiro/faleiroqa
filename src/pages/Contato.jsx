import { useTranslation } from 'react-i18next';
import Section from '../components/Section';

const Contato = () => {
  const { t } = useTranslation();

  return (
    <Section 
      id="contato" 
      title={t('sections.contact')}
      ariaLabel="Contato"
    >
      <p className="muted">
        {t('contact.paragraph')}
      </p>
      <div className="cta-row">
        <a 
          className="button button--primary" 
          href="https://www.linkedin.com/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a 
          className="button button--ghost" 
          href="mailto:" 
          aria-label="Enviar email"
        >
          Email
        </a>
      </div>
    </Section>
  );
};

export default Contato;
