const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-display font-semibold text-foreground">Волна</span>
      <span>© {new Date().getFullYear()} Волна. Все права защищены.</span>
    </div>
  </footer>
);

export default Footer;
