import Icon from "@/components/ui/icon";
import { StatCard, SectionTitle, BarChart, WindTurbineScheme, RussiaMap } from "@/components/DocUI";

export function SectionWind() {
  return (
    <section id="wind" className="section-enter mb-24">
      <SectionTitle num="03" title="Что такое ветровая энергия и как она реализуется" />

      <p className="text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--foreground))" }}>
        Ветровая энергия — кинетическая энергия движущихся воздушных масс, преобразуемая в электрическую с помощью
        ветровых турбин. Это один из наиболее быстро развивающихся секторов мировой энергетики: за последние 20 лет
        установленная мощность выросла более чем в 20 раз.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <StatCard value="2 000+" unit="ГВт" label="Мировая мощность ВЭС в 2023 г." />
        <StatCard value="~7" unit="%" label="Доля ветра в мировой генерации" />
        <StatCard value="15–20" unit="лет" label="Срок службы турбины" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <WindTurbineScheme />
        <div>
          <p className="text-xs font-medium mb-3" style={{ color: "hsl(var(--doc-dark))" }}>Принцип работы турбины</p>
          <div className="space-y-3">
            {[
              { step: "Захват энергии ветра", desc: "Лопасти ротора профилированы как авиационное крыло — ветер создаёт подъёмную силу, раскручивая ротор." },
              { step: "Механическая передача", desc: "Мультипликатор (редуктор) повышает частоту вращения с ~15 об/мин до ~1500 об/мин для генератора." },
              { step: "Генерация тока", desc: "Синхронный или асинхронный генератор преобразует механическую энергию в переменный электрический ток." },
              { step: "Преобразование и согласование", desc: "Силовой преобразователь (инвертор) стабилизирует частоту и напряжение для подачи в общую сеть." },
              { step: "Выдача в сеть", desc: "Трансформатор повышает напряжение до уровня ЛЭП. Энергия поступает потребителям через распределительную сеть." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mono text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-medium mt-0.5" style={{ backgroundColor: "hsl(var(--doc-accent-light))", color: "hsl(var(--doc-accent))" }}>{i + 1}</span>
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: "hsl(var(--doc-dark))" }}>{item.step}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--doc-muted))" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-xs mono mb-3" style={{ color: "hsl(var(--doc-muted))" }}>Ключевые компоненты ветровой турбины</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { icon: "Settings", name: "Гондола", desc: "Корпус на верхушке мачты. Содержит генератор, мультипликатор, систему охлаждения и тормоз." },
            { icon: "RotateCcw", name: "Ротор", desc: "3 лопасти из стеклопластика длиной 40–90 м. Захватывает кинетическую энергию ветра." },
            { icon: "Minus", name: "Мачта", desc: "Стальная или бетонная башня высотой 80–160 м. Чем выше — тем сильнее ветер." },
            { icon: "Wifi", name: "SCADA", desc: "Цифровая система управления. Разворачивает гондолу по ветру, регулирует угол лопастей." },
          ].map((c) => (
            <div key={c.name} className="bg-doc-surface border border-doc p-3">
              <Icon name={c.icon} size={16} className="doc-accent mb-2" />
              <p className="text-xs font-medium mb-1" style={{ color: "hsl(var(--doc-dark))" }}>{c.name}</p>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--doc-muted))", fontSize: "10px" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 border border-doc overflow-hidden">
        <div className="px-4 py-3" style={{ backgroundColor: "hsl(var(--doc-surface))", borderBottom: "1px solid hsl(var(--doc-line))" }}>
          <p className="text-xs font-medium" style={{ color: "hsl(var(--doc-dark))" }}>Типы ветровых электростанций</p>
        </div>
        <div className="divide-y divide-doc">
          {[
            {
              icon: "MapPin",
              title: "Наземные (onshore) ВЭС",
              text: "Наиболее распространённый тип. Строятся на равнинах, в горах, на побережье. Стоимость 1 МВт — $0,9–1,5 млн. Основной формат для России. Недостаток — требуют значительных земельных площадей и создают шумовой фон."
            },
            {
              icon: "Waves",
              title: "Морские (offshore) ВЭС",
              text: "Устанавливаются на морском шельфе глубиной до 60 м на стационарных основаниях. Ветер в море стабильнее и сильнее, КИУ достигает 45–55%. Стоимость выше в 2–3 раза. Лидеры: Великобритания, Германия, Китай."
            },
            {
              icon: "Anchor",
              title: "Плавучие (floating) ВЭС",
              text: "Турбины на плавучих платформах для глубин свыше 60 м. Технология на стадии промышленного внедрения. Открывает доступ к огромным ресурсам глубоководных акваторий — в том числе в Японском и Беринговом морях."
            },
            {
              icon: "Home",
              title: "Малые и микро-ВЭС",
              text: "Мощностью от 1 кВт до нескольких МВт. Применяются в изолированных районах, на фермах, в арктических посёлках. Для России — наиболее перспективный сегмент с точки зрения замещения дорогой дизельной генерации."
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

      <div className="mb-8">
        <p className="text-xs mono mb-4" style={{ color: "hsl(var(--doc-muted))" }}>Коэффициент использования установленной мощности (КИУ) по типам генерации, %</p>
        <BarChart data={[
          { label: "Offshore ВЭС", value: 50, color: "hsl(197, 80%, 40%)" },
          { label: "Onshore ВЭС", value: 28 },
          { label: "Солнечные СЭС", value: 15, color: "hsl(42, 90%, 50%)" },
          { label: "Угольная ТЭС", value: 55, color: "hsl(220, 10%, 50%)" },
          { label: "АЭС", value: 85, color: "hsl(28, 80%, 45%)" },
        ]} />
        <p className="text-xs mt-2" style={{ color: "hsl(var(--doc-muted))" }}>КИУ показывает, какую долю от максимальной мощности станция вырабатывает в среднем за год</p>
      </div>

      <div className="mb-8">
        <p className="text-xs mono mb-4" style={{ color: "hsl(var(--doc-muted))" }}>Требования к ветровым ресурсам для рентабельности</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { threshold: "< 5 м/с", label: "Нерентабельно", desc: "Турбина не окупается при текущих ценах на электроэнергию", color: "hsl(0, 70%, 55%)" },
            { threshold: "5–7 м/с", label: "Погранично", desc: "Возможна окупаемость при субсидировании или дорогом дизеле", color: "hsl(42, 90%, 50%)" },
            { threshold: "> 7 м/с", label: "Рентабельно", desc: "Срок окупаемости 7–12 лет, проект коммерчески привлекателен", color: "hsl(145, 60%, 42%)" },
          ].map((item) => (
            <div key={item.threshold} className="border border-doc p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="mono text-sm font-medium" style={{ color: "hsl(var(--doc-dark))" }}>{item.threshold}</span>
              </div>
              <p className="text-xs font-medium mb-1" style={{ color: item.color }}>{item.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--doc-muted))" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-l-2 pl-4 py-1" style={{ borderLeftColor: "hsl(var(--doc-accent))" }}>
        <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--doc-muted))" }}>
          <strong style={{ color: "hsl(var(--doc-dark))" }}>Вывод по разделу:</strong> ветроэнергетика — зрелая и экономически
          конкурентоспособная технология в условиях достаточных ветровых ресурсов (скорость ветра выше 7 м/с).
          Ключевой фактор успеха — стабильность и интенсивность ветра, которые в большинстве регионов России
          оказываются недостаточными для рентабельной генерации.
        </p>
      </div>
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
