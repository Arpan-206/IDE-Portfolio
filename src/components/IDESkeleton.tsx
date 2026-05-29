import { theme } from "@/lib/theme";

export default function IDESkeleton() {
  return (
    <div
      className="h-screen w-screen p-4 md:p-6"
      style={{
        background: theme.bgPanel,
      }}
    >
      <div
        className="h-full w-full flex flex-col overflow-hidden rounded-xl animate-pulse"
        style={{
          background: theme.bg,
          color: theme.text,
          fontFamily: "JetBrains Mono, monospace",
          border: `1px solid ${theme.border}`,
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
        }}
      >
        {/* Toolbar */}
        <div
          className="h-12 border-b px-4 flex items-center gap-3"
          style={{
            background: theme.bgPanel,
            borderColor: theme.border,
          }}
        >
          <div className="w-8 h-6 rounded" style={{ background: theme.border }} />
          <div className="w-20 h-6 rounded" style={{ background: theme.border }} />
          <div className="flex-1" />
          <div className="w-6 h-6 rounded" style={{ background: theme.border }} />
          <div className="w-6 h-6 rounded" style={{ background: theme.border }} />
        </div>

        {/* Main content area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div
            className="w-48 border-r p-4 space-y-2"
            style={{
              background: theme.bgPanel,
              borderColor: theme.border,
            }}
          >
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div
                  className="w-full h-5 rounded"
                  style={{ background: theme.border }}
                />
              </div>
            ))}
          </div>

          {/* Editor area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Tab bar */}
            <div
              className="h-10 border-b px-4 flex items-center gap-2"
              style={{
                background: theme.bgPanel,
                borderColor: theme.border,
              }}
            >
              <div
                className="px-3 h-6 rounded"
                style={{ background: theme.border }}
              />
              <div
                className="px-3 h-6 rounded"
                style={{ background: theme.border }}
              />
            </div>

            {/* Breadcrumb */}
            <div
              className="h-8 border-b px-4 flex items-center"
              style={{
                background: theme.bg,
                borderColor: theme.border,
              }}
            >
              <div
                className="w-40 h-4 rounded"
                style={{ background: theme.border }}
              />
            </div>

            {/* Editor content - shimmer grid pattern */}
            <div className="flex-1 overflow-hidden p-4">
              <div className="space-y-2">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="h-5 rounded"
                    style={{
                      background: theme.border,
                      width: `${Math.random() * 40 + 60}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div
          className="h-8 border-t px-4 flex items-center justify-between text-xs"
          style={{
            background: theme.bgPanel,
            borderColor: theme.border,
          }}
        >
          <div className="w-32 h-4 rounded" style={{ background: theme.border }} />
          <div className="w-40 h-4 rounded" style={{ background: theme.border }} />
        </div>
      </div>
    </div>
  );
}
