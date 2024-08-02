import Header from "@/components/header";
import Watch from "@/components/watch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Header />
      <Watch />
    </div>
  );
}
