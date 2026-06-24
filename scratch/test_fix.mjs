
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

async function test() {
  try {
    const result = streamText({
      model: google('gemini-1.5-flash'),
      messages: [{ role: 'user', content: 'hello' }],
    });
    
    if (typeof result.toUIMessageStreamResponse === 'function') {
      console.log('SUCCESS: toUIMessageStreamResponse exists');
    } else {
      console.log('FAILURE: toUIMessageStreamResponse DOES NOT exist');
    }

    if (typeof result.toDataStreamResponse === 'function') {
      console.log('FAILURE: toDataStreamResponse EXISTS (wait, what?)');
    } else {
      console.log('SUCCESS: toDataStreamResponse does NOT exist');
    }
  } catch (e) {
    console.error('Error during test:', e);
  }
}

test();
