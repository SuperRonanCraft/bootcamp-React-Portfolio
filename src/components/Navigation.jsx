import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import NavItem from './NavItem';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const navlinks = [
  { title: 'Portfolio', link: '/' },
  { title: 'Contact', link: '/contact' },
  { title: 'Resume', link: '/resume' },
];

function Navigation() {
  const [sheetOpen, setSheetOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setSheetOpen(false);
  }, [location]);

  return (
    <div>
      <nav className="hidden flex-col font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {navlinks.map((item) => (
          <NavItem key={item.link} {...item} />
        ))}
      </nav>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            {navlinks.map((item) => (
              <NavItem key={item.link} {...item} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Navigation;
