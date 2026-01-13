"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { MessageCircle, Users, Heart, Share2, Send } from "lucide-react"

const POSTS = [
    {
        id: 1,
        author: "Alex M.",
        avatar: "/avatars/05.png",
        content: "Just finished my first week of mindfulness meditation. Feeling so much more grounded! 🧘‍♂️ #mindfulness #growth",
        likes: 24,
        comments: 5,
        time: "2h ago",
    },
    {
        id: 2,
        author: "Jordan K.",
        avatar: "/avatars/06.png",
        content: "Has anyone here tried CBT for social anxiety? Looking for some success stories to stay motivated.",
        likes: 15,
        comments: 12,
        time: "4h ago",
    },
    {
        id: 3,
        author: "Casey L.",
        avatar: "/avatars/07.png",
        content: "Remember to be kind to yourself today. You are doing enough. 💙",
        likes: 42,
        comments: 8,
        time: "6h ago",
    },
]

const GROUPS = [
    {
        id: 1,
        name: "Anxiety Support",
        members: 1250,
        active: 45,
    },
    {
        id: 2,
        name: "Depression Recovery",
        members: 980,
        active: 32,
    },
    {
        id: 3,
        name: "Mindful Living",
        members: 2100,
        active: 112,
    },
    {
        id: 4,
        name: "LGBTQ+ Mental Health",
        members: 850,
        active: 28,
    },
]

export function PeerNetworkView() {
    return (
        <div className="flex flex-col gap-6 p-4 h-[calc(100vh-2rem)]">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold tracking-tight">Peer Network</h2>
                <p className="text-muted-foreground">Connect, share, and grow with a supportive community.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_300px] h-full overflow-hidden">
                {/* Main Feed */}
                <div className="flex flex-col gap-4 overflow-hidden h-full">
                    <Card className="p-4">
                        <div className="flex gap-4">
                            <Avatar>
                                <AvatarFallback>ME</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 gap-2 flex">
                                <Input placeholder="Share your thoughts..." className="flex-1" />
                                <Button size="icon">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>

                    <ScrollArea className="flex-1">
                        <div className="space-y-4 pb-4">
                            {POSTS.map((post) => (
                                <Card key={post.id}>
                                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                        <Avatar>
                                            <AvatarImage src={post.avatar} />
                                            <AvatarFallback>{post.author.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-sm">{post.author}</h3>
                                            <p className="text-xs text-muted-foreground">{post.time}</p>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pb-2">
                                        <p className="text-sm">{post.content}</p>
                                    </CardContent>
                                    <CardFooter className="pt-2 flex gap-4 text-muted-foreground">
                                        <Button variant="ghost" size="sm" className="gap-2">
                                            <Heart className="h-4 w-4" />
                                            {post.likes}
                                        </Button>
                                        <Button variant="ghost" size="sm" className="gap-2">
                                            <MessageCircle className="h-4 w-4" />
                                            {post.comments}
                                        </Button>
                                        <Button variant="ghost" size="sm" className="ml-auto">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                {/* Sidebar: Groups & Chat */}
                <div className="flex flex-col gap-4 overflow-hidden h-full">
                    <Card className="flex-1 flex flex-col overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-lg">Your Groups</CardTitle>
                        </CardHeader>
                        <ScrollArea className="flex-1">
                            <div className="px-6 pb-6 space-y-4">
                                {GROUPS.map((group) => (
                                    <div key={group.id} className="flex items-center justify-between">
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">{group.name}</p>
                                            <p className="text-xs text-muted-foreground">{group.members} members • {group.active} online</p>
                                        </div>
                                        <Button variant="outline" size="sm">Visit</Button>
                                    </div>
                                ))}
                                <Separator />
                                <Button variant="secondary" className="w-full">Discover Groups</Button>
                            </div>
                        </ScrollArea>
                    </Card>

                    <Card className="h-1/3">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                Live Chat
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-sm text-muted-foreground flex items-center justify-center h-full pb-8">
                                Select a friend to start chatting
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
