import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/d3ada5ea-e0f5-4112-897b-1e016cc63c53/files/d8bc7c9f-48e3-45b6-998b-a350c77d1737.jpg';

const games = [
  { name: 'Adopt Me!', emoji: '🐾', desc: 'Заводи питомцев и строй дом', color: 'from-pink-500 to-rose-500' },
  { name: 'Brookhaven', emoji: '🏙️', desc: 'Город, где можно делать что хочешь', color: 'from-cyan-400 to-blue-500' },
  { name: 'Tower of Hell', emoji: '🔥', desc: 'Паркур на скорость, кто быстрее?', color: 'from-orange-500 to-red-500' },
  { name: 'Blox Fruits', emoji: '🍊', desc: 'Сражайся и качайся на островах', color: 'from-violet-500 to-purple-600' },
  { name: 'Pet Sim 99', emoji: '🥚', desc: 'Собирай редких питомцев', color: 'from-emerald-400 to-teal-500' },
  { name: 'Murder Mystery', emoji: '🔪', desc: 'Найди убийцу раньше всех', color: 'from-fuchsia-500 to-pink-600' },
];

export default function Index() {
  const scrollToGames = () => {
    document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-sm mb-6 animate-fade-up">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-secondary animate-pulse-ring" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
            </span>
            <span className="text-sm font-semibold text-secondary">Я уже в игре, заходи!</span>
          </div>

          <h1
            className="font-display uppercase text-6xl md:text-8xl font-bold leading-[0.9] mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            <span className="block bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Го играть
            </span>
            <span className="block">в Roblox!</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: '0.25s', opacity: 0 }}
          >
            Эй, подруга! Залетай ко мне в игру — будем строить, рубиться и угарать вместе 🎮
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            <Button
              size="lg"
              onClick={scrollToGames}
              className="text-lg h-14 px-8 rounded-2xl font-bold animate-glow hover:scale-105 transition-transform"
            >
              <Icon name="Gamepad2" size={24} className="mr-2" />
              Выбрать игру
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg h-14 px-8 rounded-2xl font-bold border-secondary/50 text-secondary hover:bg-secondary/10 hover:scale-105 transition-transform"
            >
              <Icon name="Send" size={22} className="mr-2" />
              Скинуть подруге
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-muted-foreground">
          <Icon name="ChevronDown" size={32} />
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="relative py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display uppercase text-4xl md:text-6xl font-bold mb-3">
            Во что <span className="text-secondary">погоняем?</span>
          </h2>
          <p className="text-muted-foreground text-lg">Выбирай — и я закидываю ссылку 🚀</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g, i) => (
            <div
              key={g.name}
              className="group relative rounded-3xl bg-card border border-border p-6 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:border-primary/60 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
            >
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${g.color} opacity-30 blur-2xl group-hover:opacity-60 transition-opacity`}
              />
              <div className="relative">
                <div className="text-5xl mb-4">{g.emoji}</div>
                <h3 className="font-display uppercase text-2xl font-bold mb-2">{g.name}</h3>
                <p className="text-muted-foreground mb-6">{g.desc}</p>
                <Button
                  variant="ghost"
                  className="px-0 text-secondary font-bold hover:bg-transparent hover:text-primary group-hover:translate-x-1 transition-transform"
                >
                  Играем сюда
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 relative rounded-[2rem] bg-gradient-to-r from-primary/20 via-accent/15 to-secondary/20 border border-primary/30 p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.25),transparent_60%)]" />
          <div className="relative">
            <h2 className="font-display uppercase text-3xl md:text-5xl font-bold mb-4">
              Ну что, залетаешь? 💜
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Жду тебя онлайн. Жми кнопку — и погнали в приключение!
            </p>
            <Button
              size="lg"
              className="text-lg h-14 px-10 rounded-2xl font-bold animate-glow hover:scale-105 transition-transform"
            >
              <Icon name="Rocket" size={24} className="mr-2" />
              Го в игру!
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
        Сделано с 💜 для лучшей подруги
      </footer>
    </div>
  );
}