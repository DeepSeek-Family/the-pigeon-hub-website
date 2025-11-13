import PigeonDatabasePage from '@/components/pigeonDatabase/PigeonDatabasePage'
import React, { Suspense } from 'react'

const PigeonDatabase = () => {
  return (
    <div>
      <Suspense fallback={<div className="p-6">Loading pigeon database...</div>}>
        <PigeonDatabasePage />
      </Suspense>
    </div>
  )
}

export default PigeonDatabase