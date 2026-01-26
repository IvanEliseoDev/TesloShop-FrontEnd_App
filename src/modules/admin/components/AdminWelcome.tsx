import React, { type FC } from 'react'

interface WelcomeProps{
    title: string
    subtitle?: string 
}
export const AdminWelcome:FC<WelcomeProps> = ({title,subtitle = "Here's what's happening with your business today."}) => {
    return (
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {title}
            </h1>
            <p className="text-gray-600">
                {subtitle}
            </p>
        </div>
    )
}
