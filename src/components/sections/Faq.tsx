import { faq } from '../../data/faq';
import { Accordion } from '../ui/Accordion';
import { Section } from '../ui/Section';

const items = faq.map((f) => ({ id: f.id, title: f.question, content: f.answer }));

export default function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions, answered">
      <div className="mx-auto max-w-3xl">
        <Accordion items={items} />
      </div>
    </Section>
  );
}
