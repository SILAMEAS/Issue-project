export interface IGetIsues {
    id: number;
    title: string;
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "CLOSE";
    createAt: Date;
    updatedAt: Date;
  }