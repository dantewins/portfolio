import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen antialiased">
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-7 lg:space-y-6 text-center lg:text-left">
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

          <div className="pt-5 lg:pt-0 flex-1 flex justify-center">
            <Image
              src="/hero-illustration.png"
              alt="Illustration of Danny coding at desk"
              className="max-w-full h-auto rounded-xl shadow-lg object-contain"
              width={500}
              height={400}
            />
          </div>
        </section>
        {/* About Me */}
        <section id="about" className="py-20 border-zinc-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-zinc-900">About Me</h3>
              <p className="text-zinc-700 leading-relaxed">
                I'm a passionate developer currently focused on web technologies. I enjoy turning ideas into functional, user-friendly applications.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                In my free time, I tinker with side projects, read about system design, play around with new frameworks, and occasionally brew a perfect cup of coffee.
              </p>
              <p className="text-zinc-700 leading-relaxed font-medium">
                I'm always eager to learn and collaborate on interesting problems.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/about-illustration.png"
                alt="About illustration"
                className="max-h-80 w-auto opacity-90"
                width={320}
                height={320}
              />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 border-t border-zinc-200">
          <h3 className="text-3xl font-bold text-zinc-900 text-center mb-12">My Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Project One", desc: "A full-stack app built with Next.js, Prisma, and Tailwind. Features auth, real-time updates, and clean UI." },
              { title: "Project Two", desc: "Interactive dashboard using React, Chart.js, and Supabase. Focused on data visualization and UX." },
              { title: "Project Three", desc: "Personal finance tracker with TypeScript, Zustand, and responsive design. Mobile-first approach." },
            ].map((project, i) => (
              <Card key={i} className="group overflow-hidden shadow-sm hover:shadow-md transition">
                <CardHeader className="h-48 bg-zinc-100 flex items-center justify-center text-zinc-400">
                  {/* Replace with real project screenshots */}
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
        </section>

        {/* Resume */}
        <section id="resume" className="py-20 border-t border-zinc-200">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-zinc-900">Resume</h3>
              <div>
                <h4 className="text-xl font-semibold mb-3">Education & Experience</h4>
                <ul className="space-y-4 text-zinc-700">
                  <li>• BS in Computer Science – University XYZ, 202X</li>
                  <li>• Frontend Intern – Company ABC, 202X–202X</li>
                  <li>• Personal projects & open-source contributions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Skills & Awards</h4>
                <ul className="space-y-2 text-zinc-700">
                  <li>• JavaScript / TypeScript, React, Next.js</li>
                  <li>• Tailwind CSS, Node.js, PostgreSQL</li>
                  <li>• Git, Vercel, AWS basics</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              {/* Optional resume-related illustration */}
              <Image
                src="/resume-illustration.png" // e.g., graduation cap, briefcase
                alt="Resume illustration"
                className="max-h-64 w-auto opacity-90"
                width={256}
                height={256}
              />
              <Button variant="default" size="lg" className="bg-zinc-800 hover:bg-zinc-900" asChild>
                <a href="/your-resume.pdf" download>Download CV</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-zinc-200">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h3 className="text-3xl font-bold text-zinc-900">Get In Touch</h3>
            <p className="text-lg text-zinc-600">
              Feel free to reach out for collaborations, questions, or just to say hi!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-left">
              <div className="space-y-4 flex-1">
                <p className="font-medium">Connect:</p>
                <ul className="space-y-2 text-zinc-700">
                  <li>📧 Email: hello@danny.dev</li>
                  <li>🔗 LinkedIn: linkedin.com/in/yourprofile</li>
                  <li>🐦 X/Twitter: @yourhandle</li>
                </ul>
              </div>

              <form className="flex-1 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Your Message" rows={4} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-200">
        © {new Date().getFullYear()} Danny · All Rights Reserved
      </footer>
    </div>
  );
}