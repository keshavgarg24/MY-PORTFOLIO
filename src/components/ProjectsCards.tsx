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
    title: "interviewprep.AI",
    description:
      "interviewprep.AI -An AI powered mock interview platform where you can attend interviews and practise before your actual interviews and get feedback and score on your answers to improve yourself and ace your actual interview.",
    link: "https://github.com/keshavgarg24/interviewprep.AI",
  },
  {
    title: "padhAI",
    description:
      "padhAI - A revolutionary AI-powered platform that personalizes your learning experience, making it unique, engaging, and tailored to your goals, pace, and style. Break free from traditional learning and take charge of your education with padhAI.",
    link: "https://github.com/keshavgarg24/padhAI",
  },
  {
    title: "BeyondJob",
    description:
      "BeyondJob - A job-hunting platform that bridges the gap between job seekers and recruiters. Users can apply for jobs directly, while recruiters can post listings. The platform provides a streamlined, efficient experience powered by modern technologies.",
    link: "https://github.com/keshavgarg24/BeyondJob",
  },
  {
    title: "Swasthya Saheli",
    description:
      "Swasthya Saheli - your trusted virtual health companion! We're here to bridge the gap in women's healthcare with warmth and support. Think of us as your friendly guide, ready to help with early disease detection, provide educational resources, and offer preventive tips. Our personalized chatbot is like a caring friend, always there to listen and assist. Stay informed with the latest research articles and feel empowered to take charge of your health journey.",
    link: "https://github.com/keshavgarg24/SWASTHYA-SAHELI",
  },
  {
    title: "TurboNavigate",
    description:
      "TurboNavigate - A high-performance API designed to deliver results in milliseconds. Built with Hono, Upstash-Redis, Next.js, and Cloudflare, it offers fast and efficient query handling for optimal performance.",
    link: "https://github.com/keshavgarg24/turbonavigate",
  },
  {
    title: "KnowYourCalories",
    description:
      "Welcome to the Know Your Calories App repository! This app utilizes Google Gemini Pro, a state-of-the-art generative AI, to provide detailed information about food items when you upload pictures.",
    link: "https://github.com/keshavgarg24/calories",
  },
];
