import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      features: [
        "Boost engagement with target responses",
        "Automate comment replies to enhance audience interaction",
        "Turn followers into customers with targeted messaging",
      ],
      cta: "Get Started",
    },
    {
      name: "Smart AI Plan",
      description: "Advanced features for power users",
      price: "$29",
      features: [
        "All features from Free Plan",
        "AI-powered response generation",
        "Advanced analytics and insights",
        "Priority customer support",
        "Custom branding options",
      ],
      cta: "Upgrade Now",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative pb-20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-white to-blue-50 font-bold text-slate-900 shadow-lg transition-transform hover:scale-105">
                  li
                </div>
                <span className="text-xl font-semibold text-white">ChatGenie</span>
              </div>
              <nav className="hidden space-x-8 text-sm font-medium text-blue-100 md:block">
                <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                <Link href="#about" className="hover:text-white transition-colors">About</Link>
              </nav>
              <Button asChild className="bg-white text-slate-900 hover:bg-blue-50 shadow-lg transition-all hover:shadow-blue-500/25">
                <Link href="/dashboard">Login</Link>
              </Button>
            </div>

            <div className="mx-auto mt-24 max-w-4xl text-center">
              <div className="mb-6 flex items-center justify-center gap-2 text-blue-300">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium">AI-Powered Instagram Growth</span>
                <Sparkles className="h-5 w-5" />
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl [text-wrap:balance]">
                Transform Your Instagram Engagement with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">ChatGenie</span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg text-blue-100">
                ChatGenie revolutionizes how you connect with your audience on
                Instagram. Automate responses and boost engagement effortlessly,
                turning interactions into valuable business opportunities.
              </p>
              <div className="mt-10 flex justify-center gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-transparent text-white shadow-lg transition-all hover:shadow-blue-500/25 hover:brightness-110"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 shadow-lg transition-all hover:bg-blue-900/20 hover:shadow-blue-400/25 bg-blue-600 text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-20 px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src="https://picsum.photos/800/1000?random=1"
                  alt="Featured Creator 1"
                  fill
                  className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              </div>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src="https://picsum.photos/800/1000?random=2"
                  alt="Featured Creator 2"
                  fill
                  className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              </div>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src="https://picsum.photos/800/1000?random=3"
                  alt="Featured Creator 3"
                  fill
                  className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              </div>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src="https://picsum.photos/800/1000?random=4"
                  alt="Featured Creator 4"
                  fill
                  className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black via-slate-900 to-background py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Choose Your Plan
            </h2>
            <p className="max-w-[600px] text-lg text-blue-100">
              Select the perfect plan to boost your Instagram engagement and grow your audience
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  index === 1 
                    ? "relative border-blue-200 bg-blue-50/50 before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-blue-500/50 before:opacity-0 before:transition-opacity hover:before:opacity-100" 
                    : "hover:border-blue-200/50"
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="ml-2 text-lg font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      index === 1 
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg hover:shadow-blue-500/25 hover:brightness-110" 
                        : "hover:bg-blue-50/5"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}