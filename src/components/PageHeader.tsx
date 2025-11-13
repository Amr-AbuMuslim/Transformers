interface PageHeaderProps {
  title: string;
  image: string;
}

export function PageHeader({ title, image }: PageHeaderProps) {
  return (
    <section className="relative h-80 flex items-center justify-center overflow-hidden">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
