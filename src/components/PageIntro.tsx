type PageIntroProps = {
  title: string;
  enTitle: string;
  description: string;
};

export function PageIntro({ title, enTitle, description }: PageIntroProps) {
  return (
    <section className="bg-[#f9f7f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
        <p className="mb-3 text-xs tracking-[0.25em] text-[#8b7355]">{enTitle}</p>
        <h1 className="font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] text-[#333333]">{title}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#555555] md:text-[15px]">
          {description}
        </p>
      </div>
    </section>
  );
}
