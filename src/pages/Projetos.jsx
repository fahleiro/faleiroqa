import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import Card from '../components/Card';

const Projetos = () => {
  const { t } = useTranslation();

  const projectCards = [
    {
      title: t('projects.pipeline.title'),
      text: t('projects.pipeline.text')
    },
    {
      title: t('projects.e2e.title'),
      text: t('projects.e2e.text')
    },
    {
      title: t('projects.api.title'),
      text: t('projects.api.text')
    }
  ];

  return (
    <Section 
      id="projetos" 
      title={t('sections.projects')}
      ariaLabel="Projetos e Resultados"
    >
      <div className="grid">
        {projectCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            delay={index * 0.1}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projetos;
