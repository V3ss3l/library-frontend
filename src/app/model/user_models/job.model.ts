export class Job{
  id?: number;
  jobName: string;

  constructor(jobName?: string){
    this.jobName = jobName ?? "";
  }
}
