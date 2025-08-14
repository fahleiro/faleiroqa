import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contato');
  };

  return (
    <section className="hero" aria-label="Apresentação">
      <h1 className="hero__title">
        Gabriel Reinisch Faleiro
        <span className="hero__subtitle">QA Engineer</span>
      </h1>
      <p className="hero__tagline">
        {t('hero.tagline')}
      </p>
      <div className="hero__ctas">
        <button 
          className="button button--primary" 
          onClick={handleContactClick}
        >
          {t('cta.contact')}
        </button>
        <a 
          className="button button--ghost" 
          href="https://github.com/fahleiro" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;
