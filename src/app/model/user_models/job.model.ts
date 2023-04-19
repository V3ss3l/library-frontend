export class Job{
  id: number;
  jobName: string;

  constructor(id?: number, jobName?: string){
    this.id = id ?? 0;
    this.jobName = jobName ?? "";
  }
}
