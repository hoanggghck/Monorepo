'use client'
import { IconMenu, IconX } from "@repo/icons";
import Link from "next/link";
import { useState } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="grid grid-cols-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
