import React, { useState } from 'react';
import './faq.css';
import { Link } from 'react-router-dom';

const FAQ = () => {
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
      question: 'Are your services free or paid?',
      answer: 'We offer a range of free services, along with paid plans that include advanced features.',
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
    <div className="faq-container">
      <div className='text'>
      <h2>Frequently Asked Questions</h2>
      <p>Below is a set of common questions that users asked about Zero-Trace Security System, categorized by audience type (developers, individuals, and businesses)</p>
      {/* <button >Read more</button> */}
      <Link className='faqBtn' to='/Faq'>Read more</Link>
      </div>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <span className="toggle-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;