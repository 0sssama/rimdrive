import { WhatsappButton } from "@/components/atom";
import {
  Banner,
  ChooseUs,
  Collection,
  Contact,
  Footer,
  Header,
  SubBanner,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-[200vh] w-full min-w-screen m-auto">
      <WhatsappButton />
      <Header />
      <Banner />
      <Collection />
      <ChooseUs />
      <SubBanner />
      <Contact />
      <Footer />
    </main>
  );
}
