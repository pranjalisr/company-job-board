'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { postJob } from '../actions/post-job'

export function JobPostingForm() {
  const router = useRouter()
  const [type, setType] = useState('full-time')

  async function handleSubmit(formData: FormData) {
    await postJob(formData)
    router.refresh()
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Job Title</Label>
        <Input id="title" name="title" required />
      </div>
      <div>
        <Label htmlFor="skills">Required Skills (comma-separated)</Label>
        <Textarea id="skills" name="skills" required />
      </div>
      <div>
        <Label htmlFor="salary">Expected CTC</Label>
        <Input id="salary" name="salary" required />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input id="location" name="location" required />
      </div>
      <div>
        <Label htmlFor="type">Job Type</Label>
        <Select name="type" value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Select job type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-time">Full-time</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
            <SelectItem value="remote">Remote</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Post Job</Button>
    </form>
  )
}

