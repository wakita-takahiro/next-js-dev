"use client";
import { useRouter } from "next/navigation";
import styles from "./header.module.scss";

export const Header = () => {
  const router = useRouter();

  return (
    <div className="headerArea">
      <h1 className="headerText" onClick={() => router.push("/")}>
        Next.js Header
      </h1>
    </div>
  );
}