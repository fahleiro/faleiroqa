import { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <p>© {year} Gabriel Reinisch Faleiro — QA Engineer</p>
    </footer>
  );
};

export default Footer;
