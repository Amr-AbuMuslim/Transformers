interface PageHeaderProps {
  title: string;
  image: string;
  position?: "center" | "left" | "right" | "top" | "bottom";
}

export function PageHeader({
  title,
  image,
  position = "center",
}: PageHeaderProps) {
  return (
    <section className="relative h-80 flex items-center justify-center overflow-hidden">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover object-${position}`}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
