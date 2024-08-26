'use client';
import './style.css'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from 'react';

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" }
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [input, setInput] = useState("");
  const pathName = usePathname();


  return (
    <>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='border p-2'/>
      </div>
      {
        navLinks.map((link) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
              {link.name}
            </Link>
          )
        })
      }

      {children}
    </>
  )
}


/**
 * 
 * 
 * A példában, amit megosztottál, a useState hookot használod egy input értékének nyomon követésére. Amikor a 
 * layout.tsx fájlt használod a navigáció során, a state megmarad, de amikor a template.tsx fájlon keresztül navigálsz, 
 * a state elveszik. Ez az eltérés abból adódik, ahogyan 
 * a layout és a template komponensek kezelik az állapotot és a komponensek újrarenderelését.

Miért marad meg a state a layout.tsx használatával?
A layout.tsx fájlok perzisztens komponensek, ami azt jelenti, hogy amikor navigálsz 
az oldalak között az adott layout alatt, akkor a layout komponens újra felhasználásra kerül,
 és nem renderelődik újra teljesen. Ezért a state, amit a layout.tsx-ben definiálsz, megmarad, 
 mert a komponens nem kerül újralétrehozásra, csak az alatta lévő gyermek komponensek változnak.

Miért veszik el a state a template.tsx használatával?
A template.tsx fájlok dinamikus komponensek, amelyeket minden alkalommal újrarenderel a Next.js,
 amikor navigálsz az útvonalak között, amelyekhez a template tartozik. Ez azt jelenti, hogy amikor a
  template.tsx-en keresztül navigálsz, a komponens újra inicializálódik,
   és ezzel együtt minden state is újrainicializálódik, így elveszik az előző állapot.
 */