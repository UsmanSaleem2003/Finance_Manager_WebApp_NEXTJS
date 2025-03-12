import React from 'react'
import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'

const Header = () => {
    return (
        <div className='fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b'>
            <nav className='w-full px-4 flex items-center justify-between'>
                <Link href='/'>
                    <Image src={"/logo.png"} alt='logo' height={60} width={200} className='h-24 w-auto object-contain' />
                </Link>

                <div className='flex items-center space-x-4'>
                    <SignedIn>
                        <Link href={"/dashboard"} className='text-gray-600 hover:text-blue-600 flex items-center gap-2'>
                            <Button variant="outline">
                                <LayoutDashboard size={18} />
                                <span className='hidden md:inline'>Dashboard</span>
                            </Button>
                        </Link>

                        <Link href={"/transaction/create"} className='flex items-center gap-2'>
                            <Button>
                                <PenBox size={18} />
                                <span className='hidden md:inline'>Add Transaction</span>
                            </Button>
                        </Link>

                    </SignedIn>

                    <SignedOut>
                        <SignInButton forceRedirectUrl='/dashboard'>
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: { width: '40px', height: '40px' },
                                    avatarImage: { width: '40px', height: '40px' },
                                },
                            }}
                        />
                    </SignedIn>
                </div>
            </nav>
        </div>
    )
}

export default Header
