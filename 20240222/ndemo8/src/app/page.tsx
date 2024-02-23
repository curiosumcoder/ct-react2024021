import Image from "next/image";
import styles from "./page.module.css";
import Counter from "./_components/Counter";

export default function Home() {

  console.log('Cargando Home ...');

  return (
    <main>
      <h1>Nextjs App</h1>
      <Counter />
    </main>
  );
}
