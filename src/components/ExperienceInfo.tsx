"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function ExperienceInfo() {
  return (
    <TracingBeam className="">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-4xl font-bold w-fit  py-2 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4 px-6 font-bold")}>{item.title}</p>

            <div className="text-2-1 prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "WebStack Academy - Web Development Intern",
    description: (
      <ul className="list-disc ml-6">
        <li>
          Learning and mastering technologies essential for MERN stack development, including MongoDB, Express.js, React.js, and Node.js. Actively contributing to the development of a project, gaining hands-on experience in building scalable and efficient web applications. Collaborating with experienced developers to implement features, troubleshoot issues, and enhance project functionality within an agile development environment.
        </li>
      </ul>
    ),
    badge: "✦ Experience",
    image: "",
  },
  {
    title: "Campus Ambassador - Zuno by FOUNDIT",
    description: (
      <ul className="list-disc ml-6">
        <li>
        Engaged as a proactive campus ambassador intern , adept at networking , fostering new connections ,working in team environments while continuously enhancing interpersonal skills and adaptability.
        </li>
      </ul>
    ),
  },
  {
    title: "Member at TechXtract , Tech society of CST dept. at MAIT",
    description: (
      <ul className="list-disc ml-6">
        <li>
          Helped in organising various tech events and seminars , also participated in some of them and generally handles photography and discipline department.
        </li>
      </ul>
    ),
  },
  {
    title: "Member at VF MAIT, NGO",
    description: (
      <ul className="list-disc ml-6">
        <li>
          Worked for the betterment of society and especially towards the education of underprielged children, went to some charity drives.
        </li>
      </ul>
    ),
  },
];

