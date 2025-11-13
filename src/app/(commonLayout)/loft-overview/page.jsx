import PigeonContainer from '@/components/pigeon/PigeonContainer'
import React, { Suspense } from 'react'

const LoftOverview = () => {
  return (
    <div>
      <Suspense fallback={<div className="p-6">Loading loft overview...</div>}>
        <PigeonContainer />
      </Suspense>
    </div>
  )
}

export default LoftOverview