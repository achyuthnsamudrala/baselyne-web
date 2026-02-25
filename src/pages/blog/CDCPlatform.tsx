import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

// ─── Small helpers ────────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 text-2xl font-semibold text-foreground">{children}</h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 text-lg font-semibold text-foreground">{children}</h3>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">{children}</div>;
}

function CodeBlock({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative mt-6 rounded-lg overflow-hidden border border-border/50">
      <div className="flex items-center justify-between bg-[#161b22] px-4 py-2 border-b border-border/50">
        <span className="text-xs font-mono text-[#8b949e]">{lang}</span>
      </div>
      <pre className="overflow-x-auto bg-[#0d1117] p-4 text-sm text-[#e6edf3] font-mono leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Callout({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{label}</p>
      <div className="text-sm text-foreground">{children}</div>
    </div>
  );
}

// ─── Benchmark tables ─────────────────────────────────────────────────────────

function BenchmarkTable() {
  const rows = [
    { workers: 1, batchSize: 1000, msgS: "3,800", p99: "26 ms", cpu: "18%", highlight: false },
    { workers: 2, batchSize: 1000, msgS: "7,500", p99: "28 ms", cpu: "34%", highlight: false },
    { workers: 4, batchSize: 1000, msgS: "14,200", p99: "31 ms", cpu: "61%", highlight: false },
    { workers: 8, batchSize: 1000, msgS: "24,900", p99: "38 ms", cpu: "89%", highlight: false },
    { workers: 4, batchSize: 5000, msgS: "31,400", p99: "42 ms", cpu: "67%", highlight: false },
    { workers: 8, batchSize: 5000, msgS: "38,100", p99: "47 ms", cpu: "91%", highlight: true },
  ];

  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Workers</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Batch size</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Throughput (msg/s)</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">p99 latency</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">CPU</th>
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
              <td className="px-4 py-3">{row.workers}</td>
              <td className="px-4 py-3">{row.batchSize.toLocaleString()}</td>
              <td className="px-4 py-3 font-mono">
                {row.highlight ? (
                  <span className="text-primary font-semibold">{row.msgS}</span>
                ) : (
                  row.msgS
                )}
              </td>
              <td className="px-4 py-3 font-mono">{row.p99}</td>
              <td className="px-4 py-3 font-mono">{row.cpu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FailureModeTable() {
  const rows = [
    { scenario: "Kafka broker restart", behaviour: "Consumer reconnects, zero message loss", tested: true },
    { scenario: "S3 write timeout", behaviour: "Retry with exponential backoff, DLQ after 3 failures", tested: true },
    { scenario: "Schema change (new column)", behaviour: "Auto-detected, schema registry updated, downstream continues", tested: true },
    { scenario: "Debezium connector crash", behaviour: "Offset committed to Kafka — replay from last checkpoint on restart", tested: true },
    { scenario: "Consumer group lag spike", behaviour: "Horizontal scaling: add workers without restart", tested: true },
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
              className={
                i % 2 === 0
                  ? "bg-card text-muted-foreground"
                  : "bg-muted/30 text-muted-foreground"
              }
            >
              <td className="px-4 py-3 font-mono text-xs">{row.scenario}</td>
              <td className="px-4 py-3">{row.behaviour}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CDCPlatform() {
  return (
    <Layout>
      <SEO
        title="Building a High-Throughput CDC Platform | Baselyne Systems Blog"
        description="How we built a modular CDC pipeline achieving 38,000 msg/s — and proved it with 18 load tests on 100,000+ messages."
        keywords="change data capture, CDC platform, Debezium, Kafka, Apache Iceberg, open source data pipeline"
        canonical="https://baselynesystems.com/blog/cdc-platform"
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
                Building a High-Throughput CDC Platform
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                From database change to lakehouse in milliseconds
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="text-sm text-muted-foreground">February 2026</span>
                <a
                  href="https://github.com/Baselyne-Systems/cdc-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  Baselyne-Systems/cdc-platform
                </a>
              </div>

              <div className="mt-8 border-t border-border" />
            </div>

            {/* ── Introduction ── */}
            <SectionHeading>Why we built this</SectionHeading>
            <Prose>
              <p>
                Change Data Capture is one of those concepts that sounds straightforward until you try to operationalise it.
                The idea is simple: instead of querying a database periodically and hoping you catch everything,
                you read the database's write-ahead log and stream every insert, update, and delete as an event.
                The execution is where things get complicated.
              </p>
              <p>
                We built the Baselyne CDC Platform as a reference implementation — fully open-source — to answer
                a question we kept hearing from clients: <em>"What does a production-grade CDC pipeline actually look like?"</em>
              </p>
              <p>
                This post documents the architecture, the load-testing methodology, and the specific design decisions
                that let us reach 38,000 messages per second without heroics.
              </p>
            </Prose>

            <Callout label="Key result">
              38,000 msg/s sustained throughput · p99 latency under 50 ms · 18 load tests across 100,000+ message batches · zero data loss in all failure scenarios tested
            </Callout>

            {/* ── Architecture ── */}
            <SectionHeading>Architecture overview</SectionHeading>
            <Prose>
              <p>
                The pipeline has four logical layers. Each layer is independently deployable and replaceable —
                a deliberate choice that lets you swap Kafka for Kinesis or Iceberg for Delta Lake without
                touching the rest of the stack.
              </p>
            </Prose>

            <CodeBlock lang="ascii — pipeline topology">
{`┌──────────────┐     WAL      ┌─────────────┐    events    ┌──────────────┐
│  PostgreSQL  │ ──────────▶ │   Debezium  │ ───────────▶ │    Kafka     │
│  (source DB) │  replication │  Connector  │   (topic per │   Cluster    │
└──────────────┘  slot        └─────────────┘    table)     └──────┬───────┘
                                                                    │
                                                            consume │
                                                                    ▼
                                                    ┌───────────────────────┐
                                                    │   CDC Consumer (Go)   │
                                                    │  ┌─────────────────┐  │
                                                    │  │ Schema Registry │  │
                                                    │  │ (Avro / JSON)   │  │
                                                    │  └────────┬────────┘  │
                                                    │           │ validate  │
                                                    │  ┌────────▼────────┐  │
                                                    │  │   Transformer   │  │
                                                    │  │  (field maps,   │  │
                                                    │  │   enrichment)   │  │
                                                    │  └────────┬────────┘  │
                                                    │           │ batch     │
                                                    │  ┌────────▼────────┐  │
                                                    │  │  S3 Writer /    │  │
                                                    │  │ Iceberg sink    │  │
                                                    │  └─────────────────┘  │
                                                    └───────────────────────┘`}
            </CodeBlock>

            <Prose>
              <p>
                Debezium sits on a replication slot, so there's no polling — every committed transaction
                appears as an event within single-digit milliseconds. Events land in a Kafka topic per source
                table, which gives you independent consumer scaling and clean retention policies per dataset.
              </p>
              <p>
                The consumer layer is a Go service we wrote from scratch. We chose Go over Python for the
                consumer because the goroutine model makes it trivial to fan out batch writes to S3 without
                the GIL standing in the way.
              </p>
            </Prose>

            {/* ── Debezium config ── */}
            <SubHeading>Debezium connector configuration</SubHeading>
            <Prose>
              <p>
                A few non-obvious settings that matter at scale:
              </p>
            </Prose>

            <CodeBlock lang="yaml — debezium connector">
{`name: "pg-source-connector"
config:
  connector.class: "io.debezium.connector.postgresql.PostgresConnector"
  database.hostname: "${DB_HOST}"
  database.port: "5432"
  database.user: "${DB_USER}"
  database.password: "${DB_PASSWORD}"
  database.dbname: "${DB_NAME}"
  database.server.name: "baselyne"

  # Use pgoutput (native) — avoids wal2json dependency
  plugin.name: "pgoutput"
  publication.name: "dbz_publication"
  slot.name: "debezium_slot"

  # Capture schema changes alongside data changes
  include.schema.changes: "true"

  # Heartbeat prevents replication slot bloat on idle tables
  heartbeat.interval.ms: "10000"

  # Tombstone events for hard deletes → downstream can compact
  tombstones.on.delete: "true"

  # Batch tuning
  max.batch.size: "2048"
  max.queue.size: "16384"
  poll.interval.ms: "100"`}
            </CodeBlock>

            <Callout label="Why pgoutput over wal2json">
              pgoutput is built into PostgreSQL 10+ and requires no server-side extension. wal2json adds a
              dependency that must be managed across every Postgres upgrade. At the replication throughputs
              we tested, pgoutput also had ~12% lower CPU overhead on the database host.
            </Callout>

            {/* ── Consumer ── */}
            <SubHeading>Consumer design: batching and back-pressure</SubHeading>
            <Prose>
              <p>
                The consumer does three things in sequence: validate against the schema registry,
                transform (field renames, type coercions, enrichment), and write to S3 in Parquet-formatted batches
                that land as Iceberg data files.
              </p>
              <p>
                The key to throughput is the batching strategy. Rather than writing one Parquet file per message,
                we accumulate messages into an in-memory buffer and flush when either a size threshold or a
                time threshold is crossed — whichever comes first.
              </p>
            </Prose>

            <CodeBlock lang="go — batcher core">
{`type Batcher struct {
    buffer   []Event
    mu       sync.Mutex
    maxSize  int
    maxWait  time.Duration
    flushFn  func([]Event) error
    ticker   *time.Ticker
    incoming chan Event
}

func (b *Batcher) run(ctx context.Context) {
    for {
        select {
        case ev := <-b.incoming:
            b.mu.Lock()
            b.buffer = append(b.buffer, ev)
            shouldFlush := len(b.buffer) >= b.maxSize
            b.mu.Unlock()

            if shouldFlush {
                b.flush()
            }

        case <-b.ticker.C:
            b.mu.Lock()
            hasWork := len(b.buffer) > 0
            b.mu.Unlock()

            if hasWork {
                b.flush() // time-based flush — keeps latency bounded
            }

        case <-ctx.Done():
            b.flush() // drain before shutdown
            return
        }
    }
}

func (b *Batcher) flush() {
    b.mu.Lock()
    batch := b.buffer
    b.buffer = make([]Event, 0, b.maxSize)
    b.mu.Unlock()

    if err := b.flushFn(batch); err != nil {
        // route to DLQ, do not block the hot path
        dlq.Send(batch, err)
    }
}`}
            </CodeBlock>

            <Prose>
              <p>
                The time-based flush matters: without it, a quiet period would leave the last partial batch
                sitting in memory indefinitely. With a 500 ms max-wait, end-to-end latency is bounded even
                under low load.
              </p>
            </Prose>

            {/* ── Schema evolution ── */}
            <SubHeading>Schema evolution without downtime</SubHeading>
            <Prose>
              <p>
                One of the hardest parts of CDC in production is handling schema changes. A DBA adds a column
                to a table; ideally, that change flows through to the lakehouse without anyone restarting a service.
              </p>
              <p>
                We handle this with a lightweight schema registry the consumer checks on every message.
                When a schema change is detected (new field, type widening), the consumer:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Writes the current in-flight batch to S3 (preserving the old schema)</li>
                <li>Registers the new schema version</li>
                <li>Updates the Iceberg table schema via the Iceberg catalog API</li>
                <li>Continues consuming with the new schema — no restart required</li>
              </ol>
            </Prose>

            <CodeBlock lang="python — iceberg schema update">
{`from pyiceberg.catalog import load_catalog
from pyiceberg.schema import Schema
from pyiceberg.types import NestedField, StringType

catalog = load_catalog("glue", **catalog_config)
table = catalog.load_table("lakehouse.events")

# Build new schema with the added column
new_schema = Schema(
    *table.schema().fields,
    NestedField(
        field_id=table.schema().highest_field_id + 1,
        name="new_column",
        field_type=StringType(),
        required=False,  # always optional for additive changes
    ),
)

with table.update_schema() as update:
    update.union_by_name(new_schema)

print(f"Schema updated to version {table.schema().schema_id}")`}
            </CodeBlock>

            {/* ── Load testing ── */}
            <SectionHeading>Load testing methodology</SectionHeading>
            <Prose>
              <p>
                We ran 18 distinct load tests across combinations of worker count, batch size, and message
                payload size. Each test ran for 10 minutes at steady state after a 2-minute warmup, processing
                a minimum of 100,000 messages.
              </p>
              <p>
                The test harness is also in the repo — it uses a custom PostgreSQL load generator that
                issues concurrent INSERTs and UPDATEs at a configurable rate, with realistic payload sizes
                drawn from production-shaped distributions.
              </p>
            </Prose>

            <SubHeading>Throughput results</SubHeading>
            <BenchmarkTable />

            <Callout label="Peak result">
              8 workers · batch size 5,000 · <strong>38,100 msg/s</strong> sustained · p99 latency 47 ms
            </Callout>

            <Prose>
              <p>
                Throughput scales near-linearly with worker count up to the point of CPU saturation on the
                consumer host. The jump from batch size 1,000 to 5,000 (with the same worker count) gives
                roughly 25% higher throughput — the S3 PUT overhead amortises across more messages per write.
              </p>
            </Prose>

            {/* ── Failure modes ── */}
            <SectionHeading>Failure modes tested</SectionHeading>
            <Prose>
              <p>
                Throughput numbers mean nothing if the pipeline loses data when something goes wrong.
                We tested five failure scenarios explicitly:
              </p>
            </Prose>

            <FailureModeTable />

            <Prose>
              <p>
                The dead-letter queue (DLQ) is a separate Kafka topic. Failed batches land there with
                full metadata — consumer offset range, error type, timestamp — making it straightforward
                to replay them once the underlying issue (e.g., a transient S3 outage) is resolved.
              </p>
            </Prose>

            {/* ── Deployment ── */}
            <SectionHeading>Deployment</SectionHeading>
            <Prose>
              <p>
                The platform ships with Docker Compose for local development and Kubernetes manifests for
                production. The Kubernetes deployment includes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Horizontal Pod Autoscaler on the consumer deployment (CPU target: 70%)</li>
                <li>PodDisruptionBudget to keep at least one consumer pod available during rollouts</li>
                <li>Prometheus metrics endpoint on <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">:9090/metrics</code> — lag, throughput, error rate</li>
                <li>Grafana dashboard included in the repo</li>
              </ul>
            </Prose>

            <CodeBlock lang="yaml — consumer deployment (excerpt)">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: cdc-consumer
spec:
  replicas: 4
  selector:
    matchLabels:
      app: cdc-consumer
  template:
    spec:
      containers:
        - name: consumer
          image: baselynesystems/cdc-consumer:latest
          env:
            - name: KAFKA_BROKERS
              valueFrom:
                secretKeyRef:
                  name: kafka-credentials
                  key: brokers
            - name: BATCH_SIZE
              value: "5000"
            - name: BATCH_MAX_WAIT_MS
              value: "500"
            - name: WORKER_COUNT
              value: "8"
          resources:
            requests:
              cpu: "500m"
              memory: "512Mi"
            limits:
              cpu: "2"
              memory: "2Gi"
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: cdc-consumer-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: cdc-consumer
  minReplicas: 2
  maxReplicas: 16
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70`}
            </CodeBlock>

            {/* ── What we learned ── */}
            <SectionHeading>What we learned</SectionHeading>
            <Prose>
              <p>
                A few things surprised us during the build:
              </p>
            </Prose>

            <div className="mt-6 space-y-4">
              <Callout label="1. Replication slot pressure is real">
                If the consumer falls significantly behind, the replication slot prevents Postgres from
                reclaiming WAL segments. This causes disk usage to grow on the source database.
                Monitor <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">pg_replication_slots</code> and
                alert on lag exceeding your retention SLO. We set a hard alert at 10 GB of retained WAL.
              </Callout>
              <Callout label="2. S3 multipart uploads change the calculus">
                For Parquet files above ~100 MB, multipart uploads reduce write latency significantly.
                Below that threshold, a single PUT is faster. Tune your batch size target to stay in the
                single-PUT sweet spot unless your message sizes are large.
              </Callout>
              <Callout label="3. Schema registry is not optional">
                We initially tried running without a schema registry by relying on message-embedded schemas.
                Downstream query performance degraded because Iceberg couldn't exploit schema metadata
                for predicate pushdown. The registry pays for itself in query cost within days.
              </Callout>
            </div>

            {/* ── Getting started ── */}
            <SectionHeading>Getting started</SectionHeading>
            <Prose>
              <p>
                The platform is open-source and available on GitHub. To run locally:
              </p>
            </Prose>

            <CodeBlock lang="bash">
{`# Clone the repo
git clone https://github.com/Baselyne-Systems/cdc-platform
cd cdc-platform

# Start the full stack locally (Postgres, Kafka, Debezium, consumer)
docker compose up -d

# Run the load generator against the local stack
make load-test WORKERS=4 BATCH_SIZE=1000 MESSAGES=100000

# View metrics
open http://localhost:3000  # Grafana`}
            </CodeBlock>

            <Prose>
              <p>
                The README includes a detailed guide for connecting to an existing Postgres database,
                configuring the Iceberg catalog (AWS Glue, Hive, or REST), and tuning the consumer
                for your workload.
              </p>
            </Prose>

            {/* ── Divider ── */}
            <div className="mt-16 border-t border-border" />

            {/* ── Footer CTA ── */}
            <div className="mt-12 rounded-lg bg-layer-2 px-8 py-10 text-center border border-border/50">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Work with us</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                Interested in CDC infrastructure for your stack?
              </h2>
              <p className="mt-3 text-muted-foreground">
                We design and implement production-grade data pipelines — from WAL replication to lakehouse.
                Book a 30-minute call to talk through your setup.
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
                  href="https://github.com/Baselyne-Systems/cdc-platform"
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
