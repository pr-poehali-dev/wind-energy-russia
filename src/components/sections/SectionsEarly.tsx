import Icon from "@/components/ui/icon";
import { StatCard, SectionTitle, BarChart } from "@/components/DocUI";

export function SectionIntro() {
  return (
    <section id="intro" className="section-enter mb-24">
      <SectionTitle num="01" title="Введение" />
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-4" style={{ color: "hsl(var(--doc-dark))", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
          Ветроэнергетика<br />в России
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "hsl(var(--doc-muted))" }}>
          Исследование структуры электроэнергетики России и роли ветровых источников в современной энергосистеме страны.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <StatCard value="1 155" unit="млрд кВт·ч" label="Выработка электроэнергии в 2023 г." />
        <StatCard value="2,6" unit="%" label="Доля ВИЭ в общей генерации" />
        <StatCard value="4-е" label="Место по запасам природного газа" />
      </div>

      <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(var(--foreground))" }}>
        Энергетические системы — фундамент промышленного развития любой страны. Россия располагает мощной
        диверсифицированной энергосистемой, опирающейся преимущественно на ископаемые виды топлива. Переход на
        возобновляемые источники энергии (ВИЭ) является глобальной тенденцией, однако в российских условиях этот
        процесс имеет существенную специфику.
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>
        Ветровая энергия — один из наиболее перспективных ВИЭ в мире. Данное исследование анализирует
        текущее состояние ветроэнергетики в России, выявляет причины её слабого развития и сравнивает с лидерами
        отрасли — Данией и Германией.
      </p>
    </section>
  );
}

export function SectionSystem() {
  return (
    <section id="system" className="section-enter mb-24">
      <SectionTitle num="02" title="Энергетическая система России: структура и особенности" />

      <p className="text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--foreground))" }}>
        Единая энергетическая система (ЕЭС) России — крупнейшая в мире по охватываемой территории. Она объединяет
        генерирующие мощности, системы передачи и распределения электроэнергии в единое технологическое целое,
        обеспечивая электроснабжение 11 часовых поясов.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <StatCard value="245" unit="ГВт" label="Установленная мощность ЕЭС" />
        <StatCard value="2,5 млн" unit="км" label="Протяжённость линий электропередачи" />
        <StatCard value="~80" unit="млн" label="Потребителей электроэнергии" />
      </div>

      <div className="mb-8">
        <p className="text-xs mono mb-4" style={{ color: "hsl(var(--doc-muted))" }}>Структура генерации электроэнергии в РФ (2023), %</p>
        <BarChart data={[
          { label: "ТЭС (тепловые)", value: 62 },
          { label: "ГЭС (гидро)", value: 20, color: "hsl(197, 80%, 40%)" },
          { label: "АЭС (атомные)", value: 16, color: "hsl(28, 80%, 45%)" },
          { label: "ВИЭ (прочие)", value: 2, color: "hsl(145, 60%, 42%)" },
        ]} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          { icon: "Zap", title: "ТЭС — Тепловые электростанции", color: "hsl(var(--doc-accent))", text: "Основа российской энергетики. Работают на природном газе (≈70%), угле и мазуте. Установленная мощность — около 165 ГВт. Крупнейшие — Сургутская ГРЭС-2 (5,6 ГВт) и Рефтинская ГРЭС (3,8 ГВт)." },
          { icon: "Waves", title: "ГЭС — Гидроэлектростанции", color: "hsl(197, 80%, 40%)", text: "Россия входит в топ-5 по установленной гидромощности (~50 ГВт). Крупнейшие — Саяно-Шушенская (6,4 ГВт), Красноярская (6 ГВт), Братская ГЭС. Обеспечивают около 20% выработки." },
          { icon: "Atom", title: "АЭС — Атомные электростанции", color: "hsl(28, 80%, 45%)", text: "11 АЭС с 37 энергоблоками суммарной мощностью ~29 ГВт. Росатом — мировой лидер по строительству реакторов за рубежом. Крупнейшая — Ленинградская АЭС (4 блока, 4 ГВт)." },
          { icon: "Wind", title: "ВИЭ — Возобновляемые источники", color: "hsl(145, 60%, 42%)", text: "Солнечные и ветровые ЭС, малая гидроэнергетика. Суммарная установленная мощность — около 5 ГВт (из них ВЭС ≈2 ГВт). Доля в генерации — менее 2%." },
        ].map((c) => (
          <div key={c.title} className="bg-doc-surface border border-doc p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon name={c.icon} size={16} style={{ color: c.color }} />
              <span className="text-xs font-medium" style={{ color: "hsl(var(--doc-dark))" }}>{c.title}</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--doc-muted))" }}>{c.text}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 border border-doc overflow-hidden">
        <div className="px-4 py-3" style={{ backgroundColor: "hsl(var(--doc-surface))", borderBottom: "1px solid hsl(var(--doc-line))" }}>
          <p className="text-xs font-medium" style={{ color: "hsl(var(--doc-dark))" }}>Ключевые особенности российской энергосистемы</p>
        </div>
        <div className="divide-y divide-doc">
          {[
            {
              icon: "Globe",
              title: "Крупнейшая территория обслуживания",
              text: "ЕЭС охватывает 7 синхронных зон, от Калининграда до Дальнего Востока. Разница во времени между западной и восточной оконечностью — 9 часов. Это создаёт уникальные задачи диспетчеризации и балансировки нагрузок."
            },
            {
              icon: "Thermometer",
              title: "Климатическая нагрузка",
              text: "Суровые зимы формируют один из самых высоких в мире пиков потребления тепловой и электрической энергии. В январе–феврале нагрузка на сеть вырастает до 150–160 ГВт, что требует постоянного резерва мощностей."
            },
            {
              icon: "Network",
              title: "Изолированные энергосистемы",
              text: "Около 20 млн чел. в Сибири, Арктике и на Дальнем Востоке живут в изолированных энергорайонах, не подключённых к ЕЭС. Электроснабжение ведётся дизельными генераторами с субсидированным топливом."
            },
            {
              icon: "TrendingUp",
              title: "Износ инфраструктуры",
              text: "Значительная часть генерирующих мощностей и сетевой инфраструктуры была введена в советское время (1960–1980-е гг.). Средний возраст оборудования ТЭС — более 30 лет. Программы модернизации реализуются через механизм КОММод."
            },
            {
              icon: "ShieldCheck",
              title: "Энергетический суверенитет",
              text: "Россия полностью самодостаточна в энергоресурсах. Экспорт электроэнергии в страны СНГ, Финляндию (до 2022 г.) и Китай. После 2022 г. переориентация на восточные рынки сбыта."
            },
            {
              icon: "BarChart2",
              title: "Ценовая зона и тарифообразование",
              text: "ЕЭС делится на первую (Европа + Урал) и вторую (Сибирь) ценовые зоны с разными рыночными механизмами. Дальний Восток — нерыночная зона, тарифы субсидированы из федерального бюджета."
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-4 bg-white">
              <div className="w-7 h-7 rounded flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "hsl(var(--doc-accent-light))" }}>
                <Icon name={item.icon} size={14} className="doc-accent" />
              </div>
              <div>
                <p className="text-xs font-medium mb-1" style={{ color: "hsl(var(--doc-dark))" }}>{item.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--doc-muted))" }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-l-2 pl-4 py-1" style={{ borderLeftColor: "hsl(var(--doc-accent))" }}>
        <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--doc-muted))" }}>
          <strong style={{ color: "hsl(var(--doc-dark))" }}>Вывод по разделу:</strong> российская энергосистема исторически
          оптимизирована под надёжность и устойчивость базовой нагрузки. Это обуславливает структурные трудности при
          интеграции нестабильных ВИЭ — ветровых и солнечных электростанций.
        </p>
      </div>
    </section>
  );
}
