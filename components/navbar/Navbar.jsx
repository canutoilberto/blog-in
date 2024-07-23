import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="w-full px-4 py-4 bg-white border-b">
      <header className="flex items-center justify-between max-w-[1400px] mx-auto">
        <div className="flex items-center space-x-4">
          {/*TODO: Inserir logomarca no lugar do Buletin */}
          <h1 className="text-2xl font-bold text-red-600">Buletin</h1>
          <nav className="hidden space-x-4 md:flex">
            <a href="#" className="text-gray-600">
              Início
            </a>
            <a href="#" className="text-gray-600">
              Blog
            </a>
            <a href="#" className="text-gray-600">
              Quem somos
            </a>
            <a href="#" className="text-gray-600">
              Contato
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="text-gray-600 border-none bg-transparent"
          >
            Escreva
          </Button>
          <Avatar>
            <AvatarImage src="/person_1.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
