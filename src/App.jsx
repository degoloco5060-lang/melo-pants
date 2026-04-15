export default function MeloPantsSite() {
  const products = [
    {
      title: 'Calça Country Tradicional',
      desc: 'Jeans resistente, caimento firme e visual bruto para o dia a dia.',
      price: 'A partir de R$ 139,90',
    },
    {
      title: 'Calça Country Premium',
      desc: 'Acabamento superior, lavagem marcante e conforto para usar com bota.',
      price: 'A partir de R$ 179,90',
    },
    {
      title: 'Camisa Xadrez Masculina',
      desc: 'Estilo autêntico do interior com toque moderno para compor o visual.',
      price: 'A partir de R$ 89,90',
    },
  ];

  const benefits = [
    'Estilo country de verdade',
    'Preço justo para sua cidade',
    'Peças pensadas para conforto e durabilidade',
    'Atendimento direto no WhatsApp',
  ];

  return (
    <div className="min-h-screen bg-[#f6efe6] text-[#2f241c]">
      <header className="border-b border-[#d8c3aa] bg-[#2b1f17] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black tracking-[0.2em] uppercase">Melo Pants</h1>
            <p className="text-sm text-[#d9c2a3]">Moda country masculina</p>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#inicio" className="hover:text-[#e7c79a]">Início</a>
            <a href="#produtos" className="hover:text-[#e7c79a]">Produtos</a>
            <a href="#sobre" className="hover:text-[#e7c79a]">Sobre</a>
            <a href="#contato" className="hover:text-[#e7c79a]">Contato</a>
          </nav>
        </div>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden bg-[linear-gradient(135deg,#2b1f17_0%,#5b3c27_55%,#8a5b37_100%)] text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 inline-block rounded-full border border-[#c8a27a] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#f0d0a8]">
              Estilo bruto de verdade
            </p>
            <h2 className="max-w-xl text-4xl font-black leading-tight md:text-6xl">
              Calças country masculinas com presença, conforto e preço justo.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#f3e6d6] md:text-lg">
              Uma loja feita para quem gosta de se vestir bem no interior, sem abrir mão da resistência,
              do caimento e da identidade country raiz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#produtos"
                className="rounded-2xl bg-[#f2d1a7] px-6 py-3 font-bold text-[#2b1f17] shadow-lg transition hover:scale-[1.02]"
              >
                Ver produtos
              </a>
              <a
                href="#contato"
                className="rounded-2xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[1.5rem] bg-[#f7efe5] p-5 text-[#2f241c]">
                <div className="mb-4 rounded-2xl bg-[#d8c0a6] p-8 text-center shadow-inner">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#6a4b32]">Lançamento</p>
                  <h3 className="mt-2 text-2xl font-black">Nova Linha Country</h3>
                  <p className="mt-2 text-sm text-[#5c4636]">
                    Visual forte, jeans encorpado e combinação perfeita com bota.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 shadow">
                    <p className="text-sm text-[#8a5b37]">Destaque</p>
                    <p className="font-bold">Calça escura premium</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow">
                    <p className="text-sm text-[#8a5b37]">Qualidade</p>
                    <p className="font-bold">Jeans grosso e resistente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4">
          {benefits.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-[#dcc6ae] bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#8a5b37]">Melo Pants</p>
              <h3 className="mt-2 text-lg font-bold leading-snug">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="produtos" className="bg-[#efe3d3] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5b37]">Produtos</p>
              <h2 className="text-3xl font-black md:text-4xl">Peças com identidade country</h2>
            </div>
            <p className="max-w-xl text-[#5c4636]">
              Modelos pensados para quem busca presença, conforto e autenticidade no jeito de vestir.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div key={product.title} className="rounded-[2rem] bg-white p-6 shadow-md">
                <div className="mb-5 h-48 rounded-[1.5rem] bg-[linear-gradient(135deg,#caa47e_0%,#8a5b37_100%)]" />
                <h3 className="text-xl font-black">{product.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5c4636]">{product.desc}</p>
                <p className="mt-4 text-lg font-bold text-[#8a5b37]">{product.price}</p>
                <button className="mt-5 w-full rounded-2xl bg-[#2b1f17] px-4 py-3 font-bold text-white transition hover:opacity-95">
                  Tenho interesse
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="rounded-[2rem] bg-[#2b1f17] p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d9c2a3]">Sobre a marca</p>
            <h2 className="mt-3 text-3xl font-black">Uma proposta feita para o público do interior.</h2>
            <p className="mt-4 leading-7 text-[#f3e6d6]">
              A Melo Pants nasce com a proposta de entregar roupa masculina country com visual forte,
              acabamento bonito e preço acessível. A ideia é unir o estilo bruto do campo com uma
              apresentação moderna e confiável.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-black">Por que escolher a Melo Pants?</h3>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-[#dcc6ae] bg-white p-5 shadow-sm">
                <p className="font-bold">Visual que chama atenção</p>
                <p className="mt-1 text-sm leading-6 text-[#5c4636]">
                  Peças com identidade marcante para gerar presença e confiança no visual.
                </p>
              </div>
              <div className="rounded-2xl border border-[#dcc6ae] bg-white p-5 shadow-sm">
                <p className="font-bold">Preço bom e justo</p>
                <p className="mt-1 text-sm leading-6 text-[#5c4636]">
                  Foco em vender bem para a realidade da cidade, sem afastar o cliente pelo valor.
                </p>
              </div>
              <div className="rounded-2xl border border-[#dcc6ae] bg-white p-5 shadow-sm">
                <p className="font-bold">Facilidade no atendimento</p>
                <p className="mt-1 text-sm leading-6 text-[#5c4636]">
                  Contato rápido, apresentação clara dos produtos e atendimento direto para fechar venda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#2b1f17] py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d9c2a3]">Contato</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Pronto para divulgar sua loja e vender mais?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#f3e6d6]">
            Use esta página como vitrine digital da sua marca. Você pode adaptar os preços, incluir fotos
            reais das peças e colocar seu número de WhatsApp para atendimento.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5567998382835?text=Tenho%20interesse!%20Ainda%20est%C3%A1%20dispon%C3%ADvel%3F%3F"
              className="rounded-2xl bg-[#f2d1a7] px-6 py-3 font-bold text-[#2b1f17]"
            >
              Chamar no WhatsApp
            </a>
            <a
              href="#inicio"
              className="rounded-2xl border border-white/30 px-6 py-3 font-bold text-white"
            >
              Voltar ao topo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
