import Hero from "@/components/Hero";
import FeatureRows from "@/components/FeatureRows";
import Partners from "@/components/Partners";
import Programs from "@/components/Programs";
import CommunityNiche from "@/components/CommunityNiche";
import StatsRow from "@/components/StatsRow";
import ChaptersGrid from "@/components/ChaptersGrid";
import Gallery from "@/components/Gallery";
import JoinCTA from "@/components/JoinCTA";

export default function HomePage() {
  return (
    <div className="page-home">
      <Hero />
      <FeatureRows />
      <Partners />
      <Programs />
      <CommunityNiche />
      <StatsRow />
      <ChaptersGrid />
      <Gallery />
      <JoinCTA />
    </div>
  );
}
