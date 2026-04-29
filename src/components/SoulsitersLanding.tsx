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

          {/* Premium Social Icons Row */}
          <div
            className="animate-fade-in-up grid grid-cols-4 gap-3 sm:gap-4 py-2"
            style={{ animationDelay: '0.85s' }}
          >
            {[
              {
                name: 'Instagram',
                href: 'https://www.instagram.com/soulsistersskincare/',
                Icon: Instagram,
                gradient: 'from-[#feda75] via-[#fa7e1e] via-40% to-[#d62976]',
                ring: 'group-hover:shadow-[0_8px_30px_-5px_rgba(214,41,118,0.6)]',
              },
              {
                name: 'Facebook',
                href: 'https://www.facebook.com/soulsistersskincare',
                Icon: Facebook,
                gradient: 'from-[#0866ff] to-[#1877f2]',
                ring: 'group-hover:shadow-[0_8px_30px_-5px_rgba(24,119,242,0.6)]',
              },
              {
                name: 'TikTok',
                href: 'https://www.tiktok.com/@soulsistersskincare',
                Icon: FaTiktok,
                gradient: 'from-[#25F4EE] via-[#1a1a1a] to-[#FE2C55]',
                ring: 'group-hover:shadow-[0_8px_30px_-5px_rgba(254,44,85,0.6)]',
              },
              {
                name: 'YouTube',
                href: 'https://www.youtube.com/@soulsistersskincare',
                Icon: Youtube,
                gradient: 'from-[#ff0000] to-[#cc0000]',
                ring: 'group-hover:shadow-[0_8px_30px_-5px_rgba(255,0,0,0.55)]',
              },
            ].map(({ name, href, Icon, gradient, ring }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className={`group relative flex aspect-square items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:border-white/40 ${ring}`}
              >
                {/* Gradient brand fill on hover */}
                <span
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                {/* Subtle inner highlight */}
                <span className="absolute inset-x-2 top-1 h-1/3 rounded-t-xl bg-gradient-to-b from-white/25 to-transparent opacity-70" />
                <Icon className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 text-foreground transition-all duration-500 group-hover:text-white group-hover:scale-110 drop-shadow-sm" />
                <span className="sr-only">{name}</span>
              </a>
            ))}
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