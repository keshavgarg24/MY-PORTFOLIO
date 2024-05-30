"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Here is my github account to know more about the updated projects and connect with me there :)
`;

export function ProjectsCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
      <TextGenerateEffect words={words} />
      {/* <GoogleGeminiEffectDemo />*/}

      <div className="h-[20rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <a
            href="https://github.com/keshavgarg24"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/keshavgarg24
          </a>
        </p>
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "Swasthya Saheli",
    description:
      "Swasthya Saheli - your trusted virtual health companion! We're here to bridge the gap in women's healthcare with warmth and support. Think of us as your friendly guide, ready to help with early disease detection, provide educational resources, and offer preventive tips. Our personalized chatbot is like a caring friend, always there to listen and assist. Stay informed with the latest research articles and feel empowered to take charge of your health journey.",
    link: "https://github.com/keshavgarg24/SWASTHYA-SAHELI",
  },
  {
    title: "Krrypto",
    description:
      "Unmatched Guidance at an Affordable Price. Explore the Future with Krypto - Your Gateway to Comprehensive Crypto Information and Soon, a Hub for Trading, Selling, and Buying Stocks.",
    link: "https://github.com/keshavgarg24/krypto",
  },
  {
    title: "GridBattle",
    description:
      "This is a tic tac toe game made using html , css and js , but it has a new algorithm used in it. it has three modes - two player mode - play with ai -easy and impossible and in impossible mode , minimax algorithm is used to make the user impossible to win the game , it will be either a tie or the ai wins the game .",
    link: "https://github.com/keshavgarg24/actualtictactoe",
  },
  {
    title: "EasyWrite blogs",
    description:
      "It is a simple blogging website i made to apply my learnings of next-js taking benefits of its serverless authentication ",
    link: "https://github.com/keshavgarg24/next-blog-website",
  },
  {
    title: "PdfChit",
    description:
      "Chat with PDFs This Streamlit app allows users to chat with PDF documents. It uses language processing techniques to extract text from PDFs and provide conversational responses to user questions based on the content of the PDFs.",
    link: "https://github.com/keshavgarg24/chatwithpdf",
  },
  {
    title: "KnowYourCalories",
    description:
      "Welcome to the Know Your Calories App repository! This app utilizes Google Gemini Pro, a state-of-the-art generative AI, to provide detailed information about food items when you upload pictures.",
    link: "https://github.com/keshavgarg24/calories",
  },
];
