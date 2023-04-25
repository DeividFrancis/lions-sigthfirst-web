import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-between items-center my-10">
      <h1 className="text-primary text-3xl font-semibold">Lions Sigth First</h1>
      <Image
        src="/icon.svg"
        alt="Miniatura de leao com pelo amarelo e pele azul"
        width={81}
        height={63}
      />
    </header>
  );
}
