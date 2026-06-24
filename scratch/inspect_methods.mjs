import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

async function test() {
  try {
    // We don't even need a real model if we just want to see the object structure
    // But streamText might fail if model is missing.
    // Let's mock a bit if needed or just use a dummy string if it allows it.
    const result = streamText({
      model: {
        modelId: 'test',
        provider: 'test',
        doStream: () => {},
      },
      messages: [{ role: 'user', content: 'hi' }],
    });
    console.log('Result prototype methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(result)));
    console.log('Result direct keys:', Object.keys(result));
  } catch (e) {
    console.log('Caught error, but checking object if it exists...');
    if (e.result) {
       console.log('Result in error methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(e.result)));
    } else {
       console.error(e);
    }
  }
}

test();
