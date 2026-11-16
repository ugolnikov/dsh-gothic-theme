# dsh-gothic-theme

A gothic theme for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web UI.

- **Palette:** black, grey and burgundy — near-black surfaces, bone text, oxblood/burgundy primary buttons (including the composer send button), muted red links and accents. A parchment-grey light variant ships for the light appearance.
- **Brand mark:** the fish logo is replaced by a gothic window emblem — pointed arch, rose and mullion, drawn as SVG on `currentColor`.
- **Decorations:** small crosses after session times, and the same window emblem on the blank-session welcome screen.
- Works with the built-in Appearance switch (light / dark / system); no fonts or assets are downloaded.

<img alt="Gothic palette" src="icon.svg" width="72" height="72">

## Install

The plugin is a Cordis bundle (`dsh.bundle.patch` + a Web client half). Install the package directory into a profile:

```bash
dsh plugin --profile web add https://github.com/ugolnikov/dsh-gothic-theme
```

Or add it through the Plugin Hub / Plugin Manager by its GitHub source URL. After installation the theme applies immediately; the Appearance preference stays on `light`/`dark`/`system` and the theme supplies both palettes' values.

## What it changes

- 82 `--dsw-*` design tokens, through `ctx.theme.overrideTokens` — the base theme is untouched and uninstalling the bundle restores the default look.
- `sidebar.brand.mark`, `sidebar.brand.name` and `conversation.hero.brand.mark`: the gothic window emblem (single slots). To free the sidebar brand slots the bundle patch disables the shipped `ui-brand-official` row and supplies its own serif wordmark. **Installing this plugin therefore replaces the official brand artwork**; uninstalling the bundle restores it.
- `sidebar.session.row.trailing`: a small cross after each Session row's time label.

## Compatibility

- DSH Web profile with `@deepseek-ai/dsh-client-ui-theme` (provides the `theme` service).
- The client half registers into `sidebar.brand.mark`, `sidebar.brand.name`, `conversation.hero.brand.mark` and `sidebar.session.row.trailing`; single-slot claims are guarded, so a conflicting occupant is kept instead of breaking the theme.

## License

MIT — see [LICENSE](./LICENSE).
