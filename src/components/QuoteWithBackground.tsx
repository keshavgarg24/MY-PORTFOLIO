"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function QuoteWithBackground() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden ">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-white text-opacity-50 text-center  text-4xl font-bold">
            Deciphering bytes, weaving digital symphonies.
          </p>
        }
        className="h-[40rem]"
      >
      Deciphering <span className="text-red-500">bytes</span><span className="text-red-500">, weaving</span>digital <span className="text-red-500">symphonies</span>.
      </MaskContainer>
    </div>
  );
}
