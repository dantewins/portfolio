import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { ArrowRight, Play } from 'lucide-react';

const projects = [
  {
    title: "Swordle",
    desc: "A Wordle-style SAT vocab game with solo play and real-time multiplayer, built with Next.js and Supabase.",
    repo: "https://github.com/dantewins/swordle",
  },
  {
    title: "Huracan",
    desc: "An AI post-hurricane inspection app that analyzes damage photos and provides repair guidance with location-based context.",
    repo: "https://github.com/dantewins/huracan",
  },
  {
    title: "Bunni",
    desc: "A Notion-powered planner that syncs assignments into a clean weekly/monthly calendar using Next.js and Supabase.",
    repo: "https://github.com/dantewins/bunni",
  },
  {
    title: "Expounder",
    desc: "An AI dashboard that explores GitHub repos and generates polished READMEs, with optional Dropbox export.",
    repo: "https://github.com/dantewins/expounder",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen antialiased">
      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-7 lg:space-y-7 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-900">
              Hello! My <span className="font-light font-[merriweather] lg:italic non-italic">name is </span> <span className="font-medium">Danny</span>.
            </h1>
            <p className="text-lg md:text-xl text-zinc-800 font-[raleway] max-w-xl mx-auto lg:mx-0">
              I am a current <b>junior</b> in high school, attending <i>Pembroke Pines Charter High School.</i> With my <b>fervent</b> love for code, I build <u className=' underline-offset-6'>clean</u>, <u className='underline-offset-4 decoration-wavy'>performant</u> <b>experiences</b> with modern tools like <i className='font-[merriweather] font-light'>Next.js, TypeScript, and Tailwind.</i>
            </p>
            <div className="pt-2 lg:pt-5">
              <Button
                variant="default"
                className="group text-md sm:text-lg h-[42] transition ease-in-out duration-500 hover:cursor-pointer"
              >
                All case studies{" "}
                <ArrowRight
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  className="transition-transform duration-1000 ease-in-out transform group-hover:rotate-[360deg]"
                />
              </Button>
            </div>
          </div>
          <div className="pt-6 lg:pt-0 flex-1 flex justify-center lg:justify-end">
            <Image
              src="/hero.svg"
              alt="hero illustration"
              className="max-w-full h-auto rounded-xl object-contain w-[325px] sm:w-[400px] lg:w-[450px]"
              width={450}
              height={350}
            />
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-20 lg:py-32">
          <div className="items-center">
            <div className="space-y-4">
              <h6 className="text-2xl sm:text-3xl text-zinc-700 leading-relaxed font-[raleway]">
                A <b className="font-medium"> picture</b> is worth a <i className='font-[merriweather]'>thousand</i> words.
              </h6>
            </div>
            <div
              className="relative w-full overflow-hidden rounded-xl cursor-pointer bg-gray-300 h-[350px] md:h-[400px] lg:h-[500px] transition-all ease-in-out duration-300 group has-[:hover]:scale-103 pointer-events-none mt-2 md:mt-4 lg:mt-6 hover:opacity-95"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                <button className="p-4 lg:p-5 text-white bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 focus:outline-none hover:cursor-pointer transition-all ease-in-out duration-300 hover:p-5 lg:hover:p-6 pointer-events-auto">
                  <Play className="w-8 h-8 lg:w-9 lg:h-9 group-hover:h-9 group-hover:w-9 lg:group-hover:w-10 lg:group-hover:h-10 transition-all ease-in-out duration-300" fill="white" strokeWidth={0} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="space-y-4">
              <h6 className="text-2xl sm:text-3xl text-zinc-700 leading-relaxed font-[raleway]">
                <span className='font-[merriweather] underline underline-offset-3 decoration-wavy'>Stress</span> makes me feel <i className='font-medium'>alive</i>
              </h6>
            </div>
          </div>
          <div className="mt-2 md:mt-4 lg:mt-6 grid md:grid-cols-1 gap-4">
            {projects.map((project, i) => {
              return (
                <Card
                  key={i}
                  className="group overflow-hidden border-none shadow-none transition bg-zinc-100 rounded-xl hover:cursor-pointer"
                >
                  <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                    <CardHeader className="text-zinc-900 mt-2 sm:my-2 ml-0 sm:ml-1">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl md:text-3xl font-medium flex items-center font-[poppins] tracking-tighter">
                          {project.title}
                        </span>
                        <ArrowRight className="transition-transform duration-1000 ease-in-out transform group-hover:rotate-[360deg] mr-2 md:h-[2.1rem] md:w-[2.1rem] h-[1.8rem] w-[1.8rem]" />
                      </div>
                      <div className="grid grid-cols-7">
                        <span className="text-lg md:text-xl font-[poppins] font-normal mt-1 md:mt-2 text-zinc-500 tracking-tight col-span-6 md:col-span-5">
                          {project.desc}
                        </span>
                      </div>
                    </CardHeader>
                  </Link>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}