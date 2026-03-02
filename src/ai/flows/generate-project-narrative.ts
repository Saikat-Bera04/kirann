'use server';
/**
 * @fileOverview An AI tool to generate engaging summaries or expanded narratives for projects.
 *
 * - generateProjectNarrative - A function that handles the project narrative generation process.
 * - GenerateProjectNarrativeInput - The input type for the generateProjectNarrative function.
 * - GenerateProjectNarrativeOutput - The return type for the generateProjectNarrative function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectNarrativeInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectDescription: z.string().describe('A brief description of the project and its core functionality.'),
  technologiesUsed: z.array(z.string()).describe('A list of technologies and tools used in the project.'),
  keywords: z.array(z.string()).optional().describe('Optional keywords to emphasize in the narrative.'),
  targetAudience: z.string().optional().describe('Optional target audience for the narrative (e.g., recruiters, technical audience, non-technical audience).'),
});
export type GenerateProjectNarrativeInput = z.infer<typeof GenerateProjectNarrativeInputSchema>;

const GenerateProjectNarrativeOutputSchema = z.object({
  narrative: z.string().describe('The generated project narrative or summary.'),
});
export type GenerateProjectNarrativeOutput = z.infer<typeof GenerateProjectNarrativeOutputSchema>;

export async function generateProjectNarrative(input: GenerateProjectNarrativeInput): Promise<GenerateProjectNarrativeOutput> {
  return generateProjectNarrativeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectNarrativePrompt',
  input: {schema: GenerateProjectNarrativeInputSchema},
  output: {schema: GenerateProjectNarrativeOutputSchema},
  prompt: `You are an expert storyteller and content generator for professional portfolios. Your goal is to create an engaging narrative or summary for a project.

Project Name: {{{projectName}}}
Project Description: {{{projectDescription}}}
Technologies Used: {{#each technologiesUsed}}- {{{this}}}{{/each}}

{{#if keywords}}
Keywords to emphasize: {{#each keywords}}- {{{this}}}{{/each}}
{{/if}}

{{#if targetAudience}}
Target Audience: {{{targetAudience}}}
{{/if}}

Generate a compelling and concise narrative for the project above. Tailor the tone and content based on the target audience and emphasize the provided keywords if available. Focus on the problem solved, the solution implemented, and the impact of the project. The narrative should be suitable for a professional portfolio.
`,
});

const generateProjectNarrativeFlow = ai.defineFlow(
  {
    name: 'generateProjectNarrativeFlow',
    inputSchema: GenerateProjectNarrativeInputSchema,
    outputSchema: GenerateProjectNarrativeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
