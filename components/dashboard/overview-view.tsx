"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, MessageSquare, Trophy, ArrowUpRight } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Quote } from "lucide-react"

const MOOD_DATA = [
    { day: "Mon", mood: 6 },
    { day: "Tue", mood: 8 },
    { day: "Wed", mood: 7 },
    { day: "Thu", mood: 5 },
    { day: "Fri", mood: 8 },
    { day: "Sat", mood: 9 },
    { day: "Sun", mood: 8 },
]

export function OverviewView() {
    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold tracking-tight">Welcome back, Alex!</h2>
                <p className="text-muted-foreground">Here&apos;s an overview of your mental wellness journey.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Coming Up</CardTitle>
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Tomorrow</div>
                        <p className="text-xs text-muted-foreground">Therapy with Dr. Rodriguez at 2:00 PM</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Community</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3 New</div>
                        <p className="text-xs text-muted-foreground">Messages in Anxiety Support</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Streak</CardTitle>
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12 Days</div>
                        <p className="text-xs text-muted-foreground">Of mindful meditation</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg Mood</CardTitle>
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">7.8</div>
                        <p className="text-xs text-muted-foreground">+1.2 from last week</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Mood Tracker</CardTitle>
                        <CardDescription>Your emotional well-being over the last 7 days.</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={MOOD_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={10} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="mood"
                                        stroke="hsl(var(--primary))"
                                        fillOpacity={1}
                                        fill="url(#colorMood)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Quote className="h-5 w-5 text-primary" />
                            Daily Affirmation
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between h-[180px]">
                        <blockquote className="text-xl font-medium italic text-foreground/80">
                            &quot;You don&apos;t have to control your thoughts. You just have to stop letting them control you.&quot;
                        </blockquote>
                        <div className="flex justify-end">
                            <Button variant="outline" size="sm">New Quote</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
