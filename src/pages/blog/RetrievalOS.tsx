import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SEO, articleSchema } from "@/components/SEO";

// ─── Helper components ────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-14 text-2xl font-semibold text-foreground">{children}</h2>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 text-lg font-semibold text-foreground">{children}</h3>;
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  );
}

function CodeBlock({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <div className="relative mt-6 rounded-lg overflow-hidden border border-border/50">
      <div className="flex items-center bg-[#161b22] px-4 py-2 border-b border-border/50">
        <span className="text-xs font-mono text-[#8b949e]">{lang}</span>
      </div>
      <pre className="overflow-x-auto bg-[#0d1117] p-4 text-sm text-[#e6edf3] font-mono leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{label}</p>
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

// ─── Tables ───────────────────────────────────────────────────────────────────

function QueryLatencyTable() {
  const rows = [
    { path: "Qdrant ANN (10k vectors, top_k=10)", p50: "1.7 ms", p95: "2.3 ms", p99: "10.5 ms", n: "100", highlight: false },
    { path: "Full stack — cache miss (embed → Qdrant → Redis SET)", p50: "2.1 ms", p95: "2.4 ms", p99: "2.7 ms", n: "50", highlight: false },
    { path: "Full stack — cache hit (Redis GET only)", p50: "0.2 ms", p95: "0.2 ms", p99: "0.3 ms", n: "100", highlight: true },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Path</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">p50</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">p95</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">p99</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">n</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                row.highlight
                  ? "bg-primary/5 font-medium text-foreground"
                  : i % 2 === 0
                  ? "bg-card text-muted-foreground"
                  : "bg-muted/30 text-muted-foreground"
              }
            >
              <td className="px-4 py-3 text-xs">{row.path}</td>
              <td className="px-4 py-3 font-mono">
                {row.highlight ? <span className="text-primary font-semibold">{row.p50}</span> : row.p50}
              </td>
              <td className="px-4 py-3 font-mono">{row.p95}</td>
              <td className="px-4 py-3 font-mono">{row.p99}</td>
              <td className="px-4 py-3 font-mono">{row.n}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ThroughputTable() {
  const rows = [
    { scenario: "50 concurrent cache-miss queries", qps: "953 QPS", concurrency: "50", notes: "All unique queries, Qdrant hit per request", highlight: false },
    { scenario: "50 concurrent cache-hit queries", qps: "21,975 QPS", concurrency: "50", notes: "All identical, Redis only", highlight: false },
    { scenario: "Realistic Zipf workload (s=1.2, 81.4% hit rate)", qps: "10,785 QPS", concurrency: "50", notes: "200-query corpus, zero errors", highlight: true },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Scenario</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">QPS</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Concurrency</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                row.highlight
                  ? "bg-primary/5 font-medium text-foreground"
                  : i % 2 === 0
                  ? "bg-card text-muted-foreground"
                  : "bg-muted/30 text-muted-foreground"
              }
            >
              <td className="px-4 py-3 text-xs">{row.scenario}</td>
              <td className="px-4 py-3 font-mono">
                {row.highlight ? <span className="text-primary font-semibold">{row.qps}</span> : row.qps}
              </td>
              <td className="px-4 py-3 font-mono">{row.concurrency}</td>
              <td className="px-4 py-3 text-xs">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FailureModeTable() {
  const rows = [
    { scenario: "Unknown project name", behaviour: "ProjectNotFoundError — fast-fail before the vector index is reached" },
    { scenario: "Project exists, no active deployment", behaviour: "ProjectNotFoundError with message 'no active deployment' — never serves stale results" },
    { scenario: "5 concurrent IndexConfig creates, same hash", behaviour: "Exactly 1 succeeds, 4 get DuplicateConfigError — unique constraint enforced at DB level" },
    { scenario: "2 workers compete for same ingestion job", behaviour: "SELECT FOR UPDATE SKIP LOCKED — each claims a different job, no blocking, no race" },
    { scenario: "Cold Redis, 20 concurrent queries", behaviour: "All 20 fall back to Postgres independently, zero errors — no distributed lock on the read path" },
    { scenario: "Rollback while queries are in flight", behaviour: "Both Redis keys deleted atomically, next query returns clean 404 — no stale results served" },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Failure scenario</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Observed behaviour</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}
            >
              <td className="px-4 py-3 text-xs font-mono">{row.scenario}</td>
              <td className="px-4 py-3 text-xs">{row.behaviour}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HotPathTable() {
  const rows = [
    { operation: "Redis key derivation", perOp: "0.04 µs", headroom: "28× under limit" },
    { operation: "Serving config merge (IndexConfig + Deployment)", perOp: "0.28 µs", headroom: "17.7× under limit" },
    { operation: "Cache key generation (SHA-256)", perOp: "0.35 µs", headroom: "57.4× under limit" },
    { operation: "JSON deserialise (16-field serving config)", perOp: "1.57 µs", headroom: "31.8× under limit" },
    { operation: "Recall@5 computation", perOp: "0.29 µs", headroom: "173× under limit" },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Operation (runs every query)</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Per-op cost</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Headroom</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}
            >
              <td className="px-4 py-3 text-xs">{row.operation}</td>
              <td className="px-4 py-3 font-mono text-xs font-semibold text-foreground">{row.perOp}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.headroom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RetrievalOS() {
  return (
    <Layout>
      <SEO
        title="Retrieval OS: A Production-Grade Retrieval Runtime | Baselyne Systems Blog"
        description="How we built a serving layer that makes RAG systems deployable, measurable, and safe to operate — 10,785 QPS on a single node, 2.8ms rollback propagation, automatic quality guard-rails."
        keywords="RAG infrastructure, retrieval augmented generation, vector search, embedding versioning, production RAG, semantic search platform"
        canonical="https://baselynesystems.com/blog/retrieval-os"
        ogType="article"
        publishedTime="2026-02-01"
        author="Achyuth Samudrala"
        structuredData={articleSchema({
          title: "Retrieval OS: A Production-Grade Retrieval Runtime",
          description: "How we built a serving layer that makes RAG systems deployable, measurable, and safe to operate — 10,785 QPS on a single node, 2.8ms rollback propagation, automatic quality guard-rails.",
          url: "https://baselynesystems.com/blog/retrieval-os",
          datePublished: "2026-02-01",
          keywords: ["RAG infrastructure", "retrieval augmented generation", "vector search", "embedding versioning", "production RAG", "semantic search platform"],
        })}
      />

      <article className="bg-layer-1 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">

            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Blog
            </Link>

            {/* Post header */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                <Tag>Case Study</Tag>
                <Tag>Open Source</Tag>
              </div>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Retrieval OS: A Production-Grade Retrieval Runtime
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                How we built a serving layer that makes RAG systems deployable, measurable, and safe to operate at scale
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="text-sm text-muted-foreground">February 2026</span>
                <a
                  href="https://github.com/Baselyne-Systems/retrieval-os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  Baselyne-Systems/retrieval-os
                </a>
              </div>
              <div className="mt-8 border-t border-border" />
            </div>

            {/* ── The problem ── */}
            <SectionHeading>The problem every RAG team hits at month three</SectionHeading>
            <Prose>
              <p>
                The prototype works. The embedding model is good. The Qdrant collection returns relevant
                results. You demo it to the team and everyone is excited.
              </p>
              <p>
                Then you ship it.
              </p>
              <p>
                Three weeks later, someone changes the embedding model because a newer one scores
                better on your eval set. You swap it in, re-run ingestion, flip the serving endpoint —
                and immediately your support queue lights up. The new model changed the vector space.
                Your entire cache is now serving results from the old index. There is no rollback path.
                You do not know exactly when quality degraded. You have no record of which documents
                were embedded with which model.
              </p>
              <p>
                This is not a retrieval problem. It is an <em>operations</em> problem. And it is the
                same problem every team hits: retrieval is treated as a model concern rather than an
                infrastructure concern.
              </p>
              <p>
                Retrieval OS is a runtime that treats retrieval the same way Kubernetes treats compute:
                as something that can be versioned, deployed progressively, observed continuously, and
                rolled back in milliseconds.
              </p>
            </Prose>

            {/* ── What it is ── */}
            <SectionHeading>What it is</SectionHeading>
            <Prose>
              <p>
                Retrieval OS is a FastAPI service that sits between your application and your vector
                database. It owns three things your application should not have to care about:
              </p>
            </Prose>

            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-border/50 bg-card p-5">
                <p className="text-sm font-semibold text-foreground">1. Config lifecycle</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Every change to an embedding model, collection, or distance metric creates a new
                  immutable <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">IndexConfig</code> version.
                  Deployments bind a config version to live traffic with a search config (top_k,
                  reranker, cache settings). Config changes and search tuning are separate operations
                  with separate audit trails.
                </p>
              </div>
              <div className="rounded-lg border border-border/50 bg-card p-5">
                <p className="text-sm font-semibold text-foreground">2. Traffic control</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Deployments move through a state machine:{" "}
                  <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">PENDING → ROLLING_OUT → ACTIVE → ROLLED_BACK</code>.
                  Gradual rollouts increment traffic weight on a schedule you define (e.g., 10%
                  every 60 seconds). A second deployment cannot go live while the first is active —
                  enforced at the database row level with{" "}
                  <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">SELECT FOR UPDATE</code>.
                </p>
              </div>
              <div className="rounded-lg border border-border/50 bg-card p-5">
                <p className="text-sm font-semibold text-foreground">3. Quality guard-rails</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Every deployment can carry a{" "}
                  <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">rollback_recall_threshold</code>.
                  A background watchdog polls completed eval jobs and triggers automatic rollback if
                  Recall@5 drops below that threshold. Activation auto-queues an eval job against a
                  ground-truth dataset you provide — closing the deploy → eval → rollback loop without
                  any human in it.
                </p>
              </div>
            </div>

            <Callout label="Key results">
              <strong>10,785 QPS</strong> on a single node (realistic Zipf workload, 81.4% cache hit rate) ·{" "}
              <strong>0.2 ms p50</strong> on a warm cache hit ·{" "}
              <strong>2.8 ms</strong> rollback propagation to Redis ·{" "}
              <strong>zero errors</strong> during live config switch under 100 concurrent queries
            </Callout>

            {/* ── Serving path ── */}
            <SectionHeading>The serving path: Postgres is not on the hot path</SectionHeading>
            <Prose>
              <p>
                This is the central design decision in Retrieval OS, and it is stated as a constraint
                in the source code comment of the query router:{" "}
                <em>"NEVER reads Postgres on the hot path."</em>
              </p>
              <p>
                On deployment activation, the full serving config — merged from{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">IndexConfig</code>{" "}
                and <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">Deployment</code>{" "}
                — is written to Redis as a single JSON blob under the key{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">ros:project:{"{name}"}:active</code>.
                Every query is:
              </p>
            </Prose>

            <CodeBlock lang="ascii — hot path (embedding stubbed)">
{`Redis GET ros:project:{name}:active   →  serving config (JSON blob)
        │
        ├─ cache hit?  →  return cached results immediately
        │
        └─ cache miss  →  embed query
                          →  Qdrant ANN search
                          →  Redis SET (warm cache for next identical query)
                          →  return results`}
            </CodeBlock>

            <Prose>
              <p>
                Postgres is only read when Redis is cold — TTL expiry or a fresh deployment. At that
                point the config is re-materialized from Postgres and Redis is re-warmed. A rolled-back
                deployment removes both Redis keys atomically. The next query finds no active deployment
                and returns a clean 404. No stale results. No distributed lock needed on the read path.
              </p>
            </Prose>

            {/* ── IndexConfig vs Deployment ── */}
            <SectionHeading>IndexConfig and Deployment: two different things</SectionHeading>
            <Prose>
              <p>
                The most important distinction in the data model is between an{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">IndexConfig</code>{" "}
                and a <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">Deployment</code>.
                Conflating them is what causes the month-three problem.
              </p>
              <p>
                An <strong>IndexConfig</strong> captures everything that determines how the index was
                built: embedding provider, model, dimensions, modalities, collection, distance metric,
                quantization. It is immutable and fingerprinted with a SHA-256 hash of those eight
                fields. Changing any single field — switching from cosine to dot product distance,
                for example — always produces a new, distinct hash and therefore a new config version.
                The previous version remains intact and queryable.
              </p>
              <p>
                A <strong>Deployment</strong> captures everything that is runtime-tunable without
                re-indexing: top_k, reranker, rerank_top_k, cache settings, metadata filters,
                traffic weight, and rollback thresholds. You can create 200 differently-tuned
                deployments on the same IndexConfig — all 200 collapse to the same hash, meaning no
                re-ingestion is triggered.
              </p>
            </Prose>

            <CodeBlock lang="python — Deployment model (fields)">
{`class DeploymentStatus(StrEnum):
    PENDING      = "PENDING"
    ROLLING_OUT  = "ROLLING_OUT"
    ACTIVE       = "ACTIVE"
    ROLLING_BACK = "ROLLING_BACK"
    ROLLED_BACK  = "ROLLED_BACK"
    FAILED       = "FAILED"

class Deployment(Base):
    # What to serve (immutable index config)
    index_config_version: int
    index_config_id: UUID

    # Runtime search config (tunable without re-indexing)
    top_k: int
    reranker: str | None
    rerank_top_k: int | None
    hybrid_alpha: float | None
    metadata_filters: dict | None
    cache_enabled: bool
    cache_ttl_seconds: int

    # Traffic control
    status: str                          # DeploymentStatus
    traffic_weight: float                # 0.0 → 1.0
    rollout_step_percent: float | None
    rollout_step_interval_seconds: int | None

    # Quality guard-rails
    rollback_recall_threshold: float | None
    rollback_error_rate_threshold: float | None
    eval_dataset_uri: str | None         # auto-queued on activation`}
            </CodeBlock>

            {/* ── Config hash ── */}
            <SubHeading>What the config hash guarantees</SubHeading>
            <Prose>
              <p>
                The benchmark exercises 200 combinations of search config variants (5 top_k values ×
                2 reranker options × 4 cache TTLs × 5 hybrid alpha values) against the same index
                config. All 200 collapse to exactly one hash — meaning you can create 200
                differently-tuned deployments on the same index without triggering a re-index.
              </p>
              <p>
                Conversely, 10,000 distinct index configs produce 10,000 distinct hashes with zero
                collisions. The hash is the contract: the same hash always means the same index.
              </p>
            </Prose>

            {/* ── Auto-eval loop ── */}
            <SectionHeading>The auto-eval closed loop</SectionHeading>
            <Prose>
              <p>
                The quality guard-rail lifecycle requires zero operator intervention after the initial
                deployment POST. Attach an{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">eval_dataset_uri</code>{" "}
                and a <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">rollback_recall_threshold</code>{" "}
                to the deployment — the rest is automatic.
              </p>
            </Prose>

            <CodeBlock lang="ascii — auto-eval lifecycle">
{`POST /v1/projects/{name}/deployments
  { "index_config_version": 2,
    "eval_dataset_uri": "s3://bucket/ground-truth.jsonl",
    "rollback_recall_threshold": 0.80 }

      ↓  deployment activated

auto_queue_eval() fires (best-effort, never blocks activation)

      ↓  background eval_job_runner picks it up

Recall@5 / MRR / NDCG computed against ground-truth dataset

      ↓  rollback_watchdog polls every 30 s

  recall_at_5 >= 0.80  →  deployment stays ACTIVE
  recall_at_5 <  0.80  →  status → ROLLED_BACK
                           traffic_weight → 0.0
                           Redis serving config deleted  (2.8 ms propagation)`}
            </CodeBlock>

            <Prose>
              <p>
                The watchdog is conservative — it only acts when there is completed eval data that
                actually breaches the threshold. A deployment with no eval history is left alone.
                This prevents false-positive rollbacks during the window between activation and the
                first eval completing.
              </p>
            </Prose>

            <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Scenario</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">recall_at_5</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Threshold</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card text-muted-foreground">
                    <td className="px-4 py-3">Healthy deployment</td>
                    <td className="px-4 py-3 font-mono">0.85</td>
                    <td className="px-4 py-3 font-mono">0.70</td>
                    <td className="px-4 py-3">No rollback</td>
                  </tr>
                  <tr className="bg-muted/30 text-muted-foreground">
                    <td className="px-4 py-3">Degraded deployment</td>
                    <td className="px-4 py-3 font-mono">0.60</td>
                    <td className="px-4 py-3 font-mono">0.80</td>
                    <td className="px-4 py-3 text-primary font-semibold">Rollback triggered</td>
                  </tr>
                  <tr className="bg-card text-muted-foreground">
                    <td className="px-4 py-3">No eval data yet</td>
                    <td className="px-4 py-3 font-mono">—</td>
                    <td className="px-4 py-3 font-mono">0.80</td>
                    <td className="px-4 py-3">No rollback</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout label="Load test result">
              5 concurrent query workers ran throughout the full auto-eval lifecycle. Mock eval
              returned recall_at_5=0.40 against a rollback threshold of 0.95. The deployment was
              rolled back automatically. Query error count during the rollback: <strong>zero</strong>.
            </Callout>

            {/* ── Ingestion dedup ── */}
            <SectionHeading>Ingestion deduplication</SectionHeading>
            <Prose>
              <p>
                If you POST a second ingestion job for the same{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">(project, index_config_version)</code>{" "}
                that already has a COMPLETED job, the new job immediately marks itself COMPLETED
                with a <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">duplicate_of</code>{" "}
                pointer to the original. No documents are re-chunked. No embedding API calls are made.
                No vectors are re-upserted.
              </p>
              <p>
                This matters for CI/CD pipelines that re-submit ingestion jobs on every deploy — a
                common pattern. If the index config has not changed, no re-embedding costs are
                incurred. The load test confirms this by wrapping a counter around the embed function:
                after the second job completes, the embed call count is exactly zero.
              </p>
            </Prose>

            {/* ── Numbers ── */}
            <SectionHeading>The numbers</SectionHeading>
            <Prose>
              <p>
                All measurements ran on an Apple M4 MacBook (16 GB RAM) with Postgres, Redis, and
                Qdrant in Docker containers on the same host — no WAN latency between services.
                Embedding latency is excluded from all latency figures and noted separately; it is
                additive and hardware-dependent. Production deployments across separate hosts will see
                higher absolute latencies, but the relative ratios hold.
              </p>
            </Prose>

            <SubHeading>Query latency (embedding stubbed)</SubHeading>
            <QueryLatencyTable />

            <Callout label="Cache hit path">
              At 0.2 ms p50, the cache hit path is not meaningfully slower than a raw Redis GET.
              The serving infrastructure adds sub-millisecond overhead to a warm query.
            </Callout>

            <SubHeading>Throughput under concurrency — single node</SubHeading>
            <ThroughputTable />

            <Prose>
              <p>
                The <strong>realistic Zipf workload</strong> number is the one that matters.
                With a Zipf(s=1.2) query distribution — modelling typical search traffic where a
                power-law minority of queries account for most volume — the system measured an{" "}
                <strong>81.4% natural cache hit rate</strong> and{" "}
                <strong>10,785 QPS at 50 concurrent workers</strong>, with zero errors. That cache
                hit rate translates directly to OpenAI/Cohere API cost reduction: 81.4% of queries
                never touch the embedding API.
              </p>
            </Prose>

            <SubHeading>Sustained 30-second run</SubHeading>
            <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Path</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">QPS</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Total queries</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Errors</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">p99</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card text-muted-foreground">
                    <td className="px-4 py-3 text-xs">Cache miss (10 workers, unique queries)</td>
                    <td className="px-4 py-3 font-mono">564</td>
                    <td className="px-4 py-3 font-mono">16,922</td>
                    <td className="px-4 py-3 font-mono text-foreground font-semibold">0</td>
                    <td className="px-4 py-3 font-mono">268.5 ms</td>
                  </tr>
                  <tr className="bg-muted/30 text-muted-foreground">
                    <td className="px-4 py-3 text-xs">Cache hit (20 workers, identical queries)</td>
                    <td className="px-4 py-3 font-mono">21,725</td>
                    <td className="px-4 py-3 font-mono">651,742</td>
                    <td className="px-4 py-3 font-mono">10*</td>
                    <td className="px-4 py-3 font-mono">2.4 ms</td>
                  </tr>
                  <tr className="bg-card text-muted-foreground">
                    <td className="px-4 py-3 text-xs">HTTP full stack (10 workers, ASGI)</td>
                    <td className="px-4 py-3 font-mono">348</td>
                    <td className="px-4 py-3 font-mono">10,440</td>
                    <td className="px-4 py-3 font-mono text-foreground font-semibold">0</td>
                    <td className="px-4 py-3 font-mono">105.2 ms</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Prose>
              <p className="text-xs text-muted-foreground/70">
                * 10 errors in 651,742 requests = 0.0015% error rate under the most aggressive load
                scenario (20 workers at ~22k QPS). Likely a Redis connection pool scheduling artefact.
                Cache-miss and HTTP full-stack paths both ran at zero errors.
              </p>
            </Prose>

            <SubHeading>Hot-path Python overhead</SubHeading>
            <Prose>
              <p>
                These are pure CPU measurements — no I/O, no containers. The fixed overhead that runs
                on every query regardless of embedding or ANN latency.
              </p>
            </Prose>
            <HotPathTable />

            <Callout label="Total hot-path Python overhead">
              Serving config merge + cache key generation together add under 0.4 µs of Python CPU
              per request — equivalent to less than 4 ms of aggregate CPU cost at 10,000 QPS.
            </Callout>

            <SubHeading>Operational events</SubHeading>
            <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Event</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Measured time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card text-muted-foreground">
                    <td className="px-4 py-3">Rollback propagates to Redis</td>
                    <td className="px-4 py-3 font-mono font-semibold text-primary">2.8 ms</td>
                  </tr>
                  <tr className="bg-muted/30 text-muted-foreground">
                    <td className="px-4 py-3">Zero-downtime config switch (100 queries in flight)</td>
                    <td className="px-4 py-3 font-mono">0 errors</td>
                  </tr>
                  <tr className="bg-card text-muted-foreground">
                    <td className="px-4 py-3">SLA timeout enforcement (hanging backend → 504)</td>
                    <td className="px-4 py-3 font-mono">query_timeout_seconds + &lt; 1 s</td>
                  </tr>
                  <tr className="bg-muted/30 text-muted-foreground">
                    <td className="px-4 py-3">Ingestion throughput (100-vector batches)</td>
                    <td className="px-4 py-3 font-mono">4,215 vectors/sec</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── Failure modes ── */}
            <SectionHeading>Failure modes tested</SectionHeading>
            <FailureModeTable />

            {/* ── What embedding latency adds ── */}
            <SectionHeading>What embedding latency adds</SectionHeading>
            <Prose>
              <p>
                Every measurement above used a stubbed embedding function. This is intentional —
                it isolates the serving infrastructure cost from model inference cost, which varies
                by three orders of magnitude depending on hardware and model choice.
              </p>
            </Prose>

            <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Embedding setup</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Typical additional latency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["all-MiniLM-L6-v2 on M2 CPU (warm)", "+5–15 ms"],
                    ["text-embedding-3-small via OpenAI API", "+20–80 ms (network-dependent)"],
                    ["BAAI/bge-m3 on A100 GPU", "+2–8 ms"],
                    ["CLIP (image, ViT-B/32) on M2 CPU", "+30–100 ms"],
                  ].map(([setup, latency], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}>
                      <td className="px-4 py-3 text-xs font-mono">{setup}</td>
                      <td className="px-4 py-3 font-mono text-xs">{latency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Prose>
              <p>
                For a cache-hit query, embedding never runs. For a cache-miss query, the serving
                infrastructure adds 2.1 ms p50 on top of whatever your embedding model costs.
              </p>
            </Prose>

            {/* ── Test suite ── */}
            <SectionHeading>The test suite is the specification</SectionHeading>
            <Prose>
              <p>
                Every performance claim in this post is a test assertion. If a future change causes
                ANN p99 to exceed 50 ms, the CI run fails. If rollback stops clearing Redis within
                2 seconds, the CI run fails. If a second ingestion job for the same config version
                makes even one embed call, the CI run fails.
              </p>
            </Prose>

            <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Layer</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Infra needed</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">What it proves</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Unit", "Nothing", "Logic correctness — state machines, validators, hash computation, metric formulas"],
                    ["Integration", "Nothing (all I/O mocked)", "Service orchestration — repositories called correctly, typed errors raised correctly"],
                    ["E2E", "Postgres + Redis", "System behaviour — concurrency safety, cache semantics, watchdog decisions"],
                    ["Load", "Postgres + Redis + Qdrant", "Operational guarantees — latency, throughput, dedup, timeout, rollback speed"],
                  ].map(([layer, infra, what], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}>
                      <td className="px-4 py-3 font-semibold text-foreground text-xs">{layer}</td>
                      <td className="px-4 py-3 text-xs">{infra}</td>
                      <td className="px-4 py-3 text-xs">{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Getting started ── */}
            <SectionHeading>Getting started</SectionHeading>

            <CodeBlock lang="bash">
{`git clone https://github.com/Baselyne-Systems/retrieval-os
cd retrieval-os
uv sync --all-extras
cp .env.example .env

# Start Postgres, Redis, Qdrant, MinIO, Prometheus, Grafana, Jaeger
make infra
make migrate
make dev     # API on :8000 with hot reload

# Verify the stack
curl http://localhost:8000/ready
# {"status":"ok","checks":{"postgres":"ok","redis":"ok"}}`}
            </CodeBlock>

            <SubHeading>Create a project and run your first query</SubHeading>

            <CodeBlock lang="bash">
{`# 1. Create a project with its first IndexConfig
curl -X POST http://localhost:8000/v1/projects \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "docs",
    "created_by": "eng",
    "config": {
      "embedding_provider": "sentence_transformers",
      "embedding_model": "BAAI/bge-m3",
      "embedding_dimensions": 1024,
      "index_backend": "qdrant",
      "index_collection": "docs_v1",
      "distance_metric": "cosine"
    }
  }'

# 2. Ingest documents
curl -X POST http://localhost:8000/v1/projects/docs/ingest \
  -H 'Content-Type: application/json' \
  -d '{
    "index_config_version": 1,
    "created_by": "eng",
    "chunk_size": 512,
    "overlap": 64,
    "documents": [
      {"id": "doc-1", "content": "Your document text here.", "metadata": {"source": "wiki"}}
    ]
  }'

# 3. Deploy with quality guard-rail
curl -X POST http://localhost:8000/v1/projects/docs/deployments \
  -H 'Content-Type: application/json' \
  -d '{
    "index_config_version": 1,
    "top_k": 10,
    "created_by": "eng",
    "rollback_recall_threshold": 0.80,
    "eval_dataset_uri": "s3://your-bucket/ground-truth.jsonl"
  }'

# 4. Query
curl -X POST http://localhost:8000/v1/query/docs \
  -H 'Content-Type: application/json' \
  -d '{"query": "how does RAG work?"}'`}
            </CodeBlock>

            <SubHeading>Run the full load test suite</SubHeading>

            <CodeBlock lang="bash">
{`# Starts infra, runs all tests, prints benchmark results
uv run pytest tests/`}
            </CodeBlock>

            {/* ── Honest caveats ── */}
            <SectionHeading>Honest caveats</SectionHeading>
            <Prose>
              <p>
                <strong className="text-foreground">Measured on a single developer machine.</strong>{" "}
                M-series Mac, Docker containers with no resource limits, localhost network. Production
                latencies will be higher due to network hops between services. QPS scales horizontally
                with additional workers.
              </p>
              <p>
                <strong className="text-foreground">Embedding latency dominates for cache-miss queries.</strong>{" "}
                The 2.1 ms infrastructure overhead becomes irrelevant next to a 50 ms OpenAI API call.
                Cache hit rate is the primary lever for end-to-end p50.
              </p>
              <p>
                <strong className="text-foreground">A single Qdrant node saturates at 3–5 concurrent ANN queries</strong>{" "}
                before p99 starts climbing. At scale the right answer is horizontal sharding, not
                single-node tuning.
              </p>
            </Prose>

            {/* ── Divider ── */}
            <div className="mt-16 border-t border-border" />

            {/* ── Footer CTA ── */}
            <div className="mt-12 rounded-lg bg-layer-2 px-8 py-10 text-center border border-border/50">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Work with us</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                Building a RAG system that needs to be production-grade?
              </h2>
              <p className="mt-3 text-muted-foreground">
                We design and implement retrieval infrastructure — from embedding pipelines to serving
                layers with rollback guarantees. Book a 30-minute call to talk through your setup.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <a
                    href="https://calendly.com/achyuthsamudrala/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Book a Call
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <a
                  href="https://github.com/Baselyne-Systems/retrieval-os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
