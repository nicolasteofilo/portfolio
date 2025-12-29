"use client";

import * as React from "react";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import DraggableWrapper, { type DraggableWrapperRef } from "@/components/canvaswrapper/draggable-wrapper";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";
import Clock from "@/components/clock/clock";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "@/components/icons";
import homeAssets from "@/data/home-assets.json";
 


export default function Home() {

  const constraintsRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<DraggableWrapperRef>(null);

  return (
    <main className="w-full h-full fixed select-none scrollbar-none">
      <div ref={constraintsRef} className="absolute flex items-center justify-center w-[3200px] h-[2760px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <DraggableWrapper
          ref={draggableRef}
          constraintsRef={constraintsRef as React.RefObject<HTMLElement>}

        >

          <div id="mat-texture" className="absolute overflow-hidden rounded-lg border-[4px] border-[#94BDE6] bg-[#2A6DB0] w-[3200px] h-[2760px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] shadow-lg bg-linear-grid bg-[size:16px_16px] bg-[position:12px_12px]">
            <div id="window" className=" z-10 opacity-[0.6] absolute w-full h-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-cover bg-[url(/about-me/Layer-window.png)]"></div>
            <div id="lines" className="absolute w-full h-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-linear-big-grid bg-[size:80px_80px] bg-[position:-4px_-4px]"></div>
            <div id="diagonal-lines" className="absolute w-full h-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-diagonal-grid bg-[size:80px_80px] bg-[position:-2.5px_-2.5px]"></div>
          </div>

          <div className="absolute orchestration grid gap-3 grid-cols-[repeat(8,320px)] grid-rows-[repeat(7,320px)] w-[2644px] h-[2312px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            <div className="z-[-1] w-[2992px] h-[2240px] pointer-events-none">

            </div>

            <div className="orchestration select-none flex flex-col gap-2 relative rounded-lg w-[90vw] max-w-[100vw] col-start-4 row-start-4 col-span-2 row-span-2 left-1/2 -translate-x-1/2 bottom-[170px] sm:w-[568px] sm:left-[80px] sm:translate-x-0 sm:bottom-[220px] shadow-lg h-fit">
              <div style={{ "--stagger": 1 } as React.CSSProperties} className="select-none flex flex-col gap-2 sm:gap-4 bg-component relative rounded-lg w-full max-w-[100vw] col-span-2 row-span-2 sm:w-[568px] shadow-lg p-6 h-fit ">
                <div className="flex gap-3 items-center ">
                  <Avatar className="size-12 sm:size-14">
                    <AvatarImage src="/profilePicture.jpeg" alt="Profile Picture" />
                    <AvatarFallback>NT</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-1 justify-between items-center">
                    <div className="flex flex-col">
                      <p className="text-base sm:text-xl font-medium"> Nicolas Teófilo </p>
                      <p className="text-base font-medium text-muted-foreground"> Full Stack Developer </p>
                    </div>
                    <div className="sm:size-10 size-8">
                      <div className="sm:size-10 size-8 text-current">
  <svg viewBox="0 0 170 170" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path
      fill="currentColor"
      d="M22 145V25h20l52 78V25h20v120H94L42 67v78H22Zm88-100V25h56v20h-18v100h-20V45h-18Z"
    />
    <path
      fill="currentColor"
      opacity="0.18"
      d="M42 67l52 78h20L62 67H42Z"
    />
  </svg>
</div>

                    </div>

                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-sm sm:text-base leading-relaxed">
                    Welcome to <i>my portfolio.</i> I'm a full stack developer focused on building scalable, high-performance, and well-structured applications.
                  </span>

                  <p className="hidden sm:inline text-sm sm:text-base">I enjoy writing clean code, applying best practices, and building products that truly create value. Outside of coding, I’m a fan of coffee, japanese food.</p>

                  <p className="text-sm sm:text-base leading-relaxed">Have fun exploring my portfolio, and feel free to connect below.</p>

                  <div className="flex flex-row gap-4">
                    <Button asChild variant="secondary" size="sm" className="gap-2">
                      <Link href="https://www.linkedin.com/in/nicolasteofilo/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5" />
                        <span className="hidden sm:inline">Linkedin</span>

                      </Link>
                    </Button>
                    <Button asChild variant="secondary" size="sm" className="gap-2">
                      <Link href="https://github.com/nicolasteofilo" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                        <span className="hidden sm:inline">GitHub</span>

                      </Link>
                    </Button>
                    <Button asChild variant="secondary" size="sm" className="gap-2">
                      <Link href="mailto:nicolasteofilodecastro@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Mail className="w-5 h-5" />
                        <span className="hidden sm:inline">Mail</span>

                      </Link>
                    </Button>
                  </div>
                </div>

                <Separator className="grow my-1.5 sm:my-2 shrink mix-blend-multiply dark:mix-blend-lighten bg-transparent border-t-[1px] border-dashed"></Separator>

                <ul className="flex flex-col gap-4">
                  <li className="flex flex-row gap-4 inline-flex items-center justify-center">
                    <div className="hidden sm:flex h-10 w-10 flex-none items-center justify-center">
                      <Image
                        src="/experiences/dotcodingbr_logo.jpeg"
                        alt="Dotcoding logo"
                        width={40}
                        height={40}
                        className="h-9 w-9 object-contain rounded-sm"
                      />
                    </div>
                    <div className="flex flex-row w-full justify-between sm:items-center gap-4">
                      <div className="flex flex-col">
                        <span className="text-sm sm:text-base font-medium"> Dotcoding </span>
                        <span className="text-sm text-muted-foreground"> Full Stack Developer </span>
                      </div>
                      <Badge variant="secondary" className="tabular text-xs font-normal text-muted-foreground w-fit">2021 – 2023</Badge>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ "--stagger": 5} as React.CSSProperties} className="select-none flex flex-col gap-2 relative rounded-lg w-[90vw] max-w-[100vw] col-start-4 row-start-6 col-span-2 row-span-2 left-1/2 -translate-x-1/2 sm:w-[568px] sm:left-[80px] sm:translate-x-0 bottom-[360px] shadow-lg h-fit">
              <div className="select-none flex flex-col gap-4 bg-component relative rounded-lg w-full max-w-[100vw] col-span-2 row-span-2 sm:w-[568px] shadow-lg p-6 h-fit ">

                <p className="font-medium">Education</p>

                <ul className="flex flex-col gap-4">
                  {homeAssets.education.map((item) => (
                    <li key={item.id} className="flex flex-row gap-4 inline-flex items-center justify-center">
                      {item.icon ? (
                        <div className="hidden sm:flex h-10 w-10 flex-none items-center justify-center">
                          <Image
                            src={item.icon}
                            alt={`${item.school} icon`}
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain rounded-sm"
                          />
                        </div>
                      ) : (
                        <div className={`hidden sm:block h-10 w-10 flex-none inline-flex items-center justify-center rounded-sm ${item.color} flex-none`} />
                      )}
                      <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-row w-full justify-between gap-8 items-center justify-center">
                          <div className="flex flex-col">
                            <span className="font-medium"> {item.school} </span>
                            <span className="text-sm text-muted-foreground"> {item.course} </span>
                          </div>
                          <Badge variant="secondary" className="shrink-0 tabular text-xs font-normal text-muted-foreground "> {item.year} </Badge>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

            <div style={{ "--stagger": 12 } as React.CSSProperties} className="select-none col-start-7 col-span-2 h-fit row-start-5 w-[360px] flex rotate-[4deg]">
              <div className="w-[600px] h-[200px] flex items-center justify-center">
                <div className="relative flex items-center justify-center gap-8 w-full h-full p-8 rounded-lg overflow-hidden">
                  <Clock />
                </div>
              </div>
            </div>

          </div>

        </DraggableWrapper>
      </div>
    </main >

  );
}
