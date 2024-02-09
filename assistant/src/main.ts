require('dotenv').config();

import OpenAI from 'openai';

const openai = new OpenAI();

// TODO: read sensistive environment variables (e.g., api keys) from a KMS with some script
const main = async () => {
    // test openAI
    const completion = await openai.chat.completions.create({
        messages: [{role: 'system', content: 'You are a helpful assistante'}],
        model: 'gpt-3.5-turbo'
    })

    console.log(completion.choices[0]);
}

/** Run the program. */
main();

export {}