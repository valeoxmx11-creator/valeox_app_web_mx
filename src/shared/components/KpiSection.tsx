'use client'

import { useState } from 'react'
import { KpiAggregate } from '@/shared/types'

interface Props {
  primary: KpiAggregate[]
  all: KpiAggregate[]
}

export function KpiSection({ primary, all }: Props) {
  const [expanded, setExpanded] = useState(false)
  const list = expanded ? all : primary

  if (!all.length) {
    return (
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Indicadores globales</p>
          <h2>Indicadores en preparación</h2>
          <p className="muted">Aún no hay contribuciones KPI publicadas. La evidencia aparecerá automáticamente cuando se publiquen proyectos con impactos medibles.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="section section-soft">
      <div className="container">
        <p className="eyebrow">Indicadores globales</p>
        <h2>Evidencia operacional consolidada</h2>
        <div className="grid grid-3">
          {list.map((item) => (
            <article key={item.key} className="card">
              <h3>{item.label}</h3>
              <p><strong>{item.value.toLocaleString('es-MX')}</strong> {item.unit ?? ''}</p>
              {item.context ? <p className="muted">{item.context}</p> : null}
            </article>
          ))}
        </div>
        {all.length > primary.length ? (
          <button className="btn btn-secondary" onClick={() => setExpanded((v) => !v)} style={{ marginTop: '1rem' }}>
            {expanded ? 'Ver menos indicadores' : 'Ver todos los indicadores'}
          </button>
        ) : null}
      </div>
    </section>
  )
}
