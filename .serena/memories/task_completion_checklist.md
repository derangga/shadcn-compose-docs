# Task Completion Checklist

After completing a coding task, verify:

1. **Type Safety**: Run `bun run build` to check for TypeScript errors (vue-tsc)
2. **Visual Check**: If possible, verify with `bun run dev` that the changes render correctly
3. **No Linter/Formatter**: The project has no linting or formatting tools configured — just ensure consistent style with existing code
4. **No Tests**: No test framework is set up — no tests to run
5. **Route Registration**: If adding a new page, ensure the route is added to `src/router/index.ts`
6. **Global Components**: If adding a new markdown-embeddable component, register it in `src/main.ts`
