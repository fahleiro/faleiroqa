import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR';
    i18n.changeLanguage(newLang);
    localStorage.setItem('locale', newLang);
  };

  const handleNavClick = (route) => {
    navigate(route);
  };

  const isActive = (route) => {
    if (route === '/') return location.pathname === '/';
    return location.pathname === route;
  };

  return (
    <header className="site-header">
      <a 
        className="brand" 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('/');
        }}
      >
        Faleiro QA
      </a>
      <nav className="nav">
        <a 
          href="#" 
          className={isActive('/expertise') ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/expertise');
          }}
        >
          {t('nav.expertise')}
        </a>
        <a 
          href="#" 
          className={isActive('/projetos') ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/projetos');
          }}
        >
          {t('nav.projects')}
        </a>
        <a 
          href="#" 
          className={isActive('/contato') ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/contato');
          }}
        >
          {t('nav.contact')}
        </a>
        <button 
          className="lang-switch" 
          type="button" 
          onClick={toggleLanguage}
          aria-label="Switch language"
        >
          {i18n.language === 'pt-BR' ? 'PT-BR' : 'EN-US'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
