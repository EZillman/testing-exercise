
import { sendMessage } from './../ts/main';

test('should be what goes in', () => {
    const call = sendMessage('Hello World!');
    expect(call).toBe('Hello World!');
})