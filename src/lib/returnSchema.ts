const exampleConfig = {
  ["checkpoint_timeout"]: "15min",
  ["checkpoint_completion_target"]: 0.9,
  ["wal_compression"]: "on",
  ["wal_buffers"]: -1,
  ["wal_writer_delay"]: "200ms",
  ["wal_writer_flush_after"]: "1MB",
  ["shared_preload_libraries"]: "'pg_stat_statements'",
  ["track_io_timing"]: "on",
  ["track_functions"]: "pl",
  ["max_worker_processes"]: 8,
  ["max_parallel_workers_per_gather"]: 2,
  ["max_parallel_workers"]: 8,
  ["bgwriter_delay"]: "200ms",
  ["bgwriter_lru_maxpages"]: 100,
  ["bgwriter_lru_multiplier"]: 2.0,
  ["bgwriter_flush_after"]: 0,
  ["enable_partitionwise_join"]: "on",
  ["enable_partitionwise_aggregate"]: "on",
  ["jit"]: "on",
  ["track_wal_io_timing"]: "on",
  ["wal_recycle"]: "on",
  ["max_slot_wal_keep_size"]: "1GB",
  ["archive_mode"]: "on", // optional
  ["archive_command"]: "/bin/true", // optional
  ["min_wal_size"]: "1GB",
  ["max_wal_size"]: "4GB",
  ["max_parallel_maintenance_workers"]: 2,
  ["wal_level"]: "minimal", // optional
  ["max_wal_senders"]: 0,
  ["max_connections"]: 100,
  ["superuser_reserved_connections"]: 3,
  ["shared_buffers"]: "1GB",
  ["effective_cache_size"]: "3GB",
  ["maintenance_work_mem"]: "256MB",
  ["huge_pages"]: "try",
  ["default_statistics_target"]: 100,
  ["random_page_cost"]: 1.1,
  ["wal_keep_size"]: "3GB",
  ["effective_io_concurrency"]: 200,
  ["work_mem"]: "16MB",
};

export const exampleWarnings = [
  "WARNING this tool not being optimal for very high memory systems",
];

export const exampleResponse = {
  config: exampleConfig,
  warnings: exampleWarnings,
};
