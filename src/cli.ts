#!/usr/bin/env node

import 'dotenv/config';
import { Command } from 'commander';
import { generatePlan } from './planner';
import { printPlan } from './utils';
import chalk from 'chalk';

const program = new Command();

program
    .version('1.0.0')
    .description("A CLI tool to generate a development plan from a natural language request.")
    .argument('<request>', 'The software development request in natural language.')
    .option('--json', 'Output the plan in JSON format')
    .action(async (request: string, options) => {
        try {
            const plan = await generatePlan(request);
            if (plan) {
                if (options.json) {
                    console.log(JSON.stringify(plan, null, 2));
                } else {
                    printPlan(plan);
                }
            } else {
                console.error(chalk.red('Failed to generate a plan.'));
            }
        } catch (error) {
            console.error(chalk.red('An error occurred:'), error);
        }
    });

program.parse(process.argv);