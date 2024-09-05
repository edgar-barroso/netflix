import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-transparent text-[#414141] py-6 px-[10vw] max-md:px-[5vw]">
      <p>
        Dúvidas? Ligue para{" "}
        <Link className="underline" href={"/"}>
          {" "}
          0800 591 2876
        </Link>
      </p>
      <p>Netflix Brasil</p>
    </footer>
  );
}
