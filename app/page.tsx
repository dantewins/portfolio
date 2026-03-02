import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Play, AudioLines } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen antialiased">
      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-7 lg:space-y-7 text-center lg:text-left">
            <h1 className="text-4xl text-5xl lg:text-6xl tracking-tight text-zinc-900">
              Hello! My <span className="font-light font-[merriweather] lg:italic non-italic">name is </span> <span className="font-medium">Danny</span>.
            </h1>
            <p className="text-lg lg:text-xl text-zinc-800 font-[raleway] max-w-xl mx-auto lg:mx-0">
              I am a current <b>junior</b> in high school, attending <i>Pembroke Pines Charter High School.</i> With my <b>fervent</b> love for code, I build <u className='decoration-wavy'>clean</u>, <u>performant</u> <b>experiences</b> with modern tools like <i className='font-[merriweather] font-light'>Next.js, TypeScript, and Tailwind.</i>
            </p>
            <div className="pt-2 lg:pt-5">
              <Button
                variant="default"
                className="group text-lg h-[42] transition ease-in-out duration-500 hover:cursor-pointer"
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
              className="max-w-full h-auto rounded-xl object-contain w-[400px] lg:w-[450px]"
              width={450}
              height={350}
            />
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-20">
          <div className="items-center">
            <div className="space-y-4">
              <h6 className="text-3xl text-zinc-700 leading-relaxed font-[raleway]">
                A <b className="font-medium"> picture</b> is worth a <i className='font-[merriweather]'>thousand</i> words.
              </h6>
            </div>
            <div
              className="relative w-full overflow-hidden rounded-lg cursor-pointer bg-gray-300 h-[350px] md:h-[400px] lg:h-[500px] transition-all ease-in-out duration-300 group has-[:hover]:scale-103 pointer-events-none mt-4 md:mt-6 lg:mt-8 hover:opacity-95"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                <button className="p-4 text-white bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 focus:outline-none hover:cursor-pointer transition-all ease-in-out duration-300 hover:p-[1.2rem] pointer-events-auto">
                  <Play className="w-8 h-8 group-hover:w-9 group-hover:h-9 transition-all ease-in-out duration-300" fill="white" strokeWidth={0}  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="projects" className="py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-medium text-zinc-900 tracking-tight">Gallery</h3>
              <h6 className="text-3xl text-zinc-700 leading-relaxed font-[raleway]">
                A picture is worth thousand words.
              </h6>
            </div>
            </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Project One", desc: "A full-stack app built with Next.js, Prisma, and Tailwind. Features auth, real-time updates, and clean UI." },
              { title: "Project Two", desc: "Interactive dashboard using React, Chart.js, and Supabase. Focused on data visualization and UX." },
              { title: "Project Three", desc: "Personal finance tracker with TypeScript, Zustand, and responsive design. Mobile-first approach." },
            ].map((project, i) => (
              <Card key={i} className="group overflow-hidden shadow-sm hover:shadow-md transition">
                <CardHeader className="h-48 bg-zinc-100 flex items-center justify-center text-zinc-400">
                  <span className="text-2xl font-medium">{project.title}</span>
                </CardHeader>
                <CardContent className="p-6 space-y-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-zinc-600">{project.desc}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" asChild className="p-0 text-blue-600 hover:underline">
                    <Link href="#">Learn More →</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section> */}

      </main>

    </div>
  );
}