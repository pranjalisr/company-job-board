import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getJobs } from '../actions/post-job'

export async function JobList() {
  const jobs = await getJobs()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Posted Jobs</h2>
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <strong>Skills:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {job.skills.map((skill: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <strong>Salary:</strong> {job.salary}
              </div>
              <div>
                <strong>Location:</strong> {job.location}
              </div>
              <div>
                <strong>Type:</strong> {job.type}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

