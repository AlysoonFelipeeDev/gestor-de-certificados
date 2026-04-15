export default function Home() {
  return (
    <main className="app-layout">
      <section className="app-section app-section--dashboard" aria-label="Tela dashboard">
        <header className="topbar">
          <button className="topbar__icon-button" type="button" aria-label="Abrir menu">
            ☰
          </button>
          <h1 className="topbar__title">Dashboard</h1>
          <button className="topbar__icon-button" type="button" aria-label="Notificações">
            🔔
          </button>
        </header>

        <section className="summary" aria-label="Resumo do dia">
          <h2 className="summary__title">Resumo último sábado (05/04)</h2>

          <article className="card card--highlight">
            <p className="card__label">Total vendido</p>
            <p className="card__value card__value--accent">R$ 1.200,00</p>
          </article>

          <section className="summary__row" aria-label="Indicadores financeiros">
            <article className="card card--success">
              <p className="card__label">Comissão</p>
              <p className="card__value card__value--accent">120,00 R$</p>
            </article>

            <article className="card">
              <p className="card__label">A depositar</p>
              <p className="card__value">R$ 80,00</p>
            </article>

            <article className="card">
              <p className="card__label">A depositar</p>
              <p className="card__value">1,080.00 R$</p>
            </article>
          </section>
        </section>

        <section className="action" aria-label="Ação principal">
          <button className="action__button" type="button">
            Iniciar rota de hoje
          </button>
        </section>
      </section>

      <section className="app-section app-section--route" aria-label="Tela rota ativa">
        <header className="topbar">
          <button className="topbar__icon-button" type="button" aria-label="Voltar">
            ←
          </button>
          <h2 className="topbar__title">Rota Ativa</h2>
          <button className="topbar__icon-button" type="button" aria-label="Informações">
            ⓘ
          </button>
        </header>

        <section className="route" aria-label="Conteúdo da rota">
          <article className="selector" aria-label="Selecionar rota">
            <p className="selector__text">Rota: Centro</p>
            <span className="selector__icon">⌄</span>
          </article>

          <article className="client-card client-card--closed">
            <header className="client-card__header">
              <p className="client-card__name">Bar do Zé</p>
              <span className="client-card__badge">Vendido</span>
            </header>
            <p className="client-card__meta">Vendas: 50 / Sobras: 10</p>
          </article>

          <article className="client-card client-card--open">
            <header className="client-card__header">
              <p className="client-card__name">Padaria Central</p>
              <button className="client-card__add-button" type="button" aria-label="Adicionar venda">
                +
              </button>
            </header>

            <section className="counter" aria-label="Formulário de vendas">
              <header className="counter__header">
                <p className="counter__label">Vendidas</p>
                <p className="counter__label">Sobras</p>
              </header>

              <div className="counter__values">
                <p className="counter__value">0</p>
                <p className="counter__value">0</p>
              </div>

              <div className="counter__actions">
                <button className="counter__button" type="button">
                  +1
                </button>
                <button className="counter__button counter__button--muted" type="button">
                  -1
                </button>
                <button className="counter__button" type="button">
                  +10
                </button>
                <button className="counter__button counter__button--muted" type="button">
                  -10
                </button>
              </div>
            </section>
          </article>
        </section>
      </section>

      <footer className="bottom-nav" aria-label="Navegação principal">
        <button className="bottom-nav__item bottom-nav__item--active" type="button">
          Resumo
        </button>
        <button className="bottom-nav__item" type="button">
          Rota
        </button>
        <button className="bottom-nav__item" type="button">
          Config
        </button>
      </footer>
    </main>
  );
}
