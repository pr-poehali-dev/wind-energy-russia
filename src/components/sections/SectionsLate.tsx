import Icon from "@/components/ui/icon";
import { SectionTitle, BarChart, CompareBar } from "@/components/DocUI";

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
