import React, { useState } from 'react';
import './mcq.css';

const MCQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the answer if it's already open
    } else {
      setActiveIndex(index); // Expand the answer
    }
  };

  const faqData = [
    {
      question: 'Can I use the platform to assess the security of my infrastructure?',
      answer: 'Yes, we provide specialized tools for evaluating server, network, and data management system vulnerabilities.',
    },
    {
      question: 'What technologies power your platform?',
      answer: 'Our platform is powered by the Zero-Trace Security System, ensuring top-notch security and performance.',
    },
    {
      question: 'Can I get a trial version of the paid services?',
      answer: 'Yes, we offer a trial version for our paid services so you can explore the advanced features before committing.',
    },
    {
      question: 'How do you ensure the confidentiality of uploaded data?',
      answer: 'We use end-to-end encryption and strict access controls to ensure the confidentiality of all uploaded data.',
    },
    {
      question: 'Can I request a custom feature that is not currently available?',
      answer: 'Absolutely! We welcome feature requests and will consider them for future updates.',
    },
  ];

  return (
    <div className="mcqContainer">
      <div className='mcqtext'>
      <h2>Here Are The Most Common Questions From Businesses</h2>
      </div>
      <div className="mcqList">
        {faqData.map((faq, index) => (
          <div className="mcqItem" key={index}>
            <div className="mcqQuestion" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <span className="toggle-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            <div
              className={`mcqAnswer ${activeIndex === index ? 'active' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MCQ;