import Head from "next/head";
import Script from 'next/script'
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="flex w-screen  justify-end items-center h-screen">
          <div className=" border rounded-lg bg-yellow-100 border-black p-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200 duration-300">
            <div className=" ">
              <img
                src="https://media.istockphoto.com/id/535695503/photo/pakistan-monument-islamabad.jpg?s=612x612&w=0&k=20&c=bNqjdf8L-5igcRB89DdMgx0kNOmyeo1J_zzXmoxxl8w="
                className=" h-[200px]"
              ></img>
            </div>
            <h1 className=" text-2xl font-bold">Hello</h1>
            <p>Click Me!</p>
          </div>
        </div>
      </main>
    </>
  );
}
