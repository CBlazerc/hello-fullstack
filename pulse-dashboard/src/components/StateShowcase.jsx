export default function StateShowcase({
  onClearData,
  onRestoreData,
}) {
  return (
    <section className="state-showcase">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Design system</p>
          <h2>Component states</h2>
        </div>

        <span className="documentation-label">
          Documentation
        </span>
      </div>

      <div className="data-controls">
        <div>
          <strong>Table data</strong>
          <p>
            These controls demonstrate the empty state
            without modifying the source data.
          </p>
        </div>

        <div className="data-control-buttons">
          <button
            className="button button-secondary"
            onClick={onClearData}
          >
            Clear data
          </button>

          <button
            className="button button-primary"
            onClick={onRestoreData}
          >
            Restore data
          </button>
        </div>
      </div>

      <div className="showcase-grid">
        <article className="showcase-card">
          <h3>Primary button</h3>

          <div className="state-row">
            <div>
              <span className="state-label">
                Default
              </span>

              <button className="button button-primary">
                Continue
              </button>
            </div>

            <div>
              <span className="state-label">
                Hover
              </span>

              <button className="button button-primary state-hover">
                Continue
              </button>
            </div>

            <div>
              <span className="state-label">
                Focus
              </span>

              <button className="button button-primary state-focus">
                Continue
              </button>
            </div>

            <div>
              <span className="state-label">
                Disabled
              </span>

              <button
                className="button button-primary"
                disabled
              >
                Continue
              </button>
            </div>
          </div>
        </article>

        <article className="showcase-card">
          <h3>Navigation item</h3>

          <div className="showcase-nav">
            <button className="mini-nav-item">
              Overview
            </button>

            <button
              className="mini-nav-item mini-nav-active"
              aria-current="page"
            >
              Overview
            </button>

            <button className="mini-nav-item mini-nav-hover">
              Overview
            </button>
          </div>
        </article>

        <article className="showcase-card">
          <h3>Form input</h3>

          <div className="input-showcase">
            <div>
              <span className="state-label">
                Default
              </span>

              <input
                className="form-input"
                placeholder="Placeholder"
              />
            </div>

            <div>
              <span className="state-label">
                Filled
              </span>

              <input
                className="form-input"
                value="Jordan Davis"
                readOnly
              />
            </div>

            <div>
              <span className="state-label">
                Error
              </span>

              <input
                className="form-input form-input-error"
                value="Invalid value"
                readOnly
                aria-invalid="true"
                aria-describedby="showcase-error"
              />

              <span
                id="showcase-error"
                className="error-message"
              >
                Please enter a valid value.
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}