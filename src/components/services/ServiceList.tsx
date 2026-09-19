import React from 'react'
import { ServiceCard, type ServiceItemData } from './ServiceCard'

export const ServiceList: React.FC<{ services: ServiceItemData[] }> = ({ services }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        maxWidth: '1240px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {services.map((service) => (
        <ServiceCard key={service.number} service={service} />
      ))}
    </div>
  )
}
