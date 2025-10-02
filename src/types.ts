export interface Task {
    id: number;
    description: string;
}

export interface Plan {
    plan: Task[];
    dependencies: string;
}