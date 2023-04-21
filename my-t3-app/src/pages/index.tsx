import { SignUpButton } from '@clerk/nextjs'
import React from 'react'


function index() {
  return (
    <div>
      <SignUpButton path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  )
}

export default index
