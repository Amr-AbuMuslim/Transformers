import Image from "next/image"

export function PageHeader({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative h-64 md:h-80 overflow-hidden">
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover w-full h-full" priority />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white text-center px-4">{title}</h1>
      </div>
    </div>
  )
}
