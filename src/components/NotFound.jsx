import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function NotFound() {
    const navigate = useNavigate()
    useEffect(() => {
        return navigate('/')
    }, [])
}
