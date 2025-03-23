import React from 'react'
import CreateAccountDrawer from '@/components/customComponents/createAccountDrawer'

const DashboardPage = () => {
    return (
        <div className='px-5'>
            {/* Budget Progress */}

            {/* Dashboard Overview */}

            {/* Accounts Grid */}
            <div>
                {/* below is reuseable component (kind of popup for further actions) */}
                <CreateAccountDrawer>

                </CreateAccountDrawer>
            </div>
        </div>
    )
}

export default DashboardPage
