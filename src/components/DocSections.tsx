import Icon from "@/components/ui/icon";
import {
  StatCard,
  SectionTitle,
  BarChart,
  CompareBar,
  WindTurbineScheme,
  RussiaMap,
} from "@/components/DocUI";

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

export function SectionWind() {
  return (
    <section id="wind" className="section-enter mb-24">
      <SectionTitle num="03" title="Что такое ветровая энергия и как она реализуется" />

      <p className="text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--foreground))" }}>
        Ветровая энергия — кинетическая энергия движущихся воздушных масс, преобразуемая в электрическую посредством
        ветровых турбин. Один из наиболее быстро развивающихся секторов мировой энергетики.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <WindTurbineScheme />
        <div>
          <p className="text-xs font-medium mb-3" style={{ color: "hsl(var(--doc-dark))" }}>Принцип работы турбины</p>
          <div className="space-y-2.5">
            {[
              "Ветер давит на лопасти ротора",
              "Ротор приводит в движение генератор",
              "Генератор вырабатывает переменный ток",
              "Инвертор согласует напряжение с сетью",
              "Энергия поступает в электросеть",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mono text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-medium" style={{ backgroundColor: "hsl(var(--doc-accent-light))", color: "hsl(var(--doc-accent))" }}>{i + 1}</span>
                <span className="text-xs leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-xs mono mb-3" style={{ color: "hsl(var(--doc-muted))" }}>Компоненты ветровой электростанции</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { icon: "Settings", name: "Гондола", desc: "Генератор, мультипликатор" },
            { icon: "RotateCcw", name: "Ротор", desc: "Лопасти, ступица" },
            { icon: "Minus", name: "Мачта", desc: "Стальная башня" },
            { icon: "Wifi", name: "SCADA", desc: "Система управления" },
          ].map((c) => (
            <div key={c.name} className="bg-doc-surface border border-doc p-3 text-center">
              <Icon name={c.icon} size={18} className="doc-accent mx-auto mb-2" />
              <p className="text-xs font-medium mb-1" style={{ color: "hsl(var(--doc-dark))" }}>{c.name}</p>
              <p style={{ color: "hsl(var(--doc-muted))", fontSize: "10px" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>
        Интеграция ВЭС в сеть требует балансирующих мощностей и систем прогнозирования. Суммарная установленная
        мощность ветроэнергетики в мире в 2023 году превысила <strong>2 000 ГВт</strong>.
      </p>
    </section>
  );
}

export function SectionRussia() {
  return (
    <section id="russia" className="section-enter mb-24">
      <SectionTitle num="04" title="Использование ветровой энергии в России" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <StatCard value="~2,0" unit="ГВт" label="Установленная мощность ВЭС" />
        <StatCard value="0,4" unit="%" label="Доля в общей генерации" />
        <StatCard value="≈30" label="Действующих ветропарков" />
      </div>

      <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(var(--foreground))" }}>
        Развитие ветроэнергетики активизировалось в 2019–2022 годах благодаря программам поддержки ДПМ ВИЭ.
        Крупнейшие игроки рынка — Новавинд (Росатом), Энел Россия, НоваВинд.
      </p>

      <div className="mb-8">
        <p className="text-xs mono mb-4" style={{ color: "hsl(var(--doc-muted))" }}>Ключевые регионы ветроэнергетики (пузырьки = мощность, МВт)</p>
        <RussiaMap />
      </div>

      <div className="mb-6">
        <p className="text-xs mono mb-3" style={{ color: "hsl(var(--doc-muted))" }}>Крупнейшие ВЭС России</p>
        <div className="border border-doc overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr style={{ backgroundColor: "hsl(var(--doc-surface))" }}>
                <th className="text-left p-3 font-medium" style={{ color: "hsl(var(--doc-dark))" }}>Станция</th>
                <th className="text-left p-3 font-medium" style={{ color: "hsl(var(--doc-dark))" }}>Регион</th>
                <th className="text-right p-3 font-medium mono" style={{ color: "hsl(var(--doc-dark))" }}>МВт</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Кочубеевская ВЭС", region: "Ставропольский кр.", mw: "210" },
                { name: "Кольская ВЭС", region: "Мурманская обл.", mw: "202" },
                { name: "Адыгейская ВЭС", region: "Краснодарский кр.", mw: "150" },
                { name: "Ульяновская ВЭС", region: "Ульяновская обл.", mw: "85" },
                { name: "Ямал СПГ ВЭС", region: "ЯНАО", mw: "72" },
              ].map((row, i) => (
                <tr key={i} style={{ borderTop: "1px solid hsl(var(--doc-line))" }}>
                  <td className="p-3" style={{ color: "hsl(var(--foreground))" }}>{row.name}</td>
                  <td className="p-3" style={{ color: "hsl(var(--doc-muted))" }}>{row.region}</td>
                  <td className="p-3 text-right mono doc-accent font-medium">{row.mw}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="border-l-2 pl-4 py-1" style={{ borderLeftColor: "hsl(28, 80%, 45%)" }}>
        <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--doc-muted))" }}>
          <strong style={{ color: "hsl(var(--doc-dark))" }}>Географические зоны:</strong> наиболее перспективны побережья
          арктических морей (ЯНАО, НАО), Каспийско-Черноморское побережье, Дальний Восток и Северный Кавказ. Во многих
          районах Сибири ветровые ресурсы слабые или непостоянные.
        </p>
      </div>
    </section>
  );
}

export function SectionProblems() {
  return (
    <section id="problems" className="section-enter mb-24">
      <SectionTitle num="05" title="Почему ветровая энергия в России не очень выгодна" />

      <p className="text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--foreground))" }}>
        Несмотря на огромную территорию, Россия не входит даже в топ-15 стран по мощности ветроэнергетики.
        Этому способствует комплекс взаимосвязанных причин.
      </p>

      <div className="space-y-4 mb-8">
        {[
          {
            icon: "CloudSnow",
            title: "Слабые и нерегулярные ветра",
            text: "Большинство населённых территорий имеют среднегодовую скорость ветра ниже 6 м/с — порогового значения для рентабельной ветрогенерации. Исключение — арктическое побережье и горные районы.",
            color: "hsl(197, 80%, 40%)"
          },
          {
            icon: "TrendingDown",
            title: "Высокие капитальные затраты",
            text: "Строительство 1 МВт мощности ВЭС в России — $1,2–1,8 млн, дороже чем в Европе. Удалённость, суровый климат (нужны холодостойкие турбины) и слабая логистика существенно удорожают строительство.",
            color: "hsl(var(--doc-accent))"
          },
          {
            icon: "AlertTriangle",
            title: "Нестабильность выработки",
            text: "Интеграция в ЕЭС требует резервных мощностей и балансировки. Российская система исторически адаптирована под стабильные базовые нагрузки ТЭС и АЭС — гибкость инфраструктуры низкая.",
            color: "hsl(28, 80%, 45%)"
          },
          {
            icon: "Building",
            title: "Инфраструктура и обслуживание",
            text: "Перспективные ветровые районы удалены от инфраструктуры. Обслуживание современных турбин требует высокой квалификации. Отечественное производство турбин только формируется.",
            color: "hsl(145, 60%, 42%)"
          },
          {
            icon: "Scale",
            title: "Конкуренция с дешёвым газом",
            text: "Внутренние цены на природный газ в России субсидированы. Это делает газовые ТЭС выгоднее ВЭС при любых сценариях без государственной поддержки ВИЭ.",
            color: "hsl(280, 50%, 50%)"
          },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 p-5 border border-doc bg-white">
            <div className="w-8 h-8 rounded flex items-center justify-center shrink-0" style={{ backgroundColor: item.color.replace(")", ", 0.12)").replace("hsl(", "hsla(") }}>
              <Icon name={item.icon} size={16} style={{ color: item.color }} />
            </div>
            <div>
              <p className="text-sm font-medium mb-1.5" style={{ color: "hsl(var(--doc-dark))" }}>{item.title}</p>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--doc-muted))" }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionComparison() {
  return (
    <section id="comparison" className="section-enter mb-24">
      <SectionTitle num="06" title="Сравнение с ветровой энергетикой других стран" />

      <p className="text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--foreground))" }}>
        Дания и Германия — мировые лидеры ветроэнергетики. Их опыт наглядно демонстрирует, насколько велик разрыв с Россией и каковы его причины.
      </p>

      <div className="mb-8">
        <p className="text-xs mono mb-4" style={{ color: "hsl(var(--doc-muted))" }}>Установленная мощность ВЭС (ГВт, 2023)</p>
        <CompareBar country="Германия" value={69} total={70} color="hsl(213, 90%, 42%)" />
        <CompareBar country="Дания" value={9.8} total={70} color="hsl(197, 80%, 40%)" />
        <CompareBar country="Россия" value={2.0} total={70} color="hsl(28, 80%, 45%)" />
      </div>

      <div className="mb-8">
        <p className="text-xs mono mb-4" style={{ color: "hsl(var(--doc-muted))" }}>Доля ветроэнергетики в общей генерации страны (%)</p>
        <BarChart data={[
          { label: "Дания", value: 53, color: "hsl(197, 80%, 40%)" },
          { label: "Германия", value: 36 },
          { label: "Россия", value: 0.4, color: "hsl(28, 80%, 45%)" },
        ]} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          {
            flag: "🇩🇰",
            country: "Дания",
            bg: "hsl(197, 80%, 40%)",
            facts: [
              "53% электроэнергии из ветра",
              "Vestas — мировой лидер турбин",
              "Средняя скорость ветра 7–8 м/с",
              "Господдержка с 1980-х годов",
              "Развитый офшорный сектор",
            ]
          },
          {
            flag: "🇩🇪",
            country: "Германия",
            bg: "hsl(213, 90%, 42%)",
            facts: [
              "69 ГВт установленной мощности",
              "Закон Energiewende с 2000 г.",
              "Льготные тарифы (feed-in tariff)",
              "Сильная промышленная база",
              "Инвестиции €20+ млрд/год",
            ]
          },
          {
            flag: "🇷🇺",
            country: "Россия",
            bg: "hsl(28, 80%, 45%)",
            facts: [
              "~2 ГВт, <0,5% генерации",
              "ДПМ ВИЭ — основной механизм",
              "Преобладает газовая генерация",
              "Турбины частично импортные",
              "Санкции затрудняют развитие",
            ]
          },
        ].map((c) => (
          <div key={c.country} className="border border-doc overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: c.bg }}>
              <span className="text-lg">{c.flag}</span>
              <p className="text-sm font-semibold text-white">{c.country}</p>
            </div>
            <div className="p-4 space-y-2">
              {c.facts.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <span className="doc-accent text-xs mt-0.5 shrink-0">—</span>
                  <span className="text-xs leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border border-doc p-5" style={{ backgroundColor: "hsl(var(--doc-accent-light))" }}>
        <p className="text-xs font-medium doc-accent mb-3">Ключевые преимущества Дании и Германии</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Средняя скорость ветра выше на 2–4 м/с",
            "Государство гарантирует закупочные тарифы",
            "Развитая сетевая инфраструктура",
            "Десятилетия опыта, локальное производство",
            "Цены на газ не субсидированы",
            "Жёсткие экологические обязательства ЕС",
          ].map((f) => (
            <div key={f} className="flex items-start gap-2">
              <Icon name="Check" size={12} className="doc-accent mt-0.5 shrink-0" />
              <span className="text-xs" style={{ color: "hsl(var(--foreground))" }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionConclusions() {
  return (
    <section id="conclusions" className="section-enter mb-24">
      <SectionTitle num="07" title="Выводы и перспективы развития" />

      <p className="text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--foreground))" }}>
        Исследование показывает, что ветроэнергетика в России находится на начальной стадии развития. При этом потенциал
        отрасли значителен при правильной государственной политике.
      </p>

      <div className="space-y-3 mb-8">
        {[
          { label: "Ресурсы", text: "Россия обладает значительными ветровыми ресурсами на севере и в прибрежных зонах, однако основная часть населённых территорий имеет недостаточный ветровой потенциал." },
          { label: "Экономика", text: "Субсидированный газ делает ветроэнергетику неконкурентоспособной без господдержки. Программа ДПМ ВИЭ — правильный шаг, но масштаб несопоставим с ведущими странами." },
          { label: "Санкции", text: "Ограничения 2022 года создали барьеры для доступа к технологиям и оборудованию. Отечественная отрасль производства турбин только формируется." },
          { label: "Ниша", text: "Наиболее перспективная область — изолированные энергосистемы: арктические районы, острова, Дальний Восток, где ветро-дизельные комплексы дают реальный экономический эффект." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 border border-doc p-4">
            <span className="mono text-xs doc-accent font-medium shrink-0 mt-0.5 w-16">{item.label}</span>
            <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="border border-doc p-5 mb-6">
        <p className="text-xs font-medium mb-4" style={{ color: "hsl(var(--doc-dark))" }}>Возможные пути развития</p>
        <div className="space-y-3">
          {[
            { horizon: "Краткосрочно", action: "Расширение ДПМ ВИЭ, локализация производства турбин на 65%+" },
            { horizon: "Среднесрочно", action: "Офшорная ветроэнергетика на Балтике и Беринговом море" },
            { horizon: "Долгосрочно", action: "Полноценная отрасль с экспортным потенциалом технологий" },
          ].map((item) => (
            <div key={item.horizon} className="flex gap-4 items-start">
              <span className="mono text-xs px-2 py-0.5 rounded shrink-0" style={{ backgroundColor: "hsl(var(--doc-accent-light))", color: "hsl(var(--doc-accent))" }}>{item.horizon}</span>
              <span className="text-xs leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>{item.action}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-doc-surface border border-doc p-5">
        <p className="text-sm font-medium mb-2" style={{ color: "hsl(var(--doc-dark))" }}>Заключение</p>
        <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--doc-muted))" }}>
          Ветроэнергетика не станет доминирующим источником энергии в России в обозримой перспективе — структурные,
          климатические и экономические факторы слишком значительны. Однако при целенаправленной политике она может
          занять важную нишу в децентрализованной энергетике и стать основой для технологического суверенитета в секторе ВИЭ.
        </p>
      </div>
    </section>
  );
}

export function SectionSources() {
  return (
    <section id="sources" className="section-enter">
      <SectionTitle num="08" title="Источники информации" />

      <div className="space-y-0">
        {[
          { type: "Официальный отчёт", text: "Системный оператор ЕЭС. Годовой отчёт 2023. — М.: АО «СО ЕЭС», 2024." },
          { type: "Статистика", text: "Росстат. Производство и потребление электроэнергии в России. — 2024." },
          { type: "Аналитика", text: "Ассоциация развития возобновляемой энергетики (АРВЭ). Отчёт о рынке ВИЭ 2023." },
          { type: "Международный", text: "IRENA. Renewable Capacity Statistics 2024. — Abu Dhabi: IRENA, 2024." },
          { type: "Международный", text: "Global Wind Energy Council. Global Wind Report 2024. — Brussels: GWEC, 2024." },
          { type: "Научная статья", text: "Попель О.С. и др. Перспективы ветроэнергетики в России // Теплоэнергетика. — 2022. — №8." },
          { type: "Аналитика", text: "Vygon Consulting. Ветроэнергетика России: настоящее и будущее. — 2023." },
          { type: "Международный", text: "Energistyrelsen (Danish Energy Agency). Danish Climate and Energy Outlook. — 2024." },
          { type: "Официальный", text: "Bundesministerium für Wirtschaft und Klimaschutz. Erneuerbare Energien in Zahlen. — Berlin, 2024." },
        ].map((s, i) => (
          <div key={i} className="flex gap-4 items-start py-3.5" style={{ borderBottom: "1px solid hsl(var(--doc-line))" }}>
            <span className="mono text-xs shrink-0 pt-0.5" style={{ color: "hsl(var(--doc-muted))", minWidth: "24px" }}>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <span className="inline-block mono px-1.5 py-0.5 rounded mb-1" style={{
                backgroundColor: "hsl(var(--doc-accent-light))",
                color: "hsl(var(--doc-accent))",
                fontSize: "10px"
              }}>{s.type}</span>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-6" style={{ borderTop: "1px solid hsl(var(--doc-line))" }}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs mono" style={{ color: "hsl(var(--doc-muted))" }}>Исследование завершено</p>
            <p className="text-xs mt-1" style={{ color: "hsl(var(--doc-muted))" }}>Ветровая энергетика в энергосистеме России — 2024</p>
          </div>
          <span className="mono text-xs" style={{ color: "hsl(var(--doc-line))" }}>08 / 08</span>
        </div>
      </div>
    </section>
  );
}
