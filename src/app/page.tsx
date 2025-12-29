"use client";

import * as React from "react";
import { useEffect } from "react";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Book } from "@/components/book/book";
import DraggableWrapper, { type DraggableWrapperRef } from "@/components/canvaswrapper/draggable-wrapper";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";
import Clock from "@/components/clock/clock";
import { FollowPointer } from "@/components/cursor/animated-cursor";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "@/components/icons";
import TurbulenceCanvas from '@/components/canvas'
import { Album } from "@/components/ui/album";
import { LogoVariation2 } from "@/components/logo-variation-2";
import homeAssets from "@/data/home-assets.json";
 


export default function Home() {

  const turbulenceRef = useRef<any>(null)
  const hasTriggeredRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      if (entry.isIntersecting && !hasTriggeredRef.current && turbulenceRef.current) {
        hasTriggeredRef.current = true
        turbulenceRef.current.startHelloAnimation()
      }
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4
    })

    const element = turbulenceRef.current?.getElement()
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])


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

            <FollowPointer style={{ "--stagger": 14 } as React.CSSProperties} x={1800} y={1000} name="Nicolas"></FollowPointer>

            {homeAssets.stickers.map((sticker) => (
              <Image
                key={sticker.id}
                draggable="false"
                loading="lazy"
                style={{ "--stagger": sticker.stagger } as React.CSSProperties}
                className={`${sticker.className} object-contain`}
                width={sticker.width}
                height={sticker.height}
                src={sticker.src}
                alt={sticker.alt}
              />
            ))}

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

            <div style={{ "--stagger": 20} as React.CSSProperties} className="select-none flex flex-col gap-2 relative rounded-lg w-[90vw] max-w-[100vw] col-start-4 row-start-7 col-span-2 row-span-2 left-1/2 -translate-x-1/2 sm:w-[568px] sm:left-[80px] sm:translate-x-0 bottom-[520px] shadow-lg h-fit">
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

            <div style={{ "--stagger": 9 } as React.CSSProperties} className="select-none relative col-start-3 row-start-2 w-[360px] h-[360px] right-[320px] top-[200px] rotate-[-2deg]" data-no-drag>
              <TurbulenceCanvas
                ref={turbulenceRef}
                className="!rounded-2xl bg-white cursor-pointer"
                style={{ animation: 'wiggle 0.07s ease infinite' }}
              />
            </div>

            <svg style={{ "--stagger": 40} as React.CSSProperties} className="select-none border-white border-4 rounded-lg relative row-start-5 col-start-8 top-[140px] left-[140px]" xmlns="http://www.w3.org/2000/svg" fill="none" width="100" height="100" viewBox="0 0 512 512" >
              <rect className="rounded-lg" fill="#3178c6" height="512" width="512" />
              <path clipRule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fillRule="evenodd" />
            </svg>


            <svg style={{ "--stagger": 15} as React.CSSProperties} className="select-none relative left-[140px] col-start-7 row-start-7 top-[200px] border-4 border-white rounded-lg" width="127" height="57" viewBox="0 0 138 57" aria-label="MDX" role="img">
              <rect height="55.5" rx="4.5" width="136.5" x=".75" y=".75"></rect>
              <g fill="none" stroke="#fff" strokeWidth="6">
                <path d="M16.5 44V19L30.25 32.75l14-14v25"></path>
                <path d="M70.5 40V10.75"></path>
                <path d="M57 27.25L70.5 40.75l13.5-13.5"></path>
                <path d="M122.5 41.24L93.25 12M93.5 41.25L122.75 12">
                </path>
              </g>
            </svg>


            <div style={{ "--stagger": 12 } as React.CSSProperties} className="select-none col-start-7 col-span-2 h-fit row-start-5 w-[360px] flex rotate-[4deg]">
              <div className="w-[600px] h-[200px] flex items-center justify-center">
                <div className='relative flex items-center justify-center gap-8 w-full h-full p-8 rounded-lg overflow-hidden'>
                  <Clock></Clock>
                </div>
              </div>
            </div>

            {homeAssets.books.map((book) => (
              <div
                key={book.id}
                style={{ "--stagger": book.stagger } as React.CSSProperties}
                className={book.className}
              >
                <Book
                  href={book.imageUrl}
                  imageUrl={book.imageUrl}
                  width={book.width}
                  height={book.height}
                  backCoverColor={book.backCoverColor}
                  title={book.title}
                />
              </div>
            ))}

            {homeAssets.albums.map((album) => (
              <div
                key={album.id}
                style={{ "--stagger": album.stagger } as React.CSSProperties}
                className={album.className}
              >
                <Album
                  albumCover={album.albumCover}
                  albumTitle={album.albumTitle}
                  artist={album.artist}
                  musicFile={album.musicFile}
                  size={album.size as "md"}
                />
              </div>
            ))}


          </div>

        </DraggableWrapper>
      </div>
    </main >

  );
}
