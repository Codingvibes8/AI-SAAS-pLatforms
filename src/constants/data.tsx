


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
        color: 'text-rose-300'
    },
    {
        label: 'Conversation',
        href: '/conversation',
        icon: MessageSquareIcon,
        color: 'text-sky-300'
    },
    {
        label: 'Image Generation',
        href: '/image',
        icon: ImageIcon,
        color: 'text-pink-200'
    },
    {
        label: 'Video Generation',
        href: '/video',
        icon: VideoIcon,
        color: 'text-green-300'
    },
    {
        label: 'Code',
        href: '/code',
        icon: Code,
        color: 'text-emerald-300'
    },
    {
        label: 'Music Generation',
        href: '/music',
        icon: Music,
        color: 'text-orange-300'
    },

    {
        label: 'Settings',
        href: '/setting',
        icon: Settings,
        color: 'text-emerald-400'
    },
]