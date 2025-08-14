import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import Card from '../components/Card';

const Expertise = () => {
  const { t } = useTranslation();

  const expertiseCards = [
    {
      title: t('cards.automation.title'),
      text: t('cards.automation.text')
    },
    {
      title: t('cards.api.title'),
      text: t('cards.api.text')
    },
    {
      title: t('cards.cicd.title'),
      text: t('cards.cicd.text')
    },
    {
      title: t('cards.strategy.title'),
      text: t('cards.strategy.text')
    },
    {
      title: t('cards.performance.title'),
      text: t('cards.performance.text')
    },
    {
      title: t('cards.observability.title'),
      text: t('cards.observability.text')
    }
  ];

  return (
    <Section 
      id="expertise" 
      title={t('sections.expertise')}
      ariaLabel="Expertise"
    >
      <div className="grid">
        {expertiseCards.map((card, index) => (
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

export default Expertise;
