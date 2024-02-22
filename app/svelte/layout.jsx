import Link from "next/link";


export default function SvelteBLayout({ children }) {
    return (
        <main>
            <div className="min-h-screen text- fixed right-0 flex flex-col p-10 bg-neutral-900">
                <Link href={'/sveltefronted'}>about</Link>
                <Link href={'/sveltefronted/second'}>second</Link>
            </div>
            <div>
                {children}
            </div>
        </main>
    );
}
