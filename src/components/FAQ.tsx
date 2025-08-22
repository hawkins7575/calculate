import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, title = "자주 묻는 질문" }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <Card className="mt-4">
      <Card.Header as="h2">{title}</Card.Header>
      <Card.Body className="p-0">
        {items.map((item, index) => (
          <div key={index} className="border-bottom">
            <div
              className="p-3 cursor-pointer"
              onClick={() => toggleItem(index)}
              style={{ cursor: 'pointer', backgroundColor: openItems.has(index) ? '#f8f9fa' : 'white' }}
              role="button"
              aria-expanded={openItems.has(index)}
              aria-controls={`faq-answer-${index}`}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0 fw-normal">{item.question}</h4>
                <span className="text-primary fs-4">
                  {openItems.has(index) ? '−' : '+'}
                </span>
              </div>
            </div>
            <Collapse in={openItems.has(index)}>
              <div id={`faq-answer-${index}`}>
                <div className="p-3 pt-0 text-muted">
                  {item.answer.split('\n').map((line, lineIndex) => (
                    <p key={lineIndex} className="mb-2">{line}</p>
                  ))}
                </div>
              </div>
            </Collapse>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default FAQ;