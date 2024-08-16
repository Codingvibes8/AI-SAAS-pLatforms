


import {
    ImageIcon,
    LayoutIcon,
    MessageSquareIcon,
    Settings,
    VideoIcon,
    Music,
    Code
} from "lucide-react";



export const routes = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: LayoutIcon,
        color: 'text-rose-700'
    },
    {
        label: 'Conversation',
        href: '/conversation',
        icon: MessageSquareIcon,
        color: 'text-sky-700'
    },
    {
        label: 'Code',
        href: '/code',
        icon: Code,
        color: 'text-emerald-700'
    },
    {
        label: 'Image Generation',
        href: '/image',
        icon: ImageIcon,
        color: 'text-pink-800'
    },
    {
        label: 'Video Generation',
        href: '/video',
        icon: VideoIcon,
        color: 'text-green-600'
    },
    {
        label: 'Music Generation',
        href: '/music',
        icon: Music,
        color: 'text-orange-500'
    },
    {
        label: 'Settings',
        href: '/setting',
        icon: Settings,
        color: 'text-emerald-700'
    },
]