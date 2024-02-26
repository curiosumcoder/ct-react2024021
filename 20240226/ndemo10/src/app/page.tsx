//export const dynamic = 'force-static'
import Image from "next/image";
import styles from "./page.module.css";
import GetPlatformDemo from "./_components/GetPlatformDemo";

export default function Home() {
  const fe = () => {throw new Error("Not implemented.") };
  //fe();

  return (
    <main>
      <h1>DEMO</h1>
      <GetPlatformDemo />
      {(new Date().toLocaleTimeString())}
    </main>
  );
}
