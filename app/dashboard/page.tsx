"use client"

import { useMemo, useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Calendar,
  Clock,
  DollarSign,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const NAV_ITEMS = [
  { label: "Dashboard", active: true },
  { label: "Leads" },
  { label: "Channels" },
  { label: "Escalations" },
  { label: "Settings" },
]

const KPI_CARDS = [
  {
    label: "Total Leads Captured",
    meta: "this month",
    value: "143",
    trend: "+12%",
    direction: "up",
    icon: Users,
  },
  {
    label: "Estimated Revenue Recovered",
    meta: "projected",
    value: "$91,200",
    trend: "+18%",
    direction: "up",
    icon: DollarSign,
  },
  {
    label: "Avg AI Response Time",
    meta: "speed to first reply",
    value: "18 sec",
    trend: "-62%",
    direction: "down",
    icon: Clock,
  },
  {
    label: "Qualification Rate",
    meta: "AI-qualified",
    value: "68%",
    trend: "+9%",
    direction: "up",
    icon: BadgeCheck,
  },
]

const LEAD_FUNNEL_DATA = [
  { stage: "Inbound", value: 312 },
  { stage: "Captured", value: 143 },
  { stage: "Qualified", value: 97 },
  { stage: "Viewing Ready", value: 54 },
  { stage: "Handed Off", value: 31 },
  { stage: "Closed Won", value: 18 },
]

const ROI_DEFAULTS = {
  averageLeaseValue: 1800,
  leasesRecovered: 12,
  monthlyServiceCost: 1500,
}

const RESPONSE_TIME_DATA = [
  { label: "AI Response Time", minutes: 0.3, display: "18 sec" },
  { label: "Industry Average", minutes: 252, display: "4.2 hrs" },
  { label: "Previous (without AI)", minutes: 408, display: "6.8 hrs" },
]

const QUALIFICATION_DATA = [
  { status: "New", value: 62 },
  { status: "Engaged", value: 48 },
  { status: "Partially Qualified", value: 32 },
  { status: "Qualified", value: 29 },
  { status: "Viewing Ready", value: 24 },
  { status: "Handed Off", value: 18 },
  { status: "Closed Won", value: 12 },
  { status: "Closed Lost", value: 15 },
]

const QUALIFICATION_COLORS = [
  "#38bdf8",
  "#6366f1",
  "#10b981",
  "#22c55e",
  "#f59e0b",
  "#f97316",
  "#ec4899",
  "#64748b",
]

const CHANNEL_PERFORMANCE_DATA = [
  {
    channel: "Facebook Messenger",
    total: 96,
    qualified: 38,
    closed: 11,
  },
  { channel: "WhatsApp", total: 68, qualified: 28, closed: 7 },
  { channel: "Website", total: 104, qualified: 42, closed: 14 },
  { channel: "Telegram", total: 44, qualified: 17, closed: 5 },
]

const MONTH_TREND_DATA = [
  { month: "Mar", leads: 92, qualified: 48, closed: 8 },
  { month: "Apr", leads: 104, qualified: 56, closed: 11 },
  { month: "May", leads: 118, qualified: 63, closed: 13 },
  { month: "Jun", leads: 126, qualified: 71, closed: 15 },
  { month: "Jul", leads: 134, qualified: 82, closed: 17 },
  { month: "Aug", leads: 143, qualified: 97, closed: 18 },
]

const ESCALATION_LOG = [
  {
    lead: "Harborview Lofts",
    reason: "Multiple unanswered inquiries",
    priority: "critical",
    status: "Open",
    date: "Aug 18, 2026",
  },
  {
    lead: "Pinecrest Flats",
    reason: "Lead requested human agent",
    priority: "high",
    status: "In Progress",
    date: "Aug 17, 2026",
  },
  {
    lead: "Riverside Court",
    reason: "Tour scheduling failed",
    priority: "medium",
    status: "Investigating",
    date: "Aug 16, 2026",
  },
  {
    lead: "Maple Ridge",
    reason: "Duplicate lead conflict",
    priority: "low",
    status: "Resolved",
    date: "Aug 14, 2026",
  },
  {
    lead: "Oak & Ivy",
    reason: "Pricing mismatch escalation",
    priority: "high",
    status: "Open",
    date: "Aug 12, 2026",
  },
  {
    lead: "Cedarline Villas",
    reason: "High-value lead idle",
    priority: "critical",
    status: "Escalated",
    date: "Aug 10, 2026",
  },
]

const COMPARISON_DATA = {
  before: {
    title: "Before AI (14 days)",
    leads: 64,
    qualified: 12,
    responseTime: "6.8 hrs",
  },
  after: {
    title: "With AI (14 days)",
    leads: 142,
    qualified: 53,
    responseTime: "18 sec",
  },
  qualifiedLift: 340,
}

const CARD_CLASS =
  "bg-slate-900/60 border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.28)]"

const CHART_GRID_STROKE = "#1f2937"
const CHART_TICK_COLOR = "#94a3b8"
const TOOLTIP_STYLE = {
  backgroundColor: "#0f172a",
  border: "1px solid #1e293b",
  borderRadius: "10px",
  color: "#e2e8f0",
}

const PRIORITY_STYLES: Record<string, string> = {
  critical: "border-red-500/40 bg-red-500/10 text-red-200",
  high: "border-orange-500/40 bg-orange-500/10 text-orange-200",
  medium: "border-yellow-500/40 bg-yellow-500/10 text-yellow-100",
  low: "border-slate-500/40 bg-slate-500/10 text-slate-200",
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US").format(value)

export default function DashboardPage() {
  const [averageLeaseValue, setAverageLeaseValue] = useState(
    ROI_DEFAULTS.averageLeaseValue,
  )
  const [leasesRecovered, setLeasesRecovered] = useState(
    ROI_DEFAULTS.leasesRecovered,
  )
  const [monthlyServiceCost, setMonthlyServiceCost] = useState(
    ROI_DEFAULTS.monthlyServiceCost,
  )

  const { monthlyRevenue, annualRevenue, roiMultiplier } = useMemo(() => {
    const monthlyRevenueRecovered = averageLeaseValue * leasesRecovered
    const annualRevenueRecovered = monthlyRevenueRecovered * 12
    const multiplier =
      monthlyServiceCost > 0
        ? monthlyRevenueRecovered / monthlyServiceCost
        : 0
    return {
      monthlyRevenue: monthlyRevenueRecovered,
      annualRevenue: annualRevenueRecovered,
      roiMultiplier: multiplier,
    }
  }, [averageLeaseValue, leasesRecovered, monthlyServiceCost])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden md:flex w-64 flex-col border-r border-slate-800 bg-slate-950/80 px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold">
              LCR
            </div>
            <div>
              <p className="text-sm font-semibold">LeadCapture Realty</p>
              <p className="text-xs text-slate-400">Analytics Suite</p>
            </div>
          </div>
          <nav className="mt-10 flex flex-col gap-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`rounded-lg px-3 py-2 transition ${
                  item.active
                    ? "bg-slate-900 text-white"
                    : "text-slate-400 hover:bg-slate-900/60 hover:text-slate-100"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto text-xs text-slate-500">
            AI lead capture + follow-up automation
          </div>
        </aside>

        <div className="flex-1">
          <div className="md:hidden border-b border-slate-800 bg-slate-950/90 px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-semibold">LeadCapture Realty</p>
                <p className="text-xs text-slate-400">Analytics Dashboard</p>
              </div>
              <span className="text-xs text-slate-500">Menu</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`rounded-full px-3 py-1 ${
                    item.active
                      ? "bg-slate-900 text-white"
                      : "bg-slate-900/50 text-slate-400"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="px-4 py-8 md:px-10 space-y-10">
            <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-white">
                  Analytics Dashboard
                </h1>
                <p className="text-sm text-slate-400">
                  LeadCapture Realty performance across channels, AI flows, and
                  recovery impact.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 shadow-sm"
              >
                <Calendar className="h-4 w-4 text-slate-300" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Date range
                  </p>
                  <p className="text-sm font-medium">Aug 1-31, 2026</p>
                </div>
              </button>
            </header>

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Hero KPI Strip</h2>
                <span className="text-xs text-slate-500">
                  Live snapshot of this month
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {KPI_CARDS.map((card) => {
                  const Icon = card.icon
                  const isUp = card.direction === "up"
                  return (
                    <Card key={card.label} className={CARD_CLASS}>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-slate-300">
                              {card.label}
                            </p>
                            <p className="text-xs text-slate-500">{card.meta}</p>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/70">
                            <Icon className="h-5 w-5 text-slate-200" />
                          </div>
                        </div>
                        <div className="text-3xl font-semibold text-white">
                          {card.value}
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span
                            className={`inline-flex items-center gap-1 font-medium ${
                              isUp ? "text-emerald-400" : "text-rose-400"
                            }`}
                          >
                            {isUp ? (
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            ) : (
                              <ArrowDownRight className="h-3.5 w-3.5" />
                            )}
                            {card.trend}
                          </span>
                          <span className="text-slate-500">vs last month</span>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <Card className={CARD_CLASS}>
                <CardHeader>
                  <CardTitle>Lead Funnel</CardTitle>
                  <p className="text-sm text-slate-400">
                    Inbound to closed-won progression this month.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={LEAD_FUNNEL_DATA}
                        layout="vertical"
                        margin={{ left: 10, right: 20 }}
                      >
                        <CartesianGrid
                          stroke={CHART_GRID_STROKE}
                          strokeDasharray="3 3"
                          horizontal={false}
                        />
                        <XAxis
                          type="number"
                          tick={{ fill: CHART_TICK_COLOR, fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          type="category"
                          dataKey="stage"
                          tick={{ fill: CHART_TICK_COLOR, fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                          width={110}
                        />
                        <Tooltip
                          cursor={{ fill: "rgba(148,163,184,0.08)" }}
                          contentStyle={TOOLTIP_STYLE}
                        />
                        <Bar
                          dataKey="value"
                          fill="#38bdf8"
                          radius={[0, 6, 6, 0]}
                        >
                          <LabelList
                            dataKey="value"
                            position="right"
                            fill="#e2e8f0"
                            fontSize={12}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    {LEAD_FUNNEL_DATA.map((step, index) => (
                      <span key={step.stage} className="flex items-center gap-2">
                        <span>
                          {step.stage} ({step.value})
                        </span>
                        {index < LEAD_FUNNEL_DATA.length - 1 ? (
                          <span className="text-slate-600">-&gt;</span>
                        ) : null}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={CARD_CLASS}>
                <CardHeader>
                  <CardTitle>Response Time Comparison</CardTitle>
                  <p className="text-sm text-slate-400">
                    Faster replies drive higher conversion and trust.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={RESPONSE_TIME_DATA}
                        margin={{ left: 10, right: 10, top: 10 }}
                      >
                        <CartesianGrid
                          stroke={CHART_GRID_STROKE}
                          strokeDasharray="3 3"
                        />
                        <XAxis
                          dataKey="label"
                          tick={{ fill: CHART_TICK_COLOR, fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                          interval={0}
                        />
                        <YAxis
                          tick={{ fill: CHART_TICK_COLOR, fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                          label={{
                            value: "Minutes",
                            angle: -90,
                            position: "insideLeft",
                            fill: CHART_TICK_COLOR,
                            fontSize: 12,
                          }}
                        />
                        <Tooltip
                          contentStyle={TOOLTIP_STYLE}
                          formatter={(_, __, props) => {
                            const payload = props.payload as {
                              display?: string
                              minutes?: number
                            }
                            return [
                              payload.display ??
                                `${formatNumber(payload.minutes ?? 0)} min`,
                              "Response Time",
                            ]
                          }}
                        />
                        <Bar
                          dataKey="minutes"
                          fill="#6366f1"
                          radius={[6, 6, 0, 0]}
                        >
                          <LabelList
                            dataKey="display"
                            position="top"
                            fill="#e2e8f0"
                            fontSize={12}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <Card className={CARD_CLASS}>
                <CardHeader>
                  <CardTitle>ROI Calculator</CardTitle>
                  <p className="text-sm text-slate-400">
                    Adjust inputs to model recovered revenue.
                  </p>
                </CardHeader>
                <CardContent className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Average lease value
                      </p>
                      <div className="relative">
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                          $
                        </span>
                        <Input
                          type="number"
                          min={0}
                          className="pl-7 bg-slate-950/60 border-slate-800 text-slate-100"
                          value={averageLeaseValue}
                          onChange={(event) =>
                            setAverageLeaseValue(
                              Number(event.target.value) || 0,
                            )
                          }
                        />
                      </div>
                      <p className="text-xs text-slate-500">per month</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Leases recovered this month
                      </p>
                      <Input
                        type="number"
                        min={0}
                        className="bg-slate-950/60 border-slate-800 text-slate-100"
                        value={leasesRecovered}
                        onChange={(event) =>
                          setLeasesRecovered(Number(event.target.value) || 0)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Monthly service cost
                      </p>
                      <div className="relative">
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                          $
                        </span>
                        <Input
                          type="number"
                          min={0}
                          className="pl-7 bg-slate-950/60 border-slate-800 text-slate-100"
                          value={monthlyServiceCost}
                          onChange={(event) =>
                            setMonthlyServiceCost(
                              Number(event.target.value) || 0,
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Monthly revenue recovered
                      </p>
                      <p className="text-2xl font-semibold text-white">
                        {formatCurrency(monthlyRevenue)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Annual revenue recovered
                      </p>
                      <p className="text-2xl font-semibold text-white">
                        {formatCurrency(annualRevenue)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        ROI multiplier
                      </p>
                      <p className="text-2xl font-semibold text-emerald-300">
                        {roiMultiplier.toFixed(1)}x return
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={CARD_CLASS}>
                <CardHeader>
                  <CardTitle>Lead Qualification Breakdown</CardTitle>
                  <p className="text-sm text-slate-400">
                    Status distribution across the qualification pipeline.
                  </p>
                </CardHeader>
                <CardContent className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="h-64 w-full md:w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={QUALIFICATION_DATA}
                          dataKey="value"
                          nameKey="status"
                          innerRadius={65}
                          outerRadius={95}
                          paddingAngle={3}
                        >
                          {QUALIFICATION_DATA.map((entry, index) => (
                            <Cell
                              key={entry.status}
                              fill={
                                QUALIFICATION_COLORS[
                                  index % QUALIFICATION_COLORS.length
                                ]
                              }
                            />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={TOOLTIP_STYLE} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid flex-1 grid-cols-1 gap-3 text-sm text-slate-200">
                    {QUALIFICATION_DATA.map((entry, index) => (
                      <div
                        key={entry.status}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                              backgroundColor:
                                QUALIFICATION_COLORS[
                                  index % QUALIFICATION_COLORS.length
                                ],
                            }}
                          />
                          <span className="text-slate-300">
                            {entry.status}
                          </span>
                        </div>
                        <span className="text-slate-100">
                          {entry.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <Card className={CARD_CLASS}>
                <CardHeader>
                  <CardTitle>Channel Performance</CardTitle>
                  <p className="text-sm text-slate-400">
                    How each channel converts from inbound to closed-won.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={CHANNEL_PERFORMANCE_DATA}
                        margin={{ left: 10, right: 10 }}
                      >
                        <CartesianGrid
                          stroke={CHART_GRID_STROKE}
                          strokeDasharray="3 3"
                        />
                        <XAxis
                          dataKey="channel"
                          tick={{ fill: CHART_TICK_COLOR, fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fill: CHART_TICK_COLOR, fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip contentStyle={TOOLTIP_STYLE} />
                        <Legend
                          verticalAlign="top"
                          height={24}
                          wrapperStyle={{ color: CHART_TICK_COLOR }}
                        />
                        <Bar
                          dataKey="total"
                          name="Total leads"
                          fill="#38bdf8"
                          radius={[6, 6, 0, 0]}
                        />
                        <Bar
                          dataKey="qualified"
                          name="Qualified leads"
                          fill="#22c55e"
                          radius={[6, 6, 0, 0]}
                        />
                        <Bar
                          dataKey="closed"
                          name="Closed won"
                          fill="#f59e0b"
                          radius={[6, 6, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className={CARD_CLASS}>
                <CardHeader>
                  <CardTitle>Month-over-Month Trend</CardTitle>
                  <p className="text-sm text-slate-400">
                    Six-month performance for captured and qualified leads.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={MONTH_TREND_DATA}
                        margin={{ left: 10, right: 20 }}
                      >
                        <CartesianGrid
                          stroke={CHART_GRID_STROKE}
                          strokeDasharray="3 3"
                        />
                        <XAxis
                          dataKey="month"
                          tick={{ fill: CHART_TICK_COLOR, fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fill: CHART_TICK_COLOR, fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip contentStyle={TOOLTIP_STYLE} />
                        <Legend
                          verticalAlign="top"
                          height={24}
                          wrapperStyle={{ color: CHART_TICK_COLOR }}
                        />
                        <Line
                          type="monotone"
                          dataKey="leads"
                          name="Leads captured"
                          stroke="#38bdf8"
                          strokeWidth={2}
                          dot={false}
                        />
                        <Line
                          type="monotone"
                          dataKey="qualified"
                          name="Qualified leads"
                          stroke="#22c55e"
                          strokeWidth={2}
                          dot={false}
                        />
                        <Line
                          type="monotone"
                          dataKey="closed"
                          name="Closed won"
                          stroke="#f59e0b"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-4">
              <Card className={CARD_CLASS}>
                <CardHeader>
                  <CardTitle>Escalation Log</CardTitle>
                  <p className="text-sm text-slate-400">
                    Priority lead handoffs and flagged exceptions.
                  </p>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-slate-800">
                        <TableHead>Lead Name</TableHead>
                        <TableHead>Reason</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ESCALATION_LOG.map((row) => (
                        <TableRow
                          key={`${row.lead}-${row.date}`}
                          className="border-slate-900/80"
                        >
                          <TableCell className="font-medium text-slate-100">
                            {row.lead}
                          </TableCell>
                          <TableCell className="text-slate-300">
                            {row.reason}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={PRIORITY_STYLES[row.priority]}
                            >
                              {row.priority}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-slate-300">
                            {row.status}
                          </TableCell>
                          <TableCell className="text-slate-400">
                            {row.date}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Pilot vs Full Period Comparison
                </h2>
                <span className="text-xs text-slate-500">
                  14-day matched cohort
                </span>
              </div>
              <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] items-stretch">
                <Card className={CARD_CLASS}>
                  <CardHeader>
                    <CardTitle>{COMPARISON_DATA.before.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Leads
                      </p>
                      <p className="text-2xl font-semibold text-white">
                        {formatNumber(COMPARISON_DATA.before.leads)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Qualified
                      </p>
                      <p className="text-2xl font-semibold text-white">
                        {formatNumber(COMPARISON_DATA.before.qualified)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Avg response time
                      </p>
                      <p className="text-2xl font-semibold text-white">
                        {COMPARISON_DATA.before.responseTime}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 text-center">
                  <p className="text-xs uppercase tracking-wide text-emerald-200">
                    Improvement
                  </p>
                  <p className="text-3xl font-semibold text-emerald-200">
                    +{COMPARISON_DATA.qualifiedLift}%
                  </p>
                  <p className="text-xs text-emerald-100">
                    more qualified leads
                  </p>
                </div>

                <Card className={CARD_CLASS}>
                  <CardHeader>
                    <CardTitle>{COMPARISON_DATA.after.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Leads
                      </p>
                      <p className="text-2xl font-semibold text-white">
                        {formatNumber(COMPARISON_DATA.after.leads)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Qualified
                      </p>
                      <p className="text-2xl font-semibold text-white">
                        {formatNumber(COMPARISON_DATA.after.qualified)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Avg response time
                      </p>
                      <p className="text-2xl font-semibold text-white">
                        {COMPARISON_DATA.after.responseTime}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
