export class Campaign {
  constructor(
    public name: string,
    public keywords: string,
    public bidAmount: bigint,
    public campaignFund: bigint,
    public status: boolean,
    public town: string,
    public radius: number) {
  }
}
