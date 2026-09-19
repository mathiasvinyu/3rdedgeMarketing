import React from 'react'
import { ServiceCard, type ServiceItemData } from './ServiceCard'

export const ServiceList: React.FC<{ services: ServiceItemData[] }> = ({ services }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        maxWidth: '960px',
        margin: '0 auto',
      }}
    >
      {services.map((service) => (
        <ServiceCard key={service.number} service={service} />
      ))}
    </div>
  )
}
