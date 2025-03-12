import React from 'react'
import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Header = () => {
    return (
        <div className='fixed top-0'>
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}

export default Header
