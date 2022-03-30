import React, { Suspense } from 'react'
import { renderRoutes } from "react-router-config";
import BackButtonHeader from '../../Components/BackButtonHeader/BackButtonHeader'
const Fallback = () => {
  return <h1>Loading</h1>
}
const Guest = (props) => {
  const { route } = props
  return (
    <>
     <BackButtonHeader/>
      <Suspense fallback={<Fallback />}>
        {renderRoutes(route.routes)}
      </Suspense>

    </>
  )
}

export default Guest
