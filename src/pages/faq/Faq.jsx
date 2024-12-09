import React, { useState } from 'react';
import '../../styles/faq/Faq.css';
import { Link } from 'react-router-dom';

const Faq = () => {
  const faqData = [
    {
      question: "도심 공원의 이용시간은  어떻게 되나요?",
      answer: "일반 도심공원은 24시간 개방, 시설형 도심공원은 오전 6시부터 밤 10시까지 운영됩니다."
    },
    {
      question: "공원 부대시설의 불편사항은 어디에 신고하나요?",
      answer: "일반 도심공원은 24시간 개방"
    },
    {
      question: "가로수길의 위생관련 신고는 어디에 하나요?",
      answer: "일반 도심공원은 24시간 개방"
    },
    {
      question: "도심 공원의 이용시간은  어떻게 되나요?",
      answer: "일반 도심공원은 24시간 개방"
    },
    {
      question: "가로수길에서 발견된 보행 불편물은 개인이 처리해도 되나요?",
      answer: "일반 도심공원은 24시간 개방"
    },
    {
      question: "보호수 신청은 어떻게 하나요?",
      answer: "일반 도심공원은 24시간 개방"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq__container">


      <h2 className='faq__title'>자주 묻는 질문</h2>
      <h3 className='faq__subtitle1'>개별 문의 전, 필요한 정보를 빠르게 확인해보세요</h3>
      <div className="faq__header">
        <span className="faq__total">전체 19건</span>
        <div className='faq__searchbar'>
          <input
            type="text"
            className="faq__search"
            placeholder="검색어를 입력해주세요"
          />
          <span className="material-symbols-outlined faq__searchicon">search</span>
        </div>
      </div>
      <div className="faq__list">
        {faqData.map((item, index) => (
          <div key={index} className="faq__item">
            <div
              className={`faq__question ${index === 0 ? 'first-question' : ''}`}
              onClick={() => toggleAnswer(index)}
            >

              {item.question}
              <span className={`material-symbols-outlined ${activeIndex === index ? 'rotate' : ''}`}>
                {activeIndex === index ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
              </span>
            </div>

            {activeIndex === index && (
              <div className="faq__answer active">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="faq__page">
        <Link className="faq__pageLink">&lt;&lt;</Link>
        <Link className="faq__pageLink">&lt;</Link>
        <Link className="faq__pageLink">1</Link>
        <Link className="faq__pageLink">2</Link>
        <Link className="faq__pageLink">3</Link>
        <Link className="faq__pageLink">4</Link>
        <Link className="faq__pageLink">5</Link>
        <Link className="faq__pageLink">&gt;</Link>
        <Link className="faq__pageLink">&gt;&gt;</Link>
      </div>
    </div>
  );
};

export default Faq;