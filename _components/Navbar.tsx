import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex px-5 items-center justify-between p-5">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-blue-500 text-3xl font-semibold">Tech Blog</h1>
        </Link>
      </div>
      <div className="flex itre justify-center gap-5">
        <div className="flex items-center gap-5">
          <Link href="/">
            <h1 className="">Home</h1>
          </Link>
          <Link href="/dashboard">
            <h1 className="">Dashboard</h1>
          </Link>
        </div>
        <div>
          <Link href="/">
            <Button variant="outline">戻る</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
