import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle, Globe, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Our Story
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Founded in 2010, Acme Inc has been at the forefront of
                    innovation, creating solutions that transform how businesses
                    operate in the digital age.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Our Services</Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Company office"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Our Mission
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We're on a mission to empower businesses with innovative
                  technology solutions that drive growth and create meaningful
                  impact.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <CheckCircle className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Excellence</h3>
                    <p className="text-muted-foreground">
                      We strive for excellence in everything we do, from product
                      development to customer service.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <Heart className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Passion</h3>
                    <p className="text-muted-foreground">
                      Our passion for innovation drives us to create solutions
                      that exceed expectations.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <Users className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Collaboration</h3>
                    <p className="text-muted-foreground">
                      We believe in the power of collaboration to solve complex
                      problems and drive success.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Meet Our Team
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our talented team of experts is dedicated to delivering
                  exceptional results for our clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {[
                {
                  name: "Alex Johnson",
                  role: "CEO & Founder",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Sarah Williams",
                  role: "CTO",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Michael Chen",
                  role: "Design Director",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Marketing Lead",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "David Kim",
                  role: "Lead Developer",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Jessica Patel",
                  role: "Customer Success",
                  image: "/placeholder.svg?height=400&width=400",
                },
              ].map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center">
                      <div className="w-full">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="aspect-square w-full object-cover"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join Our Journey
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                We're always looking for talented individuals to join our team.
                Check out our current openings and apply today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button size="lg">
                View Careers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Our Achievements
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Over the years, we've achieved significant milestones and
                  received recognition for our work.
                </p>
                <ul className="grid gap-4">
                  {[
                    "Recognized as a top innovator in our industry for 5 consecutive years",
                    "Successfully completed over 500 projects for clients worldwide",
                    "Expanded our team to 100+ talented professionals across 3 continents",
                    "Developed proprietary technology that has transformed our clients' operations",
                  ].map((achievement, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {[
                  {
                    stat: "500+",
                    label: "Projects Completed",
                  },
                  {
                    stat: "100+",
                    label: "Team Members",
                  },
                  {
                    stat: "50+",
                    label: "Countries Served",
                  },
                  {
                    stat: "10+",
                    label: "Years of Excellence",
                  },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center justify-center space-y-2 text-center">
                        <span className="text-4xl font-bold">{item.stat}</span>
                        <span className="text-sm text-muted-foreground">
                          {item.label}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
