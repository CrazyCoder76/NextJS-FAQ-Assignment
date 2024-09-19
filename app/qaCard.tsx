import React from 'react';

interface QuestionAnswerCardProps {
  question: string;
  answer: string;
  tag: string;
}

const QACard: React.FC<QuestionAnswerCardProps> = ({question, answer, tag}) => {

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Q: {question}</h2>
      <p className="text-gray-700 mb-4">A: {answer}</p>
      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold rounded-full px-3 py-1">
        {tag}
      </span>
    </div>
  );
}

export default QACard;