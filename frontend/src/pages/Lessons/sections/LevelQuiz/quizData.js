export const quizQuestions = [
  {
    id: "experience",
    question: "How much Portuguese do you already know?",
    options: [
      {
        label: "Almost none — I am starting from the beginning.",
        scores: { beginner: 3 },
      },
      {
        label: "I know some basic words and phrases.",
        scores: { beginner: 2, intermediate: 1 },
      },
      {
        label: "I can understand and have simple conversations.",
        scores: { intermediate: 3 },
      },
      {
        label: "I already speak comfortably in many situations.",
        scores: { advanced: 3 },
      },
    ],
  },
  {
    id: "conversation",
    question: "What happens when someone speaks Portuguese to you?",
    options: [
      {
        label: "I understand very little.",
        scores: { beginner: 3 },
      },
      {
        label: "I understand the main idea if they speak slowly.",
        scores: { beginner: 1, intermediate: 2 },
      },
      {
        label: "I understand most everyday conversations.",
        scores: { intermediate: 3 },
      },
      {
        label: "I understand naturally, even when people speak quickly.",
        scores: { advanced: 3 },
      },
    ],
  },
  {
    id: "speaking",
    question: "How comfortable are you speaking Portuguese?",
    options: [
      {
        label: "I am not ready to speak yet.",
        scores: { beginner: 3 },
      },
      {
        label: "I can say simple things but need time to think.",
        scores: { beginner: 1, intermediate: 2 },
      },
      {
        label: "I can hold a conversation but still get stuck sometimes.",
        scores: { intermediate: 3 },
      },
      {
        label: "I speak confidently and want to sound more natural.",
        scores: { advanced: 3 },
      },
    ],
  },
  {
    id: "grammar",
    question: "How do you feel about Portuguese grammar?",
    options: [
      {
        label: "Most of it is completely new to me.",
        scores: { beginner: 3 },
      },
      {
        label: "I know some basics but still make many mistakes.",
        scores: { beginner: 1, intermediate: 2 },
      },
      {
        label: "I understand the main structures but want more accuracy.",
        scores: { intermediate: 3 },
      },
      {
        label: "I know grammar well and mostly need refinement.",
        scores: { advanced: 3 },
      },
    ],
  },
  {
    id: "goal",
    question: "What is your main reason for learning Portuguese?",
    options: [
      {
        label: "Travel, relationships or everyday communication.",
        recommendation: "oneOnOne",
      },
      {
        label: "I want to become more fluent and confident.",
        recommendation: "oneOnOne",
      },
      {
        label: "I am preparing for CELPE-Bras.",
        recommendation: "celpe",
      },
      {
        label: "I am looking for Portuguese lessons for a child.",
        recommendation: "kids",
      },
    ],
  },
  {
    id: "frequency",
    question: "How often would you realistically like to study?",
    options: [
      {
        label: "Occasionally, whenever I need support.",
        plan: "single",
      },
      {
        label: "Once a week.",
        plan: "flow",
      },
      {
        label: "Twice a week.",
        plan: "pace",
      },
      {
        label: "Three times a week.",
        plan: "mastery",
      },
    ],
  },
];

export const quizResults = {
  beginner: {
    level: "Beginner",
    description:
      "You are building the foundations of your Portuguese. A personalized approach can help you develop vocabulary, understand essential structures and start speaking with confidence.",
  },
  intermediate: {
    level: "Intermediate",
    description:
      "You already have a foundation in Portuguese. Your next step is turning what you know into more natural, confident and consistent communication.",
  },
  advanced: {
    level: "Advanced",
    description:
      "You already communicate confidently in Portuguese. Your lessons can focus on refinement, nuance, vocabulary, pronunciation and more sophisticated communication.",
  },
};

export const lessonRecommendations = {
  oneOnOne: {
    title: "One-on-One Portuguese",
    description:
      "Private lessons shaped around your goals, interests, level and learning rhythm.",
  },
  kids: {
    title: "Portuguese for Kids",
    description:
      "Playful and engaging lessons using conversation, music and age-appropriate activities.",
  },
  celpe: {
    title: "CELPE-Bras Preparation",
    description:
      "Focused preparation for the exam through communication, strategy and targeted practice.",
  },
};

export const planRecommendations = {
  single: {
    name: "Single Session",
    frequency: "Pay as you go",
    price: "$40",
  },
  flow: {
    name: "Flow",
    frequency: "1 lesson / week",
    price: "$150",
  },
  pace: {
    name: "Pace",
    frequency: "2 lessons / week",
    price: "$305",
  },
  mastery: {
    name: "Mastery",
    frequency: "3 lessons / week",
    price: "$460",
  },
};
