"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Star, Clock, MapPin } from "lucide-react"

const THERAPISTS = [
    {
        id: 1,
        name: "Dr. Sarah Mitchell",
        specialty: "Anxiety & Depression",
        image: "/avatars/01.png",
        rating: 4.9,
        location: "Online",
        availability: "Available Today",
    },
    {
        id: 2,
        name: "Dr. James Chen",
        specialty: "Trauma & PTSD",
        image: "/avatars/02.png",
        rating: 4.8,
        location: "Online",
        availability: "Next slots: Tomorrow",
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialty: "Family Therapy",
        image: "/avatars/03.png",
        rating: 4.9,
        location: "New York, NY",
        availability: "Available Today",
    },
    {
        id: 4,
        name: "Dr. Michael Chang",
        specialty: "Cognitive Behavioral Therapy",
        image: "/avatars/04.png",
        rating: 4.7,
        location: "Online",
        availability: "Next slots: Fri",
    },
]

export function BookingView() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [selectedTherapist, setSelectedTherapist] = useState<typeof THERAPISTS[0] | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleBook = (therapist: typeof THERAPISTS[0]) => {
        setSelectedTherapist(therapist)
        setIsDialogOpen(true)
    }

    const confirmBooking = () => {
        setIsDialogOpen(false)
        toast.success("Appointment Confirmed", {
            description: `Booked with ${selectedTherapist?.name} for ${date?.toLocaleDateString()}`
        })
    }

    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold tracking-tight">Therapist Finder</h2>
                <p className="text-muted-foreground">Find and book appointments with top-rated mental health professionals.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_300px]">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    {THERAPISTS.map((therapist) => (
                        <Card key={therapist.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={therapist.image} alt={therapist.name} />
                                    <AvatarFallback>{therapist.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <CardTitle className="text-base">{therapist.name}</CardTitle>
                                    <CardDescription>{therapist.specialty}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="grid gap-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                    <span className="font-medium">{therapist.rating}</span>
                                    <span className="text-muted-foreground">(120+ reviews)</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    <span>{therapist.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <Clock className="h-4 w-4" />
                                    <span>{therapist.availability}</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" onClick={() => handleBook(therapist)}>Book Appointment</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Select Date</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border"
                            />
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-primary">Need Help Now?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">
                                Our crisis counselors are available 24/7.
                            </p>
                            <Button variant="destructive" className="w-full">Get Immediate Help</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirm Appointment</DialogTitle>
                        <DialogDescription>
                            Booking with {selectedTherapist?.name} on {date?.toLocaleDateString()}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="note">Add a note (optional)</Label>
                            <Input id="note" placeholder="Briefly describe what you'd like to discuss..." />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button onClick={confirmBooking}>Confirm Booking</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
