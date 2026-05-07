import logo_png from '../assets/logo.png';
export function Logo() {
  return (
    <div className="flex items-center group">
      <img 
        src={logo_png} 
        alt="SeeYourMenu Logo" 
        className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform origin-left"
      />
    </div>
  );
}
