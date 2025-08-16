import { Button } from "@/components/ui/button";
import { Instagram, Globe, Facebook, Youtube ,} from "lucide-react";
import heartBackground from "@/assets/heart-background.jpg";
import { FaPinterest, FaTiktok } from "react-icons/fa";
import logo from "@/assets/logo.png";


const SoulsistersLanding = () => {
  return (
    <div 
      className="min-h-screen bg-gradient-background relative overflow-hidden font-montserrat"
      style={{
        backgroundImage: `url(${heartBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}

      
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]" />
      
      <div className="relative z-10 container max-w-2xl mx-auto px-6 py-12">
        {/* Google Review Button - Top Priority */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Button 
            asChild 
            variant="gradient" 
            size="lg" 
            className="w-full text-base font-semibold tracking-wide"
          >
            <a 
              href="https://www.google.com/maps/place/SOULSISTERS+SKINCARE/@33.3191011,-7.8301925,17z/data=!3m1!4b1!4m6!3m5!1s0xda89dcfcc74f235:0xed722d42bad221a5!8m2!3d33.3191011!4d-7.8301925!16s%2Fg%2F11xf9zt2tb?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank"
              rel="noopener noreferrer"
            >
              ⭐ LAISSER UN AVIS SUR GOOGLE ⭐
            </a>
          </Button>
        </div>

        {/* Logo Section */}
<div className="text-center mb-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
  <div className="relative inline-block group">
    {/* Background glow ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 animate-rotate-slow scale-110" />
    
    {/* Main logo with complex animations wrapped in a link */}
    <a href="https://soulsistersskincare.ma" target="_blank" rel="noopener noreferrer">
      <img 
        src={logo} 
        alt="Soulsisters Skincare Logo" 
        className="w-32 h-32 rounded-full mx-auto relative z-10 shadow-elegant transition-all duration-700 
                   animate-float-complex animate-glow-pulse
                   group-hover:scale-110 group-hover:shadow-glow 
                   cursor-pointer"
      />
    </a>
    
    {/* Shimmer overlay effect */}
    <div className="absolute inset-0 rounded-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer-logo w-8 h-full" />
    </div>
    
    {/* Rotating border effect */}
    <div className="absolute inset-0 rounded-full border-2 border-primary-glow/40 animate-rotate-slow scale-105" />
    <div className="absolute inset-0 rounded-full border border-primary/20 animate-bounce-gentle scale-110" />
  </div>
</div>


        {/* Brand Info */}
        <div className="text-center mb-12 space-y-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h1 className="text-2xl font-bold text-foreground tracking-wide">
            SOULSISTERS SKINCARE
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            
            <span className="text-lg font-medium">@soulsistersskincare</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          {/* Website */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Button 
              asChild 
              variant="elegant" 
              size="lg" 
              className="w-full text-base font-semibold"
            >
              <a 
                href="https://soulsistersskincare.ma" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <Globe className="w-5 h-5" />
                WEBSITE
              </a>
            </Button>
          </div>

          {/* Instagram */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              asChild 
              variant="social" 
              size="lg" 
              className="w-full text-base font-semibold"
            >
              <a 
                href="https://www.instagram.com/soulsistersskincare/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <Instagram className="w-5 h-5" />
                INSTAGRAM
              </a>
            </Button>
          </div>

          {/* Facebook */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Button 
              asChild 
              variant="social" 
              size="lg" 
              className="w-full text-base font-semibold"
            >
              <a 
                href="https://www.facebook.com/soulsistersskincare" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <Facebook className="w-5 h-5" />
                FACEBOOK
              </a>
            </Button>
          </div>

          {/* TikTok */}
          <div className="animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
            <Button 
              asChild 
              variant="social" 
              size="lg" 
              className="w-full text-base font-semibold"
            >
              <a 
                href="https://www.tiktok.com/@soulsistersskincare" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <FaTiktok className="w-5 h-5" />
                TIKTOK
              </a>
            </Button>
          </div>

          {/* YouTube */}
          <div className="animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
            <Button 
              asChild 
              variant="social" 
              size="lg" 
              className="w-full text-base font-semibold"
            >
              <a 
                href="https://www.youtube.com/@soulsistersskincare" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <Youtube className="w-5 h-5" />
                YOUTUBE
              </a>
            </Button>
          </div>

          {/* Pinterest */}
          <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <Button 
              asChild 
              variant="social" 
              size="lg" 
              className="w-full text-base font-semibold"
            >
              <a 
                href="https://www.pinterest.com/soulsistersskincare/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <FaPinterest className="w-5 h-5" />
                PINTEREST
              </a>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <p className="text-sm text-muted-foreground/70 font-medium">
            © 2025, SoulSistersSkincare. Inspirer la beauté naturelle.
          </p>
        </footer>
      </div>
    </div>

    
  );
};

export default SoulsistersLanding;