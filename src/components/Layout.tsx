
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Menu,
  X,
  LogOut,
  User,
  Home,
  BarChart3,
  Info,
  LogIn,
  UserPlus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "About", href: "/about", icon: Info },
  ];

  const userInitials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m18 0v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7m18 0-9 6-9-6" />
                  </svg>
                </div>
                <span className="font-bold text-lg">AirAware</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors flex items-center gap-1",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </div>

            {/* User Menu (Desktop) */}
            <div className="hidden md:flex md:items-center">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{userInitials}</AvatarFallback>
                      </Avatar>
                      <span className="hidden sm:block">{user?.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center gap-4">
                  <Link to="/login">
                    <Button variant="ghost">
                      <LogIn className="mr-2 h-4 w-4" /> Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button>
                      <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2",
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-gray-600 hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center px-3 py-2">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarFallback>{userInitials}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user?.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={logout}
                      className="w-full justify-start px-3 py-2"
                    >
                      <LogOut className="h-5 w-5 mr-2" />
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-primary/5 hover:text-primary flex items-center gap-2"
                    >
                      <LogIn className="h-5 w-5" />
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-primary/5 hover:text-primary flex items-center gap-2"
                    >
                      <UserPlus className="h-5 w-5" />
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center md:flex md:justify-between md:text-left">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m18 0v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7m18 0-9 6-9-6" />
                  </svg>
                </div>
                <p className="font-medium">AirAware</p>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Advanced air quality prediction using AI technology.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} AirAware. Final Year Project.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
