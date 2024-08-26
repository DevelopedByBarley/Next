export default function Loading() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="loader"></div> {/* Ez lehet egy spinner vagy bármi más betöltési animáció */}
        <p>Loading...</p>
      </div>
    );
  }
  
  /**
   * 
   * 
   * A loading.tsx fájl a Next.js 13 és újabb verzióiban (beleértve a Next.js 14-et is) az app directory használatával kerül bevezetésre, és a betöltési állapot kezelésére szolgál az adott útvonal vagy oldal betöltésekor. Ez a fájl akkor jelenik meg, amikor az oldalt kiszolgáló adatokat vagy egyéb erőforrásokat még be kell tölteni, vagy amikor egy Suspense-be ágyazott komponens várakozik az adatok betöltésére.

Hogyan működik a loading.tsx?
Elhelyezkedés és Hierarchia:

A loading.tsx fájl az app directory alatt található útvonalak mappájában helyezkedik el. Ha például van egy app/dashboard/loading.tsx fájlod, akkor ez a fájl felelős a betöltési állapot megjelenítéséért, amikor a dashboard oldal betöltése folyamatban van.
Ez a fájl globálisan is használható, ha a legfelső szinten helyezkedik el az app directory-ban (app/loading.tsx), és minden aloldalra vonatkozik, ahol nincs külön loading.tsx meghatározva.
Renderelés és Megjelenítés:

A Next.js automatikusan megjeleníti a loading.tsx fájl tartalmát, amikor az oldal vagy komponens adatokat tölt be (Suspense blokkon belül) vagy más aszinkron művelet zajlik.
Amint az adatok betöltődtek vagy a komponens készen áll a megjelenítésre, a loading.tsx tartalma eltűnik, és az eredeti oldal/komponens jelenik meg.
   */