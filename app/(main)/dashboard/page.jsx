import React from 'react'
import CreateAccountDrawer from '@/components/customComponents/createAccountDrawer'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'

const DashboardPage = () => {
    return (
        <div className='px-5'>
            {/* Budget Progress */}

            {/* Dashboard Overview */}

            {/* Accounts Grid */}
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {/* below is reuseable component (kind of popup for further actions) */}
                <CreateAccountDrawer>
                    <Card className="hover:shadow-xl shadow-neutal-400/30 transition-shadow cursor-pointer">
                        <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
                            <Plus className='h-10 w-10 mb-2' />
                            <p className='text-sm font-medium'>Add New Account</p>
                        </CardContent>
                    </Card>
                </CreateAccountDrawer>
            </div>
        </div>
    )
}

export default DashboardPage
