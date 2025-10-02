import chalk from 'chalk';
import { Plan, Task } from './types';

export function printPlan(plan: Plan): void {
    console.log(chalk.bold.blue('Plan:'));
    plan.plan.forEach((task: Task) => {
        console.log(chalk.green(`  ${task.id}. ${task.description}`));
    });

    console.log(chalk.bold.blue('\nDependencies:'));
    console.log(chalk.yellow(`  ${plan.dependencies}`));
}