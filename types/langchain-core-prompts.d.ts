declare module '@langchain/core/prompts' {
  export class PromptTemplate {
    constructor(args: any)
    format(values: Record<string, any>): Promise<string>
  }
}

declare module '@langchain/core/prompts.cjs' {
  export { PromptTemplate } from '@langchain/core/prompts';
}
