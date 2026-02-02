export default function App() {
  const os = (() => {
    if (typeof navigator === 'undefined') return 'Windows'

    const ua = (navigator.userAgent || '').toLowerCase()
    const platform = (navigator.platform || '').toLowerCase()

    if (ua.includes('android')) return 'Android'
    if (platform.includes('mac') || ua.includes('mac os')) return 'MacOS'
    if (platform.includes('win') || ua.includes('windows')) return 'Windows'
    if (platform.includes('linux') || ua.includes('linux')) return 'Linux'

    return 'Windows'
  })()

  return (
    <div className="page" data-name="Канал создан" data-node-id="75:1640">
      <header className="top">
        <div className="brand" data-node-id="76:294">
          <div className="brandIcon" data-node-id="76:295">
            <img
              alt=""
              className="img"
              src="https://www.figma.com/api/mcp/asset/8579efa5-29e8-45df-a51a-3f5da33cb250"
            />
          </div>
          <div className="brandText" data-node-id="76:298">Genesis Core</div>
        </div>

        <button className="btn btnSmall" type="button" data-node-id="77:313">
          Скачать
        </button>
      </header>

      <main className="content">
        <h1 className="title" data-node-id="76:292">
          Genesis WorkSpace
        </h1>
        <p className="subtitle" data-node-id="76:293">
          Живая, адаптивная среда для работы бизнеса.
        </p>

        <div className="primary">
          <button className="btn" type="button" data-node-id="76:290">
            Скачать на {os}
          </button>
          <div className="hint" data-node-id="82:352">
            Скачать на {os}
          </div>
        </div>

        <section className="downloads" data-node-id="78:351">
          <div className="downloadsTitle" data-node-id="77:320">
            Скачать Genesis Workspace на:
          </div>

          <div className="osList" data-node-id="78:350">
            <div className="osItem" data-node-id="78:346">
              <img
                alt=""
                className="osIcon"
                src="https://www.figma.com/api/mcp/asset/2f839e84-fe07-46f6-90b2-8b98383b0580"
              />
              <div className="osText" data-node-id="77:321">Windows</div>
            </div>

            <div className="osItem" data-node-id="78:347">
              <img
                alt=""
                className="osIcon"
                src="https://www.figma.com/api/mcp/asset/638b235d-c160-425c-982a-04c679ee8c44"
              />
              <div className="osText" data-node-id="77:322">MacOS</div>
            </div>

            <div className="osItem" data-node-id="78:348">
              <span className="androidIcon" data-node-id="78:325">
                <img
                  alt=""
                  className="img"
                  src="https://www.figma.com/api/mcp/asset/56e105e0-99c2-44d0-9b0c-e25527168bd5"
                />
                <img
                  alt=""
                  className="androidOverlay"
                  src="https://www.figma.com/api/mcp/asset/ee2fbf78-e6f1-4a85-a986-3d2d9f9b0397"
                />
              </span>
              <div className="osText" data-node-id="77:323">Android</div>
            </div>

            <div className="osItem" data-node-id="78:349">
              <img
                alt=""
                className="osIcon"
                src="https://www.figma.com/api/mcp/asset/c3923ac9-9ab5-4e37-b8a7-6a5faa443309"
              />
              <div className="osText" data-node-id="77:324">Linux</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
